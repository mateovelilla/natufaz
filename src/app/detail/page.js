import { Header } from "@/components/Header"
export default function Detail() {
  return (
    <div className='bg-green h-24'>
      <Header />
      <div className="pt-48 grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2 pb-12 px-8 w-full">
        <div className="galeria xl:flex xl:flex-col xl:justify-center xl:items-center">
          <div className="imagen-principal bg-pink bg-[url('/empty-product.png')] h-96 sm:h-96 xl:w-80 bg-cover bg-center rounded-lg">
            <span className="bg-pink px-4 text-whiteMof rounded-l-lg">Promoción</span>
          </div>
          <div className="grid gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-y-4 xl:col-span-1 pt-4 grid-cols-3">
            <div className="hover:border-2 hover:border-pink h-16">
              <a href="" className=" h-full w-full">
                <img src="/empty-product.png" alt="" className="h-full w-full" />
              </a>
            </div>
            <div className="hover:border-2 hover:border-pink h-16">
              <a href="" className="h-full w-full">
                <img src="/empty-product.png" alt="" className="h-full w-full" />
              </a>
            </div>
            <div className="hover:border-2 hover:border-pink h-16">
              <a href="" className="h-full w-full">
                <img src="/empty-product.png" alt="" className="h-full w-full" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-green font-thin">{"Inicio > Tienda > Categoria > Producto"}</p>
          <h3 className="text-green font-bold pt-4 text-lg pb-2">Nombre Del Producto</h3>
          <div className="separator border-b-2 border-gray-200 w-14"></div>
          <h3 className="text-green font-bold pt-4 text-lg pb-2">$15,000</h3>
          <p className="text-green">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, enim ac tempus
            congue, sapien ante auctor purus, in maximus ex nulla sed urna.</p>
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
            >
              <option>Seleccione una opcion</option>
              <option value="3">3X2 unidades</option>
              <option value="especial">Combo Especial</option>
              <option value="6">6X4</option>
            </select>
          </div>
          <div className="flex carrito pt-4">
            <div className="anexar-carrito sm:w-96">
              <a href="#"
                className="inline-flex items-center md:px-6 md:py-2 text-sm md:font-medium text-center text-green bg-pink rounded-full hover:bg-green focus:ring-4 focus:outline-none focus:ring-green">
                AÑADIR AL CARRITO
              </a>
            </div>
            <input type="number" id="cantidad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="" required/>
          </div>
          <div className="terminos text-green pt-4">
            Tener Presenta la Politica de cambios y devoluciones y derecho de retracto
          </div>
          <a href="#politica">Consulte aqui</a>
        </div>
      </div>
    </div>
  )
}
