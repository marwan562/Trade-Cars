
import Image from "next/image"

import Link from 'next/link'
import { useShoppingCart } from '../../_Context/ContextShoppingCart'
function Cart() {
	const { cart ,setCart , setOpenCart , openCart } = useShoppingCart()
	return (
		<div className='h-[300px] w-[250px]
    bg-gray-100 z-10 rounded-md border shadow-sm
    absolute mx-10 right-10 top-12 p-5 overflow-auto'>
			<div className="mt-4 space-y-6">
				<ul className="space-y-4">
					{!cart.product? (cart?.map((item) => (
					
						<li key={item?.id} className="flex items-center gap-4">
							<Image
								src={`/${item?.product?.attributes?.banner?.data?.attributes?.name}`}
								alt="Image-car"
								width={100}
								height={100}
								
							/>
								{console.log(item)}
							<div>
								<h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.attributes?.title}</h3>

								<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
									<div>
										<dt className="inline">Category:</dt>
										<dd className="inline">
											</dd>
									</div>

									<div>
										<dt className="inline">Price:</dt>
										<dd className="inline">{item?.product?.attributes?.price}</dd>
									</div>
								</dl>
							</div>
						</li>
					)))
					: 
					(<div className="  text-sm text-gray-500  items-center text-center">
						<div>You don`t have any Order...!</div>
					</div>)
					}



				</ul>
			</div>
			<div className="mt-5 space-y-4 text-center">


				<Link
					href="/cart"
					className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
				>
					View my cart ({cart?.length})
				</Link>

				<button
					onClick={()=>setOpenCart(!openCart)}
					
					className="inline-block cursor-pointer text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
				>
					Continue shopping
				</button>
			</div>
		</div>
	)
}

export default Cart