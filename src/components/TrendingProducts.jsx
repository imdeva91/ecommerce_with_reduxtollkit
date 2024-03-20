import toast from "react-hot-toast"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import ItemCard from "./ItemCard";


const TrendingProducts =()=>{

    const [product,setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProduct(data)
        }
    fetchProduct()

    },[])

    const addProductToCart =(item)=>{
        dispatch(addToCart(item));
        toast.success("Added To Cart")
    }
    
    return(
    
         <div className="container mt-32">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Trending Products</h2>
            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                <div className="text-black">New</div>
                <div>Featured</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 ">
            {
              product.map((item)=>{
                return(
                    <ItemCard title={item.title}  image={item.image} price={item.price} item={item} rating={item.rating.rate} category={item.category} key={item.id} addProductToCart={addProductToCart}/>
                )
              })  
            }
        </div>
    </div>

    

       
    )
}

export default TrendingProducts;