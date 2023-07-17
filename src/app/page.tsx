import BASE_PATH_FOR_API from "@/components/shared/BasePath";
import Hero from "@/components/view/Hero";
import ProductCarousel from "@/components/view/ProductCarouse";
import ProductTypes from "@/components/view/ProductTypes";

async function fetchAllProductData() {
  let res = await fetch(`${BASE_PATH_FOR_API}/api/products`);
  if(!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json();
}


export default async function Home() {
  let { response }: any = await fetchAllProductData()
  return (
    <div>
      <Hero />
      <ProductTypes />
      <ProductCarousel ProductData={response} />
    </div>
  )
}
