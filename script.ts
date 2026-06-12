import { createHash } from "crypto";
import { prisma } from "./lib/prisma";

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "Asslice",
      email: "alisae@prisma.io",
      passwordHash: hashPassword("alicepassword"),
    },
  });
  console.log("Created user:", user);

  const allUsers = await prisma.user.findMany();
  console.log("All users:", JSON.stringify(allUsers, null, 2));
  
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