import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex items-center justify-center h-16 fixed top-0 left-0 w-full bg-red-500 border-b border-white shadow-lg'>
            <Link href={"/"}>
                <h1 className=' text-center text-white font-bold text-lg'>PROJETO DE CORRIDA</h1>
            </Link>
        </div>
    )
}