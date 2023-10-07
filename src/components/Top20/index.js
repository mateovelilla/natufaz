export function Top20 () {
    const products = [
        {
            index: 1,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 2,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 3,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 4,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 5,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 6,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 7,
            isPromotion:false,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 8,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        },
        {
            index: 9,
            isPromotion:true,
            name: "Acido antinflamatorio",
            price: "9.99"
        }
    ]
    return <div className="top-20-productos flex items-center p-12 flex-col">
        <h3 className="titulo pb-4 font-bold">
            Top 20 Productos
        </h3>
        <div className="productos grid gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-y-12 xl:col-span-2 pb-12">
            {
                products.map(
                    product =><div className="max-w-sm p-0 bg-white border border-black rounded-lg shadow hover:border-pink" key={product.index}>
                        <a href="/detail">
                            <div className="header-card bg-[url('/imgs/empty-product.png')] h-36 bg-cover rounded-lg">
                                {
                                product.isPromotion?
                                    <span className="bg-pink px-4 text-whiteMof rounded-l-lg">Promoción</span>: ""}
                            </div>
                            <div className="content-card pl-2 pr-20 pb-12">
                                <h3 className="w-full tex-bold text-lg">{product.name}</h3>
                                <p>{product.price}</p>
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