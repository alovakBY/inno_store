import api from "../api/config";

class ProductsService {
   static instance = new ProductsService();

   getProducts({ page, limit }) {
      return api.get("/products", { params: { page, limit } });
   }

   getProduct(productId) {
      return api.get(`/products/${productId}`);
   }
}

export default ProductsService.instance;
