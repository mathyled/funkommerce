import { PrismaClient, Prisma } from "@prisma/client";
const { product } = new PrismaClient();
/////Get product/////
export const getAllProductsDb = async () => {
  try {
    let allProducts = await product.findMany({
      include: { Category: true, Brand: true, License: true },
    });
    return allProducts;
  } catch (error) {
    console.error(error);
  }
};
export const getFindProductsDb = async (name: any) => {
  try {
    let findProducts = await product.findMany({
      where: { title: { contains: name, mode: "insensitive" } },
      include: { Category: true, Brand: true },
    });
    return findProducts;
  } catch (error) {
    console.error(error);
  }
};
export const getFindProductId = async (id: any) => {
  try {
    let findProduct = await product.findUnique({
      where: { id: Number(id) },
      include: {
        Category: true,
      },
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
    category,
    image,
    license,
    price,
    formFactor,
    stock,
    brand,
    description,
  } = props;

  try {
    let newProduct = await product.create({
      data: {
        title: title,
        number: number,
        Category: {
          connectOrCreate: {
            where: { name: category },
            create: { name: category },
          },
        },
        License: {
          connectOrCreate: {
            where: { name: license },
            create: { name: license },
          },
        },
        image: image,
        price: price,
        stock: stock,
        formFactor: formFactor,
        description: description,
        Brand: {
          connectOrCreate: {
            where: { name: brand },
            create: { name: brand },
          },
        },
      },
    });

    return newProduct;
  } catch (error) {
    console.error(error);
  }
};

/// put product

export const helperPutProduct = async (props: any) => {
  const {
    productId,
    title,
    number,
    category,
    image,
    license,
    price,
    formFactor,
    stock,
    brand,
    description,
  } = props;

  try {
    let findProduct = await product.findUnique({ where: { id: productId } });

    if (findProduct?.title) {
      let putProduct = await product.update({
        where: { id: Number(productId) },
        data: {
          title: title,
          number: number,
          Category: {
            connectOrCreate: {
              where: { name: category },
              create: { name: category },
            },
          },
          License: {
            connectOrCreate: {
              where: { name: license },
              create: { name: license },
            },
          },
          image: image,
          price: price,
          stock: stock,
          formFactor: formFactor,
          description: description,
          Brand: {
            connectOrCreate: {
              where: { name: brand },
              create: { name: brand },
            },
          },
        },
      });

      return putProduct;
    }
    return []
  } catch (error) {
    console.error(error);
  }
};
