
const NewsLatter = () => {
  return (
    <div className="text-center space-y-4 min-h-[40vh] md:h-[80vh] lg:min-h-[50rem] flex flex-col justify-center items-center text-gray-800">
      <h6 className="text-5xl md:text-7xl lg:text-[7.5rem] leading-[5.9rem] font-bold absolute -z-20 text-gray-100">Newslette r</h6>
      <h6 className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
      <p className="max-w-[16rem] text-lg font-medium">Get the latest information and promo offers directly</p>
      <div className="flex gap-4 md:flex-row flex-col flex-wrap items-center justify-center">
        <input type="text" className="border border-gray-600 py-1 px-2 md:px-4 flex flex-grow  md:w-80" placeholder="Input email address" />
        <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2">Get Started</button>
      </div>
    </div>
  )
}

export default NewsLatter