import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner"
import { Top20 } from "@/components/Top20";
export default function Home() {
  return (
    <main>
      <div className='bg-green'>
        <Header/>
        <Banner/>
      </div>
      <Top20/>
    </main>
  )
}
