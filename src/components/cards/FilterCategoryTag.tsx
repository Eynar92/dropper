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
            className='h-auto w-auto flex flex-col justify-between items-center bg-secondary-600 px-2 py-1 rounded-lg text-text drop-shadow-md'
        >
            <span className='w-full text-xs text-center'>{title}</span>
        </Link>
    )
}
