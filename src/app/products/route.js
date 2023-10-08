import NodeCache from "node-cache";
const cache = new NodeCache();
import path from 'path';
import { promises as fs } from 'fs';
const jsonDirectory = path.join(process.cwd(), 'public');

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  let products = cache.get("products")
  const productsBase = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  let response = {}
  if(!products)
    cache.set("products", JSON.parse(productsBase))
  
  if(id){
    products = cache.get("products")
    const product = products.find(product=> product.id==id)
    response = { product: !product ? {} : product }
    console.log("producto encontreado", product)
  }else{
    response = { products: cache.get("products") }
  }

  return Response.json(response)
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