import { ProductType } from "@/types/Product.type";

export async function getProdukData(): Promise<ProductType[]> {
  return [
    {
      id: "1",
      name: "Sepatu Duramo SL",
      price: 900000,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/...",
      category: "Men's Shoes"
    },
    {
      id: "2",
      name: "Sepatu Samba OG",
      price: 2000000,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/...",
      category: "Men's Shoes"
    }
  ];
}
