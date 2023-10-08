import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner"
import { Top20 } from "@/components/Top20";
import { Footer } from "@/components/Footer";
import { Payment } from "@/components/Payment";

export default async function Home() {
  const res = await fetch(process.env.URL_SERVER + "/products")
  const { products } = await res.json()
  console.log(products)
 
  return (
    <main>
      <div className='bg-green'>
        <Header/>
        <Banner/>
      </div>
      <Payment/>
      <Top20 products={products}/>
      <Footer/>
    </main>
  )
}
