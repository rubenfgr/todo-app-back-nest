import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

export const usersSeeder = async (prisma: PrismaClient) => {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@todoapp.es' },
    update: {},
    create: {
      email: 'admin@todoapp.es',
      name: 'admin',
      password: hashSync('admin', 10),
    },
  });
  console.log('Admin user created:', admin);
};
