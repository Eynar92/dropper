'use client'
import { IoCloseOutline } from 'react-icons/io5'
import BeefeaterLondon from '@/assets/bottles-images/BeefeaterLondon.webp'
import Image from 'next/image'
import { Button } from '..'
import { useModalStore } from '@/stores/catalog-product/modal.store'

export const ProductModal = () => {

  const [isModalOpen, setIsModalOpen] = useModalStore((state) => [state.isModalOpen, state.setIsModalOpen])

  if (!isModalOpen) return null;

  const handleCloseModal = (e: any) => {
    if (e.target.id === 'wrapperModal') {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div
      id='wrapperModal'
      onClick={handleCloseModal}
      className="fixed inset-0 flex items-center justify-center bg-principal bg-opacity-25 backdrop-blur-sm h-screen z-10"
    >
      <div className="flex flex-col items-center justify-between w-[90%] max-w-96 h-[90%] max-h-[576px] bg-slate-200 rounded-lg">
        <div className='flex gap-8 items-center w-full p-4 text-black bg-white shadow-xl rounded-t-lg'>
          <div
            onClick={() => setIsModalOpen(false)}
            className='flex items-center justify-center w-6 h-6'
          >
            <IoCloseOutline className='w-full h-auto text-black' />
          </div>
          <span className='flex-1 font-semibold'>Nombre de la botella</span>
        </div>
        <div className='flex flex-col gap-4 p-4 w-full bg-white text-black shadow-xl'>
          <Image
            src={BeefeaterLondon}
            alt='Trago'
            className='w-auto h-36 self-center'
          />
          <div className='flex gap-4 font-bold'>
            <h2>Título de la botella y descripción</h2>
            <span>Bs.18</span>
          </div>
        </div>
        <div className='flex items-center justify-between w-[90%] p-4 bg-white text-black font-semibold rounded-lg shadow-xl'>
          <span>Unidades</span>
          <div className='flex gap-1 items-center'>
            <Button title='+' className='text-white' />
            <input type="text" className='w-8 h-auto border border-blue-950 rounded-lg' />
            <Button title='-' className='text-white' />
          </div>
        </div>
        <div className='flex items-center p-5 w-full bg-white rounded-b-lg'>
          <Button title='Agregar a mi pedido' className='w-full' />
        </div>
      </div>
    </div>
  )
}