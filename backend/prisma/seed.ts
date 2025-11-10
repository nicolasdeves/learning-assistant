import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.topic.create({
    data: {
      id: 1,
      name: 'Inglês',
    },
  });

  await prisma.level.createMany({
    data: [
      { name: 'A1', topicId: 1 },
      { name: 'A2', topicId: 1 },
      { name: 'B1', topicId: 1 },
      { name: 'B2', topicId: 1 },
      { name: 'C1', topicId: 1 },
      { name: 'C2', topicId: 1 },
    ],
  });

  await prisma.exerciseType.create({
    data: {
      id: 1,
      description: 'Alternativas'
    }
  })

    await prisma.community.create({
    data: {
      id: 1,
      name: "Inglês",
      topicId: 1,
    }
  })

  console.log('🌱 Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
