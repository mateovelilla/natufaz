export function Footer() {
    return <div className="footer bg-gray-200 flex h-32 justify-center items-center w-full">
        <div className="flex w-full justify-evenly">
            <div className="item flex justify-center items-center w-16 border-r-2 border-gray-500 h-4">
                <a href="#" className="font-sm text-sm/[12px]">Inicio</a>
            </div>
            <div className="item flex justify-center items-center w-32 border-r-2 border-gray-500 h-4">
                <a href="#" className="font-sm text-sm/[12px]">Top 20 productos</a>
            </div>
            <div className="item flex justify-center items-center w-24 border-r-2 border-gray-500 h-4">
                <a href="#" className="font-sm text-sm/[12px]">Promociones</a>
            </div>
            <div className="item flex justify-center items-center w-32">
                <a href="/inicio-sesion.html" className="font-sm text-sm/[12px]">Inicio de sesion</a>
            </div>
        </div>
    </div>
}