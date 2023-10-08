import Image from "next/image"
export function Top20 ({products}) {
    return <div id="top-20-productos" className="flex items-center p-12 flex-col">
        <h3 className="titulo pb-4 font-bold">
            Top 20 Productos
        </h3>
        <div className="productos grid gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-y-12 xl:col-span-2 pb-12">
            {
                products.map(
                    (product,index) =><div className="max-w-sm p-0 bg-white border border-black rounded-lg shadow hover:border-pink" key={index}>
                        <a href={`/${product.id}`}>
                            <div className="header-card h-36 bg-cover rounded-lg flex justify-center relative">
                                <Image src={product.images[0]} width={400} height={400} className="object-contain z-10" alt="product"/>
                                {
                                    product.isPromotion?
                                    <span className="bg-pink px-4 text-whiteMof rounded-l-lg z-20 absolute left-0">Promoción</span>: ""
                                }
                            </div>
                            <div className="content-card pl-2 pr-20 pb-12">
                                <h3 className="w-full tex-bold text-lg">{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
        <div className="ver-mas">
            <a href="#"
                className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-green bg-pink rounded-full hover:bg-green focus:ring-4 focus:outline-none focus:ring-green">
                ver mas
            </a>
        </div>
  </div>
}