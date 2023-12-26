import { ProductsData } from '@/utils/data'
import { FilterCategoryTag, ProductCard } from '@/components'

export default function ProductsPage() {
    return (
        <main className='p-4 flex flex-col gap-4'>
            <section className='flex gap-2'>
                <FilterCategoryTag title='Vino' />
                <FilterCategoryTag title='Ron' />
                <FilterCategoryTag title='Whisky' />
            </section>
            {
                ProductsData.map(category => (
                    <section key={category.category} className='flex flex-col gap-2'>
                        <h2 className='font-bold text-lg'>{category.category}</h2>
                        {
                            category.products.map(product => (
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
                ))
            }

        </main>
    )
}
