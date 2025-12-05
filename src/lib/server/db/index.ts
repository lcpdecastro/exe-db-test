import { drizzle } from 'drizzle-orm/bun-sqlite';
import { env } from '$env/dynamic/private';
import { Database } from 'bun:sqlite';
import * as schema from './schema';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export const db = drizzle(new Database(env.DATABASE_URL), { schema });
