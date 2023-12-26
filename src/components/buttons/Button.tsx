import Link from "next/link"

interface Props {
    title: string;
    href?: string;
}

export const Button = ({ title, href = '/catalog/products' }: Props) => {
    return (
        <Link href={href} className="px-2 py-1 bg-blue-950 rounded-lg font-light hover:bg-blue-800 transition-colors">
            {title}
        </Link>
    )
}