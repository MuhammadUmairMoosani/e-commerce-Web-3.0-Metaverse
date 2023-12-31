import { oneProductType } from '@/components/utils/ProductsDataArrayAndType';
import { client } from "../../../../sanity/lib/client"
import { Card } from '@/components/view/Card';

async function getAllProductsForSearch() {
    let response = await client.fetch(`*[_type == "products"]`);
    return response;
}

const Search = async ({ params }: { params: { query: string } }) => {
    let data = await getAllProductsForSearch()
    let dataToMap = await data.filter((item: oneProductType) => item.productName.toLowerCase().includes(params.query.toLowerCase()))
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4'>
            {dataToMap && dataToMap.map((item: oneProductType, index: number) => <Card key={index} singleProductData={item} />)}
        </div>
    )
}

export default Search