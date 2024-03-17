
import {Roboto} from 'next/font/google'
import Footer from './_Components/Footer'
import Header from './_Header/Header'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ShoppingCartProvider } from './_Context/ContextShoppingCart'

const inter =Roboto({subsets:['latin'] , weight: '700'})


export default function RootLayout({ children }) {
  return (
   <ClerkProvider>
     <ShoppingCartProvider>
      <html lang="en">
          <body className={inter.className} >
          <Header/>
          {children}
          <Footer/>
          </body>
        </html>
     </ShoppingCartProvider>
   </ClerkProvider>
   
  )
}
