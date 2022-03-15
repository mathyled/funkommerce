import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import axios, { AxiosResponse } from "axios";
import console from "console";

const requestCategory = async () => {
  const { data }: any = await axios
    .get("https://the-funko-api.herokuapp.com//api/v1/categories")
    .then((response: AxiosResponse) => response.data);

  return data;
};


const requestBrand = async () => {
  let array: any[] = ["Pop!", "Plush"];
  for (let i = 1; i <= 3; i++) {
    const { data }: any = await axios
      .get(`https://the-funko-api.herokuapp.com/api/v1/brands/?page=${i}`)
      .then((response: AxiosResponse) => response.data);

    data.map((element: any) => {
      !array.includes(element.attributes.name)
        ? array.push(element.attributes.name)
        : "";
    });
  }
  let array2 = array.flat();

  return array2;
};

const requestProduct = async () => {
  let array: any[] = [];
  for (let i = 10; i <= 15; i++) {
    const { data }: any = await axios
      .get(`https://the-funko-api.herokuapp.com//api/v1/items/?page=${i}`)
      .then((response: AxiosResponse) => response.data);
    array.push(data);
  }
  let array2 = array.flat();

  return array2;
};

export const init = async () => {
  try {
    const [allCategory, allbrands, allProducts] = await Promise.all([
      requestCategory(),
      requestBrand(),
      requestProduct(),
    ]);
    const verification = await prisma.product.findMany({});

    if (!verification.length) {
      allbrands.map(async (b: any) => {
        await prisma.brand.create({
          data: {
            name: b,
          },
        });
      });

      allCategory.map(async (cat: any) => {
        await prisma.category.create({
          data: {
            name: cat.attributes.name,
          },
        });
      });


      allProducts.map(async (product: any) => {
        await prisma.product.create({
          data: {
            title: product.attributes.title,
            number: product.attributes.number,
            price: (Math.random() * (50 - 5) + 5).toFixed(2),
            stock: Math.floor(Math.random() * (25 - 0)) + 0,
            formFactor: product.attributes["form-factor"],
            image:
              product.attributes["image-url"] ||
              "https://cdn.shopify.com/s/files/1/0154/8877/8288/products/1-Mystery-funko-pop-Brand-new-unopened-ones.jpg?v=1577791303",
            Category: {
              connectOrCreate: {
                where: { name: product.attributes.category },
                create: { name: product.attributes.category }
              },
            },
            Brand: {
              connectOrCreate: {
                where: { name: product.attributes.brand },
                create: { name: product.attributes.brand }
              },
            },
            License: {
              connectOrCreate: {
                where: {
                  name: product.attributes.license
                    ? product.attributes.license
                    : "Otros",
                },
                create: {
                  name: product.attributes.license
                    ? product.attributes.license
                    : "Otros",
                },
              },
            },
          },
        });
      });
    } else {
      console.log("database loaded");
    }
  } catch (error) {
    console.log(error);
  }
};
