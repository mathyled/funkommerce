import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const helperGetAllBrands = async () => {
  try {
    let allBrands = await prisma.brand.findMany({});  ///include: { Product: true } comando para incluir la tablas de productos
    return allBrands
  } catch (error) {
      console.error(error);
  }
};
