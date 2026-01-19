import  { useState } from "react"
import { HiChevronDown } from "react-icons/hi"

const MobileNavAccordion = ({ title, items, onItemClick }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 pb-2">
            {/* Accordion Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between text-gray-700 "
            >
                <span className="text-gray-600 hover:text-zinc-700">{title}</span>
                <HiChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Accordion Body */}
            {open && (
                <div className="mt-3 ml-4 space-y-2">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.to}
                            onClick={onItemClick}
                            className="block text-sm text-gray-600 hover:text-black"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileNavAccordion
