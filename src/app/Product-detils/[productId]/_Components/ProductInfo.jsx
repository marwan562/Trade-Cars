'use client'  
import {useUser} from '@clerk/nextjs'
import { CiShoppingCart } from "react-icons/ci";
import { LuBadgeCheck , LuAlertOctagon} from "react-icons/lu";
import { IoColorWandOutline } from "react-icons/io5";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useRouter } from 'next/navigation';
import CartApis from '../../../_Data/CartApis';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useShoppingCart } from '../../../_Context/ContextShoppingCart';




function ProductInfo({product}) {
      const {user} =  useUser()
      const {cart,setCart} = useShoppingCart()
      const router = useRouter()
      
      const handleAddToCart = () => {
        if(!user){  
          // router to sign-in

          router.push('/sign-in')
        }else{
         /* logic to add to cart */
         
         const data = {
         data:{
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          product: [product.id]
             }
          }
         CartApis.addToCart(data)
         .then((res)=>{
          setCart((oldCart)=>[
            ...oldCart,
            {
              id:res.data.data.id,
              product,
             }    
            ])
         })
         .catch((err)=>{
            console.log(err)
         });
        }
      }
  return (
    <>
        {product?.id
          ?
          <div>
          <div className=" flex justify-between items-center">
          <h2 className="text-[24px] mt-1 font-bold"> Model :<span className=" text-primary text-[27px]"> {product?.attributes?.title}</span></h2>
          <h2 title="Car Color..." className="flex gap-1 items-center bg-primary p-2 rounded-t-lg  cursor-pointer text-white"><IoColorWandOutline width={5} height={5}/>{product?.attributes?.category}</h2>
          </div>
          <hr/>
          <h2 className='mt-5 text-[18px]' >Description:</h2>
          <h2 className='  text-[12px] '>{product?.attributes?.description[0]?.children[0]?.text}</h2>
    
          <h2 className='text-[11px] text-gray-500 flex items-center   gap-2 mt-2' >
            {product?.attributes?.instanDelivery ? 
            <LuBadgeCheck title='You Can Buy It' className =" w-5 h-5 text-green-500"/>
            : <LuAlertOctagon title='You Can`t Buy It' className=" w-5 h-5 text-red-500"/>
            }
            Eligon For Instant Delivery
          </h2>
    
        <div>
          <h2 className=" text-primary text-[32px] mt-3">$ {product?.attributes?.price}</h2>
    
         { product?.attributes?.instanDelivery  ? 

          <button onClick={()=> handleAddToCart()} className=" flex  items-center gap-2 p-3 bg-primary rounded-lg text-white hover:bg-gray-600">
            <CiShoppingCart size={30}/> Add to cart
          </button>
          :
          <button className=' flex  items-center gap-2 p-3 bg-gray-400 rounded-lg text-white cursor-not-allowed'>
              <MdOutlineRemoveShoppingCart size={30}/> Not available
          </button>
          }
        
        </div>
        </div>
        :
        //Sekelton Product Info
         <SkeletonProductInfo/>
        }
      </>
  )
}

export default ProductInfo;
