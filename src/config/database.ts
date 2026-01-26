import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

export const connectDatabase = async (): Promise<void> => {
  try {
    const dbConfig = {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    };

    if (!dbConfig.user || !dbConfig.password || !dbConfig.database) {
      throw new Error('Database credentials not found in environment variables (DB_USER, DB_PASSWORD, DB_NAME)');
    }

    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    
    console.log('✅ MySQL database connected successfully');
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      if (pool) {
        await pool.end();
        console.log('Database connection closed');
      }
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ Database connection error:', error);
    throw error;
  }
};

export const getDatabase = (): mysql.Pool => {
  if (!pool) {
    throw new Error('Database not connected. Call connectDatabase() first.');
  }
  return pool;
};

export const query = async (sql: string, params?: any[]): Promise<any> => {
  const db = getDatabase();
  const [results] = await db.execute(sql, params);
  return results;
};

