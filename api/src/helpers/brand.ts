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

export const postBrand = async (brandName: string)=>{
  try{
    await prisma.brand.create({
      data: { name: brandName }
  })
  return "ok"
  }catch(error){
    console.log(error)
  }
}