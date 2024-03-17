import Image from "next/image";

function ProductBanner({ product }) {
  return (
    <div className="">
      {product?.attributes?.banner?.data?.attributes?.name ? (
        <Image
          src={`/${product?.attributes?.banner?.data?.attributes?.name}`}
          alt="Product-details Banner"
          width={450}
          height={450}
          className="rounded-lg border-2 shadow-lg "
          // -> Skeleton Banner
        />
      ) : (
        <div className=" bg-slate-200 w-[350px] rounded-xl h-[224px] animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
