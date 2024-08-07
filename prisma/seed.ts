import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { usersSeeder } from './seeders/users.seed';

const prisma = new PrismaClient();
async function main() {
  await usersSeeder(prisma);
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
