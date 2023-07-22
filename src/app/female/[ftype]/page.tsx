import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType';
import { Card } from '@/components/view/Card';
import React, { FC } from 'react'

async function fetchAllProductData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == "products"][productTypes[1] == "Female"]`);
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json();
}

const Female = async ({ params }: { params: { ftype: string }}) => {
  let res: responseType = await fetchAllProductData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4'>
      {res.result.map((item: oneProductType,index:number) => (
        <Card key={index} singleProductData={item} />
      ))}
    </div>
  )
}

export default Female