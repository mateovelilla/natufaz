"use client"
import { Header } from "@/components/Header"
import { useEffect, useState } from "react"
import Image from "next/image";
export default function Product({ params }) {
  const [product, setProduct] = useState(null);
  const [currentImge, setCurrentImage] = useState("")
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([])
  const [optionSelected, setOptionSelected] = useState(0)
  useEffect(() => {
    const cart = sessionStorage.getItem("cart")
    const getProduct = async function () {
      const res = await fetch(`/products?id=${params.product}`)
      const { product: productToSet } = await res.json()
      setProduct(productToSet)
      setCurrentImage(productToSet.images[0])
    }
    if (!product) {
      getProduct()
    }
    if(cart) {
      setCart(JSON.parse(cart))
    }
  }, [])
  const changeImageHandler = (img) => {
    setCurrentImage(img)
  }
  const addToCart = () =>{
    const productToIncrement = cart.find(item=> item.id === product.id );
    if(counter) {
      if(!productToIncrement) {
        const currentCart = [...cart, {
          ...product,
          optionSelected,
          counter:parseInt(counter)
        }]
        setCart(currentCart)
        sessionStorage.setItem("cart",JSON.stringify(currentCart))
      } else {
        console.log("Hay en el carrito")
        if(optionSelected === productToIncrement.optionSelected) {
          const currentCart = cart.map(item => item.id=== product.id ? {...item, counter: item.counter + parseInt(counter)} : item)
          console.log(currentCart)
          setCart(currentCart)
          sessionStorage.setItem("cart",JSON.stringify(currentCart))
        } else {
          const currentCart = [...cart,
            {
              ...product,
              optionSelected,
              counter:parseInt(counter)
            }
          ]
          setCart(currentCart)
          sessionStorage.setItem("cart",JSON.stringify(currentCart))
        }
      }
      setOptionSelected(0)
      setCounter(0)
    }
  }
  return (
    <div className='bg-green h-24'>
      <Header cart={cart}/>
      {
        !product || !Object.keys(product).length ? "" :
          <div className="pt-48 grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2 pb-12 px-8 w-full">
            <div className="galeria xl:flex xl:flex-col xl:justify-center xl:items-center">
              <div className="imagen-principal h-96 sm:h-96 xl:w-80 bg-cover bg-center rounded-lg flex justify-center relative">
                <Image src={currentImge} width={400} height={400} alt="main Image" className="object-cover z-10" />
                {
                  product.isPromotion ?
                    <span className="bg-pink px-4 text-whiteMof rounded-l-lg z-20 absolute left-0">Promoción</span> : ""
                }
              </div>
              <div className="grid gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-y-4 xl:col-span-1 pt-4 grid-cols-3">
                {
                  product.images.map((img,index) => (
                    <div className="hover:border-2 hover:border-pink h-16"  key={index}>
                      <a onClick={()=>changeImageHandler(img)} className=" h-full w-full">
                        <Image src={img}  width={400} height={400} alt="" className="h-full w-full" />
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-green font-thin">{"Inicio > Tienda > Categoria > Producto"}</p>
              <h3 className="text-green font-bold pt-4 text-lg pb-2">{product.name}</h3>
              <div className="separator border-b-2 border-gray-200 w-14"></div>
              <h3 className="text-green font-bold pt-4 text-lg pb-2">${product.price}</h3>
              <p className="text-green">{product.description}</p>
              <div className="opciones-producto flex pt-4 w-full items-center">
                <label htmlFor="opciones" className="block text-sm font-medium text-gray-900 sm:w-96">Opciones del producto</label>
                <select id="opciones"
                  className="
                  bg-gray-50
                  border
                  border-gray-300
                  text-gray-900
                  text-sm
                  rounded-lg
                  focus:pink
                  focus:border-pink
                  block
                  w-full
                  p-2.5
                  "
                  value={optionSelected}
                  onChange={(event)=> setOptionSelected(event.target.value)}
                >
                  <option value="0">Seleccione una opcion</option>
                  {
                    product.options.map(optionToSelect => (
                      <option key={optionToSelect.value} value={optionToSelect.value}>{optionToSelect.key}</option>
                    ))
                  }
                </select>
              </div>
              <div className="flex carrito pt-4">
                <div className="anexar-carrito sm:w-96">
                  <button onClick={()=>addToCart()}
                    className="inline-flex items-center md:px-6 md:py-2 text-sm md:font-medium text-center text-green bg-pink rounded-full hover:bg-green hover:text-pink focus:ring-4 focus:outline-none focus:ring-green">
                    AÑADIR AL CARRITO
                  </button>
                </div>
                <input type="number" id="cantidad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="" required value={counter}  onChange={(event)=>setCounter(event.target.value)}/>
              </div>
              <div className="terminos text-green pt-4">
                Tener Presenta la Politica de cambios y devoluciones y derecho de retracto
              </div>
              <a href="#politica">Consulte aqui</a>
            </div>
          </div>
      }
    </div>
  )
}
