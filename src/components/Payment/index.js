import Image from "next/image"
export function Payment () {
    return <div className="bg-pink">
        <div className="flex p-12 flex-col">
            <div className="caracteristicas grid gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-y-12 xl:col-span-2 pb-12">
                <div className="flex flex-col items-center">
                    <span className="bg-green flex h-14 w-14 rounded-lg flex items-center justify-center">
                        <i className="fi fi-rr-check text-pink"></i>
                    </span>
                    <h3 className="text-green font-medium">Calidad Certificada</h3>
                    <p className="text-green text-sm text-center pt-2">
                        Somos compradores directos de la industria naturista lo cual
                        certifica validez y confianza en cada uno de nuestros productos
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-green flex h-14 w-14 rounded-lg flex items-center justify-center">
                        <i className="fi fi-rr-chart-histogram text-pink"></i>
                    </span>
                    <h3 className="text-green font-medium">Mejores precios del mercado</h3>
                    <p className="text-green text-sm text-center pt-2">
                        Ya que trabajamos con los proveedores directamente manejamos
                        los mejores precios de la industria
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-green flex h-14 w-14 rounded-lg flex items-center justify-center">
                        <i className="fi fi-rr-rocket-lunch text-pink"></i>
                    </span>
                    <h3 className="text-green font-medium">Entrega inmediata</h3>
                    <p className="text-green text-sm text-center pt-2">
                        Cubrimmos cada rincon del pais para hacerte llegar los mejores productos
                        de nuestro stand
                    </p>
                </div>
            </div>
            <div className="pagos grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2 pb-6">
                <div className="experiencia flex flex-col items-center justify-center">
                    <h3 className="text-green font-semibold text-lg pb-6">Vive con nosotros la experiencia de tener nuestros productos a la mano</h3>
                    <p className="text-green text-xs">
                        Nos encargamos de todo el proceso de entrega y confirmacion de los productos por ti.
                        Recibimos todo tipo de fuentes bancarias para el pago de los productos
                    </p>
                </div>
                <div className="tarjeta-credito flex items-center justify-start">
                    <Image src="/card.png" alt="" width={500} height={500}/>
                </div>
            </div>
        </div>
  </div>
}