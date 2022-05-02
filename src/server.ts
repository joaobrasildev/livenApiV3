import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

async function start() {
    const port = process.env.PORT || 3000
    await createConnection();
    app.listen(port);
    console.log(`Server running on port ${port}!`);
}

start();
