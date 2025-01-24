import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex items-center justify-center h-16 fixed top-0 left-0 w-full bg-green-900 border-b border-white shadow-lg'>
            <Link href={"/"}>
                <div className='flex'>
                    <img src="/images/bandeira.png" alt="bandeira" className='h-8' />
                    <h1 className='text-center text-white font-bold text-lg ml-6 mr-6'>PROJETO DE CORRIDA</h1>
                    <img src="/images/bandeira.png" alt="bandeira" className='h-8' />
                </div>
            </Link>
        </div>
    )
}