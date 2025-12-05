import { invalidateAll } from '$app/navigation';
import { db } from '$lib/server/db'
import { user } from '$lib/server/db/schema.js'

export async function load () {
  return {
    people: await db.select().from(user)
  };
}

export const actions = {
  async default () {
    await db.insert(user).values({ age: Math.floor(Math.random() * 80) + 10 });
  }
}
