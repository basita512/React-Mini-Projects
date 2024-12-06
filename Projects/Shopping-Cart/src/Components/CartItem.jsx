import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success('Item removed from cart')
    }

    return (
        <div className="p-4 border-b-2 last:border-none border-slate-700">
            <div className='flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row'>
                <div className="image md:w-[30%] w-full flex justify-center items-center">
                    <img src={item.image} alt={item.title} className='w-[300px] md:w-[50%] lg:w-full'/>
                </div>

                <div className="md:w-[70%] w-full flex flex-col gap-5">
                    <p className='text-xl font-semibold'>{item.title}</p>
                    <p>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>

                    <div className="flex w-full justify-between">
                        <p className='text-green-600 font-semibold' >${item.price}</p>
                        <div onClick={removeFromCart}  className="p-2 text-xl rounded-full mr-2 bg-red-300 text-red-900 w-[35px] hover:bg-red-700 hover:text-white duration-300">
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CartItem
