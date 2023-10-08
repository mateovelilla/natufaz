"use client"
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner"
import { Top20 } from "@/components/Top20";
import { Footer } from "@/components/Footer";
import { Payment } from "@/components/Payment";
import { useEffect, useState } from "react"
export default function Home() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    const productsInStore = sessionStorage.getItem("cart");
    const getProducts = async () => {
      const res = await fetch("/products")
      const { products } = await res.json()
      console.log(products)
      setProducts(products)
    }
    if (productsInStore) {
      const cartToLoad = JSON.parse(productsInStore)
      setCart(cartToLoad)
    }
    getProducts()
  }, [])
  return (
    <main>
      <div className='bg-green'>
        <Header cart={cart}/>
        <Banner />
      </div>
      <Payment />
      <Top20 products={products} />
      <Footer />
    </main>
  )
}
