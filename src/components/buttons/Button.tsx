import Link from "next/link"

interface Props {
    title: string;
    href?: string;
    className?: string;
}

export const Button = ({ title, href = '/catalog/products', className }: Props) => {
    return (
        <Link href={href} className={`${className} text-center px-2 py-1 rounded-lg transition-colors drop-shadow-md`}>
            {title}
        </Link>
    )
}