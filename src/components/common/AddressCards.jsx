import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock } from "react-icons/hi"

const storeLocations = [
    {
        title: "address",
        icon: <HiOutlineLocationMarker className="h-10 w-10 text-rabbit" />,
        item1: "62 The Broadway, West Ealing W13",
        item2: "0SU London, United Kingdom",

    },
    {
        title: "call us today",
        icon: <HiOutlineLocationMarker className="h-10 w-10 text-rabbit" />,
        item1: "+44-7815-966395",
        item2: "+44-2086-219361",


    },
    {
        title: "opening Hours",
        icon: <HiOutlineLocationMarker className="h-10 w-10 text-rabbit" />,
        item1: "Open Daily",
        item2: "08:30 AM - 07:30 PM",

    },
]


const AddressCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white ">
            {storeLocations.map((store, idx) => (
                <div
                    key={idx}
                    className="rounded-2xl p-6 flex flex-col items-center text-center border-2 border-dashed border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <div className="mt-10 mb-4">{store.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{store.title}</h3>
                    <p className="text-gray-600 text-sm">{store.item1}</p>
                    <p className="text-gray-600 mb-10 text-sm">{store.item2}</p>
                </div>
            ))}
        </div>
    )
}

export default AddressCards