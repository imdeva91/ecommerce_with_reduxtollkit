import { FaSearch } from "react-icons/fa";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const Navbar = ({setShowCart}) => {
    const cartCounter = useSelector((state)=>state.cart.length)
    if(cartCounter == 0){
      setShowCart(false)
    }
  return (
    <div className="p-4 bg-white top-0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"}> 
          <h1 className="text-4xl font-bold">Logo</h1>

          </Link>

          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-6 py-2 w-full"
              type="text"
              placeholder="Search Foe Products..."
            />
            <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
              <FaSearch />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 hidden">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center ">
                <AiOutlineUser />
              </div>

              <div>
                <p className="text-gray-500">Hello, Sign in</p>
                <p className="font-medium"> Your Account</p>
              </div>
            </div>

            <div className="text-gray-500 text-[32px] relative cursor-pointer" >
            
              <AiOutlineShoppingCart onClick={()=>setShowCart(true)} />
              
              

                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center" >
                    {cartCounter}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
