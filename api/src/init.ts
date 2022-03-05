import axios from "axios";
const { ProductTest, Category, Brand, License } = require("./db");

const productCreate = async () => {
  try {
    for (let i = 1; i <= 5; i++) {
      const { data }: any = await axios
        .get("https://the-funko-api.herokuapp.com/api/v1/items?page=" + i)
        .then((response) => response.data);
      let product = data.map((items: any) =>
        ProductTest.create({
          title: items.attributes.title,
          number: items.attributes.number,
          formFactor: items.attributes["form-factor"],
          category: items.attributes.category,
          license: items.attributes.license || "",
          brand: items.attributes.brand,
          image: items.attributes["image-url"] || " ",
          price: (Math.random() * (50 - 5) + 5).toFixed(2),
          stock: Math.floor(Math.random() * (25 - 0)) + 0,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
export const loadCategory = async (req: Request, res: Response) => {
  try {
    const { data } = await axios
      .get("https://the-funko-api.herokuapp.com//api/v1/categories")
      .then((response) => response.data);

    let allCategorie = data.map((cat: any) =>
      Category.create({ name: cat.attributes.name })
    );
  } catch (error) {
    console.log(error);
  }
};

export const loadBrand = async (req: Request, res: Response) => {
  try {
    for (let i = 1; i <= 3; i++) {
      const { data } = await axios
        .get("https://the-funko-api.herokuapp.com//api/v1/brands/?page=" + i)
        .then((response) => response.data);

      let allBrand = data.map((brand: any) =>
        Brand.create({ name: brand.attributes.name })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadLicense = async (req: Request, res: Response) => {
  try {
    for (let i = 1; i <= 36; i++) {
      const { data } = await axios
        .get("https://the-funko-api.herokuapp.com//api/v1/licenses?page=" + i)
        .then((response) => response.data);

      let allLicense = data.map((license: any) =>
        License.create({ name: license.attributes.name })
      );
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  loadBrand,
  loadLicense,
  loadCategory,
  productCreate,
};
