"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Admin() {
    const router = useRouter()
    const [ products, setProduct ] = useState(null)
    useEffect(()=>{
        const getProducts = async function () {
            const res = await fetch('/products')
            const {products: productsToSet} = await res.json()
            setProduct(productsToSet)
        }
        if(!products) {
            getProducts()
        }
    },[])
    const closeSesionHandler = () => {
        sessionStorage.removeItem("accessToken")
        router.replace("/login")
    }
    return (
        <div className="box-content flex">
            <div className="hidden bg-green col-span-2 pt-24 lg:flex flex-col items-center p-12">
                <h3 className="text-whiteMof pb-4">CRUD DE OPERACIONES</h3>
                <div className="bg-pink rounded-full h-32 w-32 flex items-center justify-center">
                    <Image src="/employee-2.png" className="object-fill rounded-full" alt="" width={500} height={500} />
                </div>
                <h3 className="text-whiteMof font-bold pt-4"> Pedro Gonzales</h3>
                <p className="text-whiteMof">Admin</p>
                <div className="menu h-full w-full pt-4">
                    <ul className="flex flex-col items-center h-96 w-full flex flex-col justify-evenly">
                        <li>
                            <a className=" hover:bg-pink hover:rounded-lg px-12 py-2" href="/">
                                <i className="fi fi-rr-home pr-4"></i>
                                inicio
                            </a>
                        </li>
                        <li>
                            <button className=" hover:bg-pink hover:rounded-lg px-12 py-2">
                                <i className="fi fi-rr-coins pr-4"></i>
                                Pagos
                            </button>
                        </li>
                        <li >
                            <button className="hover:bg-pink hover:rounded-lg px-12 py-2">
                                <i className="fi fi-rr-stats pr-4"></i>
                                Reportes
                            </button>
                        </li>
                        <li >
                            <button className=" hover:bg-pink hover:rounded-lg px-12 py-2">
                                <i className="fi fi-rr-settings pr-4"></i>
                                Configuraciones
                            </button>
                        </li>
                        <li >
                            <button className=" hover:bg-pink hover:rounded-lg px-12 py-2" onClick={()=>closeSesionHandler()}>
                                <i className="fi fi-rr-exit pr-4"></i>
                                Cerrar Sesion
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-12 h-screen w-screen bg-white flex flex-col justify-center items-start">
            <h3 className="text-black font-bold pb-4">Lista de productos</h3>
            <hr className="bg-gray-500 w-full h-0"/>
            <div className="table w-full">
                <div className="table-header sm:flex hidden justify-between">
                    <p className="w-12"></p>
                    <p className="text-gray-400 w-16">Producto</p>
                    <p className="text-gray-400 w-12">Precio</p>
                    <p className="text-gray-400 w-24">Unidades Disponibles</p>
                    <p className="w-28 text-gray-400"></p>
                </div>
                <div className="table-body w-full pt-6 pr-12">
                    {
                        !products ? 'Loading':
                        products.map(product => (
                            <div className="bg-gray-200 rounded-lg flex justify-between items-center p-2 shadow shadow-sm mb-4">
                            <Image src={product.images[0]} className="w-12 h-12 rounded-lg hidden sm:block" width={500} height={500}/>
                            <p className="text-gray-500 w-16">{product.name}</p>
                            <p className="text-gray-500 w-12 hidden sm:block">${product.price}</p>
                            <p className="text-gray-500 w-24 hidden sm:block">20</p>
                            <div className="buttons w-28 flex justify-center text-pink">
                                <button><i className="fi fi-rr-edit pr-4"></i></button>
                                <button><i className="fi fi-rr-trash pr-4"></i></button>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className="table-footer w-full">
                    <nav aria-label="Page navigation" className="w-full ">
                        <ul className="flex -space-x-px text-sm w-full justify-center pr-12">
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-pink bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">{"<"}</a>
                          </li>
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-pink bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                          </li>
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-pink bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                          </li>
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 text-pink border border-gray-300 hover:bg-blue-100 hover:text-gray-200">3</a>
                          </li >
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-pink bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                          </li>
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-pink bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                          </li>
                          <li className="sm:w-16">
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-pink bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">{">"}</a>
                          </li>
                        </ul>
                      </nav>
                </div>
            </div>
        </div>
        </div>
    )
}
