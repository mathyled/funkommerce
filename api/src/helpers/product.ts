import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
/////Get product/////
export const getAllProductsDb = async () => {
  try {
    let allProducts = await prisma.product.findMany({});
    return allProducts;
  } catch (error) {
    console.error(error);
  }
};
export const getFindProductsDb = async (name: any) => {
  try {
    let findProducts = await prisma.product.findMany({
      where: { title: { contains: name, mode: "insensitive" } },
    });
    return findProducts;
  } catch (error) {
    console.error(error);
  }
};
export const getFindProductId = async (id: any) => {
  try {
    let findProduct = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    return findProduct;
  } catch (error) {
    console.error(error);
  }
};
/////Post product/////
export const helperPostProduct = async (props: any) => {
  const {
    title,
    number,
    categoryId,
    image,
    licenseId,
    price,
    formFactor,
    stock,
    brandId,
    description,
  } = props;
  try {
    let newProduct = await prisma.product.create({
      data: {
        title: title,
        number: number,
        Category: { connect: { id: categoryId } },
        image: image,
        License:{connect:{id: licenseId}},
        price: price,
        stock: stock,
        formFactor: formFactor,
        description: description,
        Brand: { connect: { id: brandId } },
      },
    });

    newProduct 
    ? newProduct 
      : [];
  } catch (error) {}
};
