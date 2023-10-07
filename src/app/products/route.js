import NodeCache from "node-cache";
const cache = new NodeCache();
import path from 'path';
import { promises as fs } from 'fs';
const jsonDirectory = path.join(process.cwd(), 'public');

export async function GET() {
  const products = cache.get("products")
  const productsBase = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  if(!products)
    cache.set("products", JSON.parse(productsBase))

  return Response.json({ products: cache.get("products") })
}
export async function POST(req) {
  let currentProducts = cache.get("products")
  const product = await req.json()
  if(!currentProducts) {
    const productsBase = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    cache.set("products", cache.set("products", JSON.parse(productsBase)))

  }
  if(product) {
    currentProducts = cache.get("products")
    currentProducts.push(product)
    cache.set("products", currentProducts)
  }
  return Response.json({message: "ok"})
} 