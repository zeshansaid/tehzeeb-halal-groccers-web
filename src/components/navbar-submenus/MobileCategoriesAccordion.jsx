import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiChevronDown } from "react-icons/hi"
import { categories } from "../../data/categories"
 
const MobileCategoriesAccordion = ({ onItemClick }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 pb-2">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between text-gray-700 font-medium"
            >
                <span>Categories</span>
                <HiChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Body */}
            {open && (
                <div className="mt-4 space-y-6">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="mb-2 text-sm font-semibold text-rabbit">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                                {category.items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={`/collections/${item
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                        onClick={onItemClick}
                                        className="text-sm text-gray-600 hover:text-black"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileCategoriesAccordion
