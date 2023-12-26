import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5';
import { Button } from '..';

export const CatalogNavbar = () => {
    return (
        <header className="flex flex-col gap-3 p-4 w-full h-24 border-b rounded-b-lg border-slate-700 bg-slate-950 sticky top-0">
            <div className='flex justify-between items-center'>
                <span className='font-bold leading-none'>Dropper</span>
                <div className='flex items-center justify-center w-5 h-5 rounded-full border border-white'>
                    <IoPersonOutline className='w-5 h-5' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <IoSearchOutline className='w-5 h-5' />
                <Button title='Crear Tienda' />
            </div>
        </header>
    )
}
