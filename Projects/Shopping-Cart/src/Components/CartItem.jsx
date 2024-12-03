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
        <div>
            <div className="image">
                {item.image}
            </div>

            <div className="">
                <p>{item.title}</p>
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
