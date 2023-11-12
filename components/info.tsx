"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Painting } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Painting
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 
    <div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">artist:</h3>
          <div>
            {data?.artist}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">year:</h3>
          <div>
            {data?.year}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">medium:</h3>
          <div>
            {data?.medium}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">frame color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        {
          data.isSold ?
          <span className="inline-flex items-center rounded-md bg-secondary text-md font-semibold">sold out</span>
          :
          <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          add to cart
          <ShoppingCart size={20} />
        </Button>
        }
       
      </div>
    </div>
  );
}
 
export default Info;
