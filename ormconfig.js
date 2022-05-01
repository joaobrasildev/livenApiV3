require('dotenv/config');

module.exports = [
    {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['src/shared/database/entities/*.ts'],
        synchronize: false,
        migrationsTableName: 'migrations',
        migrations: ['src/shared/database/migrations/*.ts'],
        cli: {
            migrationsDir: 'src/shared/database/migrations',
        },
    },
];
