import { ProductsData } from '@/utils/data'
import { ProductCard } from '@/components'

export default function ProductsPage() {
    return (
        <main className='p-4 flex flex-col gap-4'>
            <h2 className='font-bold'>Categoría de Trago</h2>
            <section className='grid grid-cols-2 gap-2'>
                {
                    ProductsData.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            promoTag={product.promoTag}
                            rating={product.rating}
                            reviews={product.reviews}
                        />
                    ))
                }
            </section>

        </main>
    )
}
