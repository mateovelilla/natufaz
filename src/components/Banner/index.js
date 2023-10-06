import Image from "next/image"
export function Banner() {
    return (
        <div className="isolate px-6 pt-14 lg:px-8 sm:px-20 md:w-full">
            <div className="flex items-center sm:w-38 w-full h-full md:mx-0 py-28 lg:pt-56 sm:py-12">
                <div className="slogan flex sm:w-6/12 w-full sm:items-center">
                    <div className="title">
                        <h3 className="text-pink font-source font-bold text-pink text-4xl">
                            La mejor tienda naturista a
                            <br />
                            los mejores precios
                        </h3>
                        <p className="mt-4 text-pink tex-bold text-source">
                            Proveemos los mejores productos naturistas a los
                            mejores precios.
                        </p>
                    </div>
                    <div className="subtitle"></div>
                </div>
                <div className="banner lg:flex w-6/12 md:w-full hidden h-full">
                    <Image className="lg:w-2/6 relative z-10 left-16 xl:left-32" src="/employee-1.png" width={500}
                        height={500} />
                    <Image className="lg:w-2/6 relative lg:right-4 xl:right-18 right-12 top-4 z-0" src="/employee-2.png" width={500}
                        height={500} />
                    <Image className="lg:w-2/6 relative z-20 lg:right-48 xl:right-72" src="/employee-3.png" width={500}
                        height={500} />

                </div>
            </div>
        </div>
    )
}