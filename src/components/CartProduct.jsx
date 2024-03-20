import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { removeFromCart } from '../redux/features/cartSlice'

const CartProduct = ({image,title,price,quantity,id}) => {

    const removeItem =(id)=>{
        dispatch(removeFromCart(id))
    }
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-centergap-4">
            <img className="h-[80px] ml-2" src={image} alt={title} />
            <div className="space-y-2">
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600 text-[14px]">
                    {quantity} x ${price}.00
                </p>
            </div>
        </div>
        <RxCross1 className="cursor-pointer" onClick={()=>removeItem(id)} />
    </div>
  )
}

export default CartProduct;
