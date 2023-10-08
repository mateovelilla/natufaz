"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
export default function Login() {
    const router = useRouter()
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const loginHandler = async (event) => {
        event.preventDefault()
        const res = await fetch("/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user,
                password
            })
        })
        if(res.status == 200) {
            const {accessToken} = await res.json()
            sessionStorage.setItem("accessToken", accessToken)
            if(res.ok) {
                router.replace(`/admin`)
            }
        }
    }
    return ( 
        <div>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2 h-screen">
                <div className="form order-2 sm:order-1 flex flex-col justify-start items-center h-full pt-24">
                    <div className="logo flex justify-center items-center text-6xl pl-4 text-pink font-extrabold hidden sm:block">
                        <i className="fi fi-rr-shop"></i>
                    </div>
                    <div className="name flex justify-center items-center pl-4">
                        <h3 className="title text-pink font-extrabold text-4xl">natufaz</h3>
                    </div>
                    <div className="campos pt-16 w-full px-12 text-pink">
                        <form onSubmit={loginHandler}>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-pink bg-transparent border-0 border-b-2 border-pink appearance-none focus:outline-none focus:ring-0 focus:border-pink peer"
                                    placeholder=" " required defaultValue={user} onChange={({target})=>setUser(target.value)} />
                                <label htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-pink duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-pink bg-transparent border-0 border-b-2 border-pink appearance-none focus:outline-none focus:ring-0 focus:border-pink peer"
                                    placeholder=" " required defaultValue={password} onChange={({target})=>setPassword(target.value)}/>
                                <label htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-pink duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                            </div>
                            <div className="submit flex justify-center px-8">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-green bg-pink rounded-full focus:ring-4 focus:outline-none">
                                    INICIAR SESION
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="banner order-1 sm:order-2 bg-green flex flex-col justify-center items-center h-full w-full">
                    <h3 className="text-pink  font-extrabold text-4xl">Bienvenido a</h3>
                    <div className="logo pt-8 flex justify-center items-center text-8xl pl-4 text-pink font-extrabold hidden sm:block">
                        <i className="fi fi-rr-shop"></i>
                    </div>
                    <h3 className="title text-pink font-extrabold text-4xl">natufaz</h3>
                    <p className="text-pink p-6 text-center">Esta pantalla emergente es solo para administradores o usuarios registrados previamente, consulte con el administrador si desea formar parte de los usuarios registrados con beneficios</p>
                </div>
            </div>
        </div>
    )
}