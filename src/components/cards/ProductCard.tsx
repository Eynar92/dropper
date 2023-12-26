import Image from "next/image"
import { IoStarOutline } from 'react-icons/io5'
import BeefeaterLondon from '@/assets/bottles-images/BeefeaterLondon.webp'
import { Button } from "..";

interface Props {
    promoTag: boolean;
    title: string;
    price: string;
    rating: number;
    reviews: number;
}

// export const ProductCard = ({ promoTag, title, price, rating, reviews }: Props) => {
//     return (
//         <article className="flex flex-col gap-4 w-40 h-80 p-2 border border-slate-700 rounded-lg">
//             <div className="w-full h-auto flex items-center justify-start flex-1">
//                 <div className={`${promoTag ? '' : 'hidden'} flex items-center gap-2 max-w-[80%] w-auto h-auto bg-red-700 px-2 py-1 rounded-e-lg`}>
//                     <span className="text-xs leading-none">Promo Tag</span>
//                     <div className="w-2 h-2 rounded-full border border-white bg-white"></div>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-4">
//                 <div className="w-auto h-36">
//                     <Image
//                         src={BeefeaterLondon}
//                         alt="Beefeater London"
//                         width={100}
//                         height={100}
//                         className="w-full h-full object-contain"
//                     />
//                 </div>
//                 <div className="flex justify-start items-center gap-1 text-xs">
//                     <IoStarOutline />
//                     <span>{rating} ({reviews})</span>
//                 </div>
//                 <div className="flex flex-col gap-2 text-sm">
//                     <h3 className="font-semibold truncate">{title}</h3>
//                     <span>{price}</span>
//                 </div>
//             </div>
//         </article>
//     )
// }
export const ProductCard = ({ promoTag, title, price, rating, reviews }: Props) => {
    return (
        <article className="flex items-center gap-3 w-full h-auto p-3 border border-slate-700 rounded-lg">
            <Image
                src={BeefeaterLondon}
                alt="Beefeater London"
                width={100}
                height={100}
                className="w-auto h-44 object-contain"
            />
            <div className="flex flex-col gap-2 w-full h-full">
                <div className="flex gap-2 w-full h-full">
                    <div className="flex flex-col justify-between gap-2 w-full h-full">
                        <h3 className="font-bold">{title}</h3>
                        <span>{price}</span>
                        <span className="flex items-center gap-1 text-xs"><IoStarOutline />{rating} ({reviews})</span>
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center w-6">
                        <Button title="+" />
                        <input type="text" className="w-5 rounded-sm" />
                        <Button title="-" />
                    </div>
                </div>
                <Button title="Agregar Producto" />
            </div>
        </article>
    )
}

