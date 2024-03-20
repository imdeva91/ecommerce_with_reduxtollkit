import {TbDiscount2, TbTruckDelivery} from "react-icons/tb"
import {RiRefund2Fill} from "react-icons/ri"
import {MdSupportAgent} from "react-icons/md"
import FeatureCard from "./FeatureCard";

const data =[
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Free Delivery",
        dese: "Orders from all times",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Return & Refund",
        dese: "Money back guarantee ",
    },
    {
        icon: <TbDiscount2 className="text-4xl" />,
        title: "Member Discount",
        dese: "On Orders Over $99.00",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Support 24/7",
        dese: "Contact Us 24 hours a day",
    },
];


const Features = () => {
  return (
    <div className="grid gap-1 container sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {
            data.map((item)=> (<FeatureCard key={item.title} icon={item.icon} title={item.title} dese={item.dese} />))
        }
    </div>
  )
}

export default Features


