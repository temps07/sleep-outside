function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => {
        // If data is an array, return as is. If object with Result, return Result array.
        if (Array.isArray(data)) {
          return data;
        } else if (data && Array.isArray(data.Result)) {
          return data.Result;
        } else {
          return [];
        }
      });
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
