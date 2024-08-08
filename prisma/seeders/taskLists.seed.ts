import { PrismaClient, TaskStatus } from '@prisma/client';
import { addMonths } from 'date-fns';

export const taskListsSeeder = async (prisma: PrismaClient) => {
  const taskList = await prisma.taskList.findFirst({
    where: {
      title: 'My Task List',
    },
  });

  if (taskList) {
    return;
  }

  const adminUser = await prisma.user.findFirst({
    where: {
      email: 'admin@todoapp.es',
    },
  });

  if (!adminUser) {
    throw new Error('Admin user not found');
  }

  const collaboratorUser = await prisma.user.findFirst({
    where: {
      email: 'collaborator@todoapp.es',
    },
  });

  if (!collaboratorUser) {
    throw new Error('Collaborator user not found');
  }

  const taskListCreated = await prisma.taskList.create({
    data: {
      title: 'My Task List',
      order: 1,
      userId: adminUser.id,
    },
  });

  console.log('TaskList created:', taskListCreated);

  await prisma.collaborator.upsert({
    where: {
      userId_listId: {
        listId: taskListCreated.id,
        userId: collaboratorUser.id,
      },
    },
    update: {},
    create: {
      listId: taskListCreated.id,
      userId: collaboratorUser.id,
    },
  });

  let tagTest = await prisma.tag.findFirst({
    where: {
      name: 'Test',
    },
  });

  if (!tagTest) {
    tagTest = await prisma.tag.create({
      data: {
        name: 'Test',
      },
    });

    console.log('Tag created:', tagTest);
  }

  let task1 = await prisma.task.findFirst({
    where: {
      title: 'Task 1',
    },
  });

  if (!task1) {
    task1 = await prisma.task.create({
      data: {
        title: 'Task 1',
        order: 1,
        listId: taskListCreated.id,
        description: 'Task 1 description',
        status: TaskStatus.PENDING,
        dueDate: addMonths(new Date(), 1),
        subTags: {
          createMany: {
            data: [
              {
                title: 'Task 1 subtag 1',
                order: 1,
                status: TaskStatus.PENDING,
              },
              {
                title: 'Task 1 subtag 2',
                order: 2,
                status: TaskStatus.PENDING,
              },
            ],
          },
        },
      },
    });

    await prisma.taskTag.upsert({
      where: {
        taskId_tagId: {
          taskId: task1.id,
          tagId: tagTest.id,
        },
      },
      update: {},
      create: {
        taskId: task1.id,
        tagId: tagTest.id,
      },
    });

    console.log('Task 1 created:', task1);
  }

  let task2 = await prisma.task.findFirst({
    where: {
      title: 'Task 2',
    },
  });

  if (!task2) {
    task2 = await prisma.task.create({
      data: {
        title: 'Task 2',
        order: 2,
        listId: taskListCreated.id,
        description: 'Task 2 description',
        status: TaskStatus.PENDING,
        dueDate: addMonths(new Date(), 2),
      },
    });

    await prisma.taskTag.upsert({
      where: {
        taskId_tagId: {
          taskId: task2.id,
          tagId: tagTest.id,
        },
      },
      update: {},
      create: {
        taskId: task2.id,
        tagId: tagTest.id,
      },
    });

    console.log('Task 2 created:', task2);
  }
};
