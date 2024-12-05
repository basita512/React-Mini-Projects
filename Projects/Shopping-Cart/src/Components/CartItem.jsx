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
        <div className='flex justify-between w-full gap-12'>
            <div className="image md:w-[300px] w-full flex justify-center items-center">
                <img src={item.image} alt={item.title} className='w-[300px] md:w-[50%] lg:w-full'/>
            </div>

            <div className="">
                <p className='text'>{item.title}</p>
                <p>{item.description}</p>

                <div className="">
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}  className=""><MdDelete /></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
