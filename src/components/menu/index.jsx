import Link from 'next/link'

export default function Menu() {
    return  (
        <div className="h-[100vh] w-[15%] bg-red-500 flex-shrink-0">
            <h2 className="text-white text-center font-bold text-lg border-b p-4">MENU</h2>
            <nav>
                <Link href={"/mybets"}>
                    <div className='links-menu'>Minhas Apostas</div>
                </Link>
                <Link href={"/results"}>
                    <div className='links-menu'>Resultados</div>
                </Link>
                <Link href={"/pilots"}>
                    <div className='links-menu'>Pilotos</div>
                </Link>
            </nav>
        </div>
    )
}