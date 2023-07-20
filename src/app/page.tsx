import { responseType } from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/view/Hero";
import Jewellery from "@/components/view/Jewellery";
import NewsLatter from "@/components/view/NewsLatter";
import ProductCarousel from "@/components/view/ProductCarouse";
import ProductTypes from "@/components/view/ProductTypes";

async function fetchAllProductData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);
  if(!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json();
}


export default async function Home() {
  let { result }: responseType = await fetchAllProductData()
  return (
    <div>
      <Hero />s
      <ProductTypes />
      <ProductCarousel ProductData={result} />
      <Jewellery />
      <NewsLatter />
    </div>
  )
}
