import { ProductsData, CategoryData } from '@/utils/data'
import { FilterCategoryTag, ProductCard } from '@/components'

export default function ProductsPage() {
    return (
        <div className='p-4 flex flex-col gap-4'>
            <section className='flex gap-2 w-full h-auto py-1 sticky top-0 bg-black bg-opacity-85'>
                {
                    CategoryData.map(category => (
                        <FilterCategoryTag key={category.id} title={category.name} sectionId={category.name} />
                    ))
                }
            </section>
            {
                ProductsData.map(category => (
                    <section id={`${category.category}`} key={category.category} className='flex flex-col gap-2'>
                        <h2 className='font-bold text-lg'>{category.category}</h2>
                        <div className='grid grid-cols-2 gap-2'>
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
                        </div>
                    </section>
                ))
            }
        </div>
    )
}
