import dotenv from 'dotenv';
dotenv.config();

export const {
    PORT,
    SALT_ROUNDS,
    JWT_SECRET,
    JWT_EXPIRATION,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT
} = process.env;