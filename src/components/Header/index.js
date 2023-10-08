'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
export function Header({ cart = [] }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [counterProducts, setCounterProducts] = useState(0)
    const [cartMenu, setCartMenu] = useState(false)
    const [subtotal, setSubtotal] = useState(0);
    const [cartProvided, setCartProvided] = useState([])
    useEffect(() => {
        setCounterProducts(cart.reduce((sum, element) => sum + element.counter, 0))
        setSubtotal(calculate(cart))
        setCartProvided(cart)
    }, [cart])
    const calculate = (products)=> {
        return products.reduce((tempSum,item)=> tempSum + (item.price * item.counter),0)
    }
    const removeItemHandler = (id) => {
        const cart = sessionStorage.getItem("cart");
        const cartFormated = JSON.parse(cart)
        const newCart = cartFormated.filter(item=> item.id !== id )
        setCartProvided(newCart)
        setSubtotal(calculate(newCart))
        setCounterProducts(newCart.reduce((sum, element) => sum + element.counter, 0))
        sessionStorage.setItem("cart",newCart)
    }
    return (
        <header
            className="
                absolute
                inset-x-0
                top-0
                z-50
                body-font
                font-source
                font-bold
                text-pink
                flex
                flex-col
                sm:w-full
                flex-wrap
                w-screen
            "
        >
            <nav className="flex items-center justify-between p-3 lg:px-8 h-20">
                <div className="flex justify-center items-center text-2xl pl-8">
                    <a href="/">
                        <i className="fi fi-rr-shop pr-2"></i>
                        Natufaz
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="
                            -m-2.5
                            inline-flex
                            items-center
                            justify-center
                            rounded-md
                            p-2.5
                            text-gray-700
                            text-pink
                        "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="item w-32  flex justify-center items-center border-r-4 border-whiteMof-500 h-10">
                        <a href="/" className="text-sm">Inicio</a>
                    </div>
                    <div className="item w-32 flex justify-center items-center border-r-4 border-whiteMof-500 h-10">
                        <a href="#top-20-productos" className="text-sm">Top 20 productos</a>
                    </div>
                    <div className="item w-32 flex justify-center items-center border-r-4 border-whiteMof-500 h-10">
                        <a href="#" className="text-sm">Promociones</a>
                    </div>
                    <div className="item w-32 flex justify-center items-center h-10">
                        <a href="/login" className="text-sm">Inicio de sesion</a>
                    </div>
                    <div className="item w-32 flex justify-center items-center h-10 relative">
                        <button onClick={() => setCartMenu(true)} className="text-sm">
                            <i className="fi fi-rr-shopping-cart"></i>
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink border-1 border-white rounded-full -top-2 dark:border-gray-900">{counterProducts}</div>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={!mobileMenuOpen ? "hidden" : ""} role="dialog" aria-modal="true" onClick={() => setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-50"></div>
                <div
                    className="
                        fixed
                        inset-y-0
                        right-0
                        z-50
                        w-full
                        overflow-y-auto
                        bg-whiteMof
                        px-6
                        py-6
                        sm:max-w-sm
                        sm:ring-1
                        sm:ring-gray-900/10"
                >
                    <div className="flex items-center justify-start">
                        <a href="#" className="-m-1.5 p-1.5"></a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" id="closeMenu">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root ">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 flex flex-col justify-content items-center">
                                <button onClick={() => setCartMenu(true)}
                                    className="
                                        -mx-3
                                        block
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-base
                                        font-semibold
                                        leading-7
                                        text-gray-900
                                        hover:bg-gray-50
                                        relative
                                    ">
                                    <i className="fi fi-rr-shopping-cart"></i>
                                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink border-1 border-white rounded-full -top-2 dark:border-gray-900">{counterProducts}</div>
                                </button>
                                <a href="/"
                                    className="
                                        -mx-3
                                        block
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-base
                                        font-semibold
                                        leading-7
                                        text-gray-900
                                        hover:bg-gray-50
                                    "
                                >Inicio</a>
                                <a href="#top-20-productos"
                                    className="
                                        -mx-3
                                        block
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-base
                                        font-semibold
                                        leading-7
                                        text-gray-900
                                        hover:bg-gray-50
                                    ">Top 20 productos</a>
                                <a href="#"
                                    className="
                                    -mx-3
                                    block
                                    rounded-lg
                                    px-3
                                    py-2
                                    text-base
                                    font-semibold
                                    leading-7
                                    text-gray-900
                                    hover:bg-gray-50
                                    ">Promociones</a>
                            </div>
                            <div className="py-6 flex justify-items-center">
                                <a href="/login"
                                    className="
                                        -mx-3
                                        block
                                        rounded-lg
                                        px-3
                                        py-2.5
                                        text-base
                                        font-semibold
                                        leading-7
                                        text-gray-900
                                        hover:bg-gray-50
                                    ">Inicio de sesion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div role="dialog" aria-modal="true" className={!cartMenu ? "hidden" : ""}>
                <div className="fixed inset-0 z-50"></div>
                <div
                    className="
                        fixed
                        inset-y-0
                        right-0
                        z-50
                        w-full
                        overflow-y-auto
                        bg-white
                        px-6
                        py-6
                        sm:max-w-sm
                        sm:ring-1
                        sm:ring-gray-900/10"
                >

                    <div className="mt-6 flow-root ">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="flex items-center justify-start">
                                <a href="#" className="-m-1.5 p-1.5"></a>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setCartMenu(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                        aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-2 py-6 flex flex-col justify-content items-center">
                                {
                                    cartProvided.map((item, index) => {
                                        return (
                                            <div className="element flex w-full" key={index}>
                                                <div className="image">
                                                    <Image src={item.images[0]} width={100} height={100} alt="product" ></Image>
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base text-black">
                                                            <h3>
                                                                <a href="#">{item.name}</a>
                                                            </h3>
                                                            <p className="ml-4 text-black">${item.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-black">{
                                                            item.options.find(option => option.value == item.optionSelected).key
                                                        }</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty {item.counter}</p>

                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-green bg-pink w-20 rounded-lg hover:text-pink hover:bg-green" onClick={()=>removeItemHandler(item.id)}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="py-6 flex justify-items-center">
                                <a href="/login"
                                    className="
                                        -mx-3
                                        block
                                        rounded-lg
                                        px-3
                                        py-2.5
                                        text-base
                                        font-semibold
                                        leading-7
                                        text-gray-900
                                        hover:bg-gray-50
                                    ">Subtotal: {subtotal}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}