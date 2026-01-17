import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { query } from '../config/database';

export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'User ID not found'
      });
      return;
    }

    // Get user data
    const users = await query(
      'SELECT id, email, name, role, created_at FROM users WHERE id = ?',
      [req.userId]
    ) as any[];

    if (users.length === 0) {
      res.status(404).json({
        error: 'Not Found',
        message: 'User not found'
      });
      return;
    }

    const user = users[0];

    // Get user preferences
    const preferences = await query(
      'SELECT difficulty_level, interests, notification_enabled FROM user_preferences WHERE user_id = ?',
      [req.userId]
    ) as any[];

    // Get progress summary
    const courseProgress = await query(
      `SELECT 
        COUNT(*) as courses_enrolled,
        SUM(CASE WHEN completed = 1 THEN 1 ELSE 0 END) as courses_completed,
        AVG(progress_percentage) as avg_progress
      FROM user_course_progress 
      WHERE user_id = ?`,
      [req.userId]
    ) as any[];

    const gameProgress = await query(
      `SELECT 
        COUNT(*) as games_played,
        MAX(high_score) as highest_score
      FROM user_game_progress 
      WHERE user_id = ?`,
      [req.userId]
    ) as any[];

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.created_at
      },
      preferences: preferences[0] || {
        difficulty_level: 'beginner',
        interests: null,
        notification_enabled: true
      },
      progress: {
        courses: {
          enrolled: courseProgress[0]?.courses_enrolled || 0,
          completed: courseProgress[0]?.courses_completed || 0,
          averageProgress: Math.round(courseProgress[0]?.avg_progress || 0)
        },
        games: {
          played: gameProgress[0]?.games_played || 0,
          highestScore: gameProgress[0]?.highest_score || 0
        }
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error instanceof Error ? error.message : 'Failed to fetch profile'
    });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'User ID not found'
      });
      return;
    }

    const { name, preferences } = req.body;
    const updates: string[] = [];
    const values: any[] = [];

    // Update name if provided
    if (name) {
      updates.push('name = ?');
      values.push(name);
    }

    if (updates.length > 0) {
      values.push(req.userId);
      await query(
        `UPDATE users SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        values
      );
    }

    // Update preferences if provided
    if (preferences) {
      const { difficulty_level, interests, notification_enabled } = preferences;
      const prefUpdates: string[] = [];
      const prefValues: any[] = [];

      if (difficulty_level) {
        prefUpdates.push('difficulty_level = ?');
        prefValues.push(difficulty_level);
      }
      if (interests !== undefined) {
        prefUpdates.push('interests = ?');
        prefValues.push(JSON.stringify(interests));
      }
      if (notification_enabled !== undefined) {
        prefUpdates.push('notification_enabled = ?');
        prefValues.push(notification_enabled);
      }

      if (prefUpdates.length > 0) {
        // Check if preferences exist
        const existing = await query(
          'SELECT id FROM user_preferences WHERE user_id = ?',
          [req.userId]
        ) as any[];

        if (existing.length > 0) {
          prefValues.push(req.userId);
          await query(
            `UPDATE user_preferences SET ${prefUpdates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`,
            prefValues
          );
        } else {
          // Insert new preferences with all fields
          const insertFields = ['user_id', 'difficulty_level', 'interests', 'notification_enabled'];
          const insertValues = [
            req.userId,
            difficulty_level || 'beginner',
            interests ? JSON.stringify(interests) : null,
            notification_enabled !== undefined ? notification_enabled : true
          ];
          
          await query(
            `INSERT INTO user_preferences (${insertFields.join(', ')}) VALUES (?, ?, ?, ?)`,
            insertValues
          );
        }
      }
    }

    res.json({
      message: 'Profile updated successfully'
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error instanceof Error ? error.message : 'Failed to update profile'
    });
  }
};

