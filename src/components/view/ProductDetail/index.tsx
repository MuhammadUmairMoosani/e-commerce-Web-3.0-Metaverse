"use client"

import React, { useState } from 'react';
import { imagesType, oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import imageUrlBuilder from '@sanity/image-url'
import { FC } from 'react'
import { client } from '../../../../sanity/lib/client';
import Image from 'next/image';
import { BsCart2 } from 'react-icons/bs';

const builder: any = imageUrlBuilder(client);

function urlFor(srouce: any) {
  return builder.image(srouce)
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [imageForReviewOfSelected, setImageForReviewOfSelected] = useState<string>(item.image[0]._key)
  const [quantity, setQuantity] = useState(1);

  function incrementTheQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementTheQuantity() {
    if(quantity !== 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className='flex gap-x-4 md:gap-x-8'>
      {/* left */}
      <div>
        <div className="space-y-4">
          {item.image.map((subItem: imagesType, index: number) => (
            <div key={index} className='w-16 md:w-24' onClick={() => setImageForReviewOfSelected(subItem._key)}>
              <Image width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url()} />
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="w-[33rem] flex flex-wrap-0">
        {item.image.map((subItem: imagesType, index: number) => {
          if (subItem._key === imageForReviewOfSelected) {
            return (
              <Image key={index} width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url()} />
            )
          }
        })}

      </div>
      {/* right */}
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-3xl text-gray-700">{item.productName}</h1>
          <p className="text-gray-500 text-xl font-medium">{item.productTypes[1]}</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-700">Select Size</p>
          <div className='flex gap-2 py-2 text-gray-500'>
            {
              item.size.map((subItem: string, index: string) => (
                <div key={index} className="hover:shadow-lg font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{subItem}</div>
              ))
            }
          </div>
        </div>
        <div className="flex space-x-7"> 
            <p className="font-semibold text-xl text-gray-800">Quantity:</p>
            <div className="flex gap-2 items-center">
            <div
              onClick={decrementTheQuantity}
            className='select-none flex justify-center items-center w-9 h-9 rounded-full border border-gray-800 cursor-pointer'>-</div>
              <p>{quantity}</p>
            <div
            onClick={incrementTheQuantity}
              className='select-none flex justify-center items-center w-9 h-9 rounded-full border border-gray-800 cursor-pointer'>+</div>
            </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 flex items-center">
            <BsCart2 />
            &nbsp;
            &nbsp;
            Add to Cart
          </button>
          <p className="text-2xl font-semibold">${item.price}.00</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail