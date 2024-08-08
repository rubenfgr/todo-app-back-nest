import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { usersSeeder } from './seeders/users.seed';
import { taskListsSeeder } from './seeders/taskLists.seed';

const prisma = new PrismaClient();
async function main() {
  await usersSeeder(prisma);
  await taskListsSeeder(prisma);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
