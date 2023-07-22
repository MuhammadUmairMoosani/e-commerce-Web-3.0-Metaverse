
// import { FC } from 'react';

// const Catalog: FC<{params: {slug: string}}> = ({params}) => {
//   return (
//     <div>{params.slug}</div>
//   )
// }

// export default Catalog


import { responseType } from '@/components/utils/ProductsDataArrayAndType';
import ProductDetail from '@/components/view/ProductDetail';
import React, { FC } from 'react'

async function fetchAllProductData(slug: string) {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == "products"][slug.current == "${slug}"]`);
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json();
}
 
const Catalog = async ({ params }: {params: { slug: string}}) => {
  let data: responseType = await fetchAllProductData(params.slug)
  return (
    <ProductDetail item={data.result[0]} />
  )
}

export default Catalog