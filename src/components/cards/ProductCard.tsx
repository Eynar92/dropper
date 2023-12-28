'use client'

import Image from "next/image"
import { IoStarOutline, IoAddCircleOutline } from 'react-icons/io5'
import BeefeaterLondon from '@/assets/bottles-images/BeefeaterLondon.webp'
import { Button } from "..";
import Link from "next/link";
import { useModalStore } from "@/stores/catalog-product/modal.store";

interface Props {
    promoTag: boolean;
    title: string;
    price: string;
    rating: number;
    reviews: number;
}

export const ProductCard = ({ promoTag, title, price, rating, reviews }: Props) => {

    const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)

    return (
        <div
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col gap-4 w-full max-w-48 h-auto p-2 bg-dark-900 rounded-lg text-text drop-shadow-md"
        >
            <div className="w-full h-auto flex items-center justify-start flex-1">
                <div className={`${promoTag ? '' : 'hidden'} flex items-center gap-2 max-w-[80%] w-auto h-auto bg-red-700 px-2 py-1 rounded-e-lg`}>
                    <span className="text-xs leading-none">Promo Tag</span>
                    <div className="w-2 h-2 rounded-full border border-white bg-white"></div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-auto h-36">
                    <Image
                        src={BeefeaterLondon}
                        alt="Beefeater London"
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex justify-start items-center gap-1 text-xs">
                    <IoStarOutline />
                    <span>{rating} ({reviews})</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold truncate text-sm">{title}</h3>
                    <div className="flex justify-between">
                        <span className="font-bold">{price}</span>
                        <IoAddCircleOutline className="h-full w-auto text-single-500 hover:text-single-400 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    )
}
// export const ProductCard = ({ promoTag, title, price, rating, reviews }: Props) => {
//     return (
//         <article className="flex items-center gap-3 w-full h-auto p-3 border border-slate-700 rounded-lg">
//             <Image
//                 src={BeefeaterLondon}
//                 alt="Beefeater London"
//                 width={100}
//                 height={100}
//                 className="w-auto h-44 object-contain"
//             />
//             <div className="flex flex-col gap-2 w-full h-full">
//                 <div className="flex gap-2 w-full h-full">
//                     <div className="flex flex-col justify-between gap-2 w-full h-full">
//                         <h3 className="font-bold">{title}</h3>
//                         <span>{price}</span>
//                         <span className="flex items-center gap-1 text-xs"><IoStarOutline />{rating} ({reviews})</span>
//                         <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//                     </div>
//                     <div className="flex flex-col gap-4 items-center w-9">
//                         <Button title="+" className="w-full" />
//                         <input type="text" className="w-full rounded-lg" />
//                         <Button title="-" className="w-full" />
//                     </div>
//                 </div>
//                 <Button title="Agregar Producto" />
//             </div>
//         </article>
//     )
// }

