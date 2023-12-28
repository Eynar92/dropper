import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5';
import { Button } from '..';

export const CatalogNavbar = () => {
    return (
        <header className="flex flex-col justify-between p-4 w-full h-24 border-b rounded-b-lg border-white text-text">
            <div className='flex justify-between items-center'>
                <span className='font-bold text-lg leading-none text-single-500'>Dropper</span>
                <div className='flex items-center justify-center w-5 h-5 rounded-full border border-white'>
                    <IoPersonOutline className='w-5 h-5' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <IoSearchOutline className='w-5 h-5' />
                <Button title='Crear Tienda' className='bg-single-500 hover:bg-single-400 text-principal font-semibold' />
            </div>
        </header>
    )
}
