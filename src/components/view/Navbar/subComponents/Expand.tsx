import { useState } from 'react'
import { NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FC } from 'react';
import Link from "next/link"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpended, setIsExpended] = useState<boolean>(false)
    const [isTimeout, setIsTimeout] = useState<boolean>(false)
    const handleExpend = () => {
        setIsExpended(!isExpended)
        setTimeout(() => {
            setIsTimeout(!isTimeout)
        }, 100);
        setIsTimeout(false)
    }
    return (
        <li className={`${isExpended ? "h-48" : "h-12"} duration-300 list-none`}>
            <div onClick={handleExpend} className="py-2  px-3 flex rounded-md duration-300 hover:bg-gray-200 items-center justify-between">
                <Link href={item.href}>{item.label}</Link>
                {
                    item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""
                }
            </div>
            <div className="flex flex-col space-y-1 mt-2">
                {isTimeout && item.dropDownData?.map((subItem: NavbarItemType, subIndex: number) => (
                    <Link className="hover:bg-gray-50 rounded-md py-1 px-5 duration-300" href={subItem.href} key={subItem.label}>{subItem.label}</Link>
                ))}
            </div>
        </li>
    )
}

export default Expand