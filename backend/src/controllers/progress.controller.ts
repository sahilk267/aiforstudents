import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { query } from '../config/database';

export const getProgress = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'User ID not found'
      });
      return;
    }

    // Get course progress
    const courseProgress = await query(
      `SELECT 
        ucp.id,
        ucp.course_id,
        c.title as course_title,
        ucp.progress_percentage,
        ucp.completed,
        ucp.score,
        ucp.last_accessed_at
      FROM user_course_progress ucp
      JOIN courses c ON ucp.course_id = c.id
      WHERE ucp.user_id = ?
      ORDER BY ucp.last_accessed_at DESC`,
      [req.userId]
    ) as any[];

    // Get game progress
    const gameProgress = await query(
      `SELECT 
        ugp.id,
        ugp.game_id,
        g.game_key,
        g.title as game_title,
        ugp.level,
        ugp.score,
        ugp.high_score,
        ugp.achievements,
        ugp.last_played_at
      FROM user_game_progress ugp
      JOIN games g ON ugp.game_id = g.id
      WHERE ugp.user_id = ?
      ORDER BY ugp.last_played_at DESC`,
      [req.userId]
    ) as any[];

    // Calculate overall statistics
    const overallStats = await query(
      `SELECT 
        (SELECT COUNT(*) FROM user_course_progress WHERE user_id = ?) as total_courses,
        (SELECT SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END) FROM user_course_progress WHERE user_id = ?) as completed_courses,
        (SELECT AVG(progress_percentage) FROM user_course_progress WHERE user_id = ?) as avg_course_progress,
        (SELECT COUNT(*) FROM user_game_progress WHERE user_id = ?) as total_games,
        (SELECT SUM(high_score) FROM user_game_progress WHERE user_id = ?) as total_game_score
      `,
      [req.userId, req.userId, req.userId, req.userId, req.userId]
    ) as any[];

    const stats = overallStats[0] || {};

    res.json({
      overall: {
        completionRate: stats.total_courses > 0 
          ? Math.round((stats.completed_courses / stats.total_courses) * 100) 
          : 0,
        averageProgress: Math.round(stats.avg_course_progress || 0),
        totalCourses: stats.total_courses || 0,
        completedCourses: stats.completed_courses || 0,
        totalGames: stats.total_games || 0,
        totalGameScore: stats.total_game_score || 0
      },
      courses: courseProgress.map(cp => ({
        courseId: cp.course_id,
        courseTitle: cp.course_title,
        progress: cp.progress_percentage,
        completed: cp.completed === 1,
        score: cp.score,
        lastAccessed: cp.last_accessed_at
      })),
      games: gameProgress.map(gp => ({
        gameId: gp.game_id,
        gameKey: gp.game_key,
        gameTitle: gp.game_title,
        level: gp.level,
        score: gp.score,
        highScore: gp.high_score,
        achievements: gp.achievements ? JSON.parse(gp.achievements) : [],
        lastPlayed: gp.last_played_at
      }))
    });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error instanceof Error ? error.message : 'Failed to fetch progress'
    });
  }
};

export const saveGameProgress = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'User ID not found'
      });
      return;
    }

    const { gameId } = req.params;
    const { score, level, achievements, completedStage } = req.body;

    if (!gameId) {
      res.status(400).json({
        error: 'Validation Error',
        message: 'Game ID is required'
      });
      return;
    }

    // Verify game exists
    const games = await query(
      'SELECT id FROM games WHERE id = ?',
      [gameId]
    ) as any[];

    if (games.length === 0) {
      res.status(404).json({
        error: 'Not Found',
        message: 'Game not found'
      });
      return;
    }

    // Check if progress exists
    const existingProgress = await query(
      'SELECT id, high_score FROM user_game_progress WHERE user_id = ? AND game_id = ?',
      [req.userId, gameId]
    ) as any[];

    const achievementsJson = achievements ? JSON.stringify(achievements) : null;
    const completedStagesJson = completedStage ? JSON.stringify([completedStage]) : null;

    if (existingProgress.length > 0) {
      // Update existing progress
      const currentHighScore = existingProgress[0].high_score || 0;
      const newHighScore = score > currentHighScore ? score : currentHighScore;

      await query(
        `UPDATE user_game_progress 
        SET level = COALESCE(?, level),
            score = COALESCE(?, score),
            high_score = ?,
            achievements = COALESCE(?, achievements),
            completed_stages = COALESCE(?, completed_stages),
            last_played_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ? AND game_id = ?`,
        [level, score, newHighScore, achievementsJson, completedStagesJson, req.userId, gameId]
      );

      res.json({
        message: 'Game progress updated successfully',
        gameId: parseInt(gameId),
        progress: {
          level: level || existingProgress[0].level,
          score,
          highScore: newHighScore,
          achievements: achievements || []
        }
      });
    } else {
      // Create new progress
      await query(
        `INSERT INTO user_game_progress 
        (user_id, game_id, level, score, high_score, achievements, completed_stages) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [req.userId, gameId, level || 1, score || 0, score || 0, achievementsJson, completedStagesJson]
      );

      res.status(201).json({
        message: 'Game progress saved successfully',
        gameId: parseInt(gameId),
        progress: {
          level: level || 1,
          score: score || 0,
          highScore: score || 0,
          achievements: achievements || []
        }
      });
    }

    // Log activity
    try {
      await query(
        'INSERT INTO user_activity_log (user_id, activity_type, activity_data) VALUES (?, ?, ?)',
        [req.userId, 'game_played', JSON.stringify({ gameId, score, level })]
      );
    } catch (logError) {
      console.error('Activity log error:', logError);
    }
  } catch (error) {
    console.error('Save game progress error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error instanceof Error ? error.message : 'Failed to save progress'
    });
  }
};

