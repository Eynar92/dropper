import { IoWineOutline } from 'react-icons/io5'

interface Props {
    title: string;
}

export const FilterCategoryTag = ({ title }: Props) => {
    return (
        <div className='h-16 w-auto flex flex-col justify-between items-center gap-2'>
            <div className='h-12 w-12 p-2 flex items-center justify-center rounded-full bg-blue-900'>
                <IoWineOutline className="h-full w-full" />
            </div>
            <span className='w-full text-xs font-medium text-center leading-none'>{title}</span>
        </div>
    )
}
