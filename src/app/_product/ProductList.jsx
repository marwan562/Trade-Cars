import ProductItem from "./ProductItem"

function ProductList({productList}) {
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  md:items-center  gap-5">
        {productList.map(item=>  <div key={item.id}><ProductItem  product={item} /></div>
)}
    </div>
  )
}

export default ProductList
