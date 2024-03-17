'use client'


import Image from "next/image"
import Link from "next/link"

function ProductItem({product}) {
    const Url = `/${product.attributes.banner.data.attributes.name }`
    const Name = `${product.attributes.title}`
    const Price = `$${product.attributes.price}`
  

  return (
  
    <Link href={`/Product-detils/${product.id}`}>

    <div className=" block rounded-lg p-4  hover:border m-0    border-indigo-700  hover:shadow-lg hover:cursor-pointer shadow-indigo-100">
    

    <Image  src={Url} alt={Name}  className="rounded-t-lg object-cover" width={500} height={244}/>

  <div className="mt-2  ">
    <dl className=" line-clamp-1 ">
      <div>
        <dt className="sr-only  ">{Name}</dt>

        <dd className="font-medium">{product.attributes.title}</dd>
      </div>

      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500"><span className="text-black font-bold">Price:</span> {Price.toLocaleString()}</dd>
      </div>

    </dl>
    
    <div className="mt-6 md:flex-initial  flex items-center gap-4 justify-around text-xs">
      <div className=" flex  items-center sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="  mt-1.5 sm:mt-0">
          <p className="">Rest:</p>

          <p className="font-medium text-gray-500" >2 Restes</p>
        </div>
      </div>

      <div className="  flex  sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className=" font-bold">Color:</p>

          <p className="font-medium text-gray-500">{product?.attributes?.category }</p>
        </div>
      </div>

    
    </div>

  </div>
</div>
    </Link>
    
  )
}

export default ProductItem
