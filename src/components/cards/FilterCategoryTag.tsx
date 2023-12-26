import Link from 'next/link';
import { IoWineOutline } from 'react-icons/io5'

interface Props {
    title: string;
    sectionId: string;
}

export const FilterCategoryTag = ({ title, sectionId }: Props) => {
    return (
        <Link
            href={`#${sectionId}`}
            className='h-auto w-auto flex flex-col justify-between items-center gap-2'
        >
            <div className='h-12 w-12 p-2 flex items-center justify-center rounded-full bg-blue-900'>
                <IoWineOutline className="h-full w-full" />
            </div>
            <span className='w-full text-xs font-medium text-center'>{title}</span>
        </Link>
    )
}
