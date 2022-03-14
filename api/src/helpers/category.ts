import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const helperGetAllCategory = async () => {
  try {
    let allCategory = await prisma.category.findMany({}); ///include: { Product: true } comando para incluir la tablas de productos
    return allCategory;
  } catch (error) {
    console.error(error);
  }
};

export const postCategory = async (categoryName: string) =>{
  try{
    await prisma.category.create({
      data: { name: categoryName }
  })
  return "ok"
  }catch(error){

  }
}