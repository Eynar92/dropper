import Link from "next/link"

interface Props {
    title: string;
    href?: string;
    className?: string;
}

export const Button = ({ title, href = '/catalog/products', className }: Props) => {
    return (
        <Link href={href} className={`${className} text-center px-2 py-1 bg-blue-950 rounded-lg font-light hover:bg-blue-800 transition-colors`}>
            {title}
        </Link>
    )
}