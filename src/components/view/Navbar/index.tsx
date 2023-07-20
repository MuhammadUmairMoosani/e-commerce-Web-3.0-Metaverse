"use client"

import { HiOutlineChevronDown } from 'react-icons/hi'
import { BsCart2 } from "react-icons/bs"
import { BiSearch } from 'react-icons/bi'
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Image from "next/image"
import Link from "next/link"
import DropDown from './subComponents/DropDown'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import Expand from './subComponents/Expand'


const MobileNavbar = () => {
    return (
            <div className="w-full px-6 py-4 bg-gray-100 absolute">
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => (
                        <Expand key={index} item={item} />
                    ))
                }
            </div>
    )
}

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
    const [cartItemNumber, setCartItemNumber] = useState<number>(0)
    return (
        <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
            <div className="py-5 flex justify-between items-center space-x-8">
                <Link href="/" className="w-36 flex-shrink- 0">
                    <Image width={500} height={500} src={'/Logo.webp'} alt="Logo" />
                </Link>
                <div className="hidden lg:flex justify-between items-center w-full">
                    <ul className="flex space-x-4 font-medium text-lg">
                        {
                            NavbarArray.map((item: NavbarItemType, index: number) => (
                                <li key={item.label} className="flex items-center gap-1 relative     rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                                    <Link href={item.href}>{item.label}</Link>
                                    {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                                    {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0  py-2 px-6 bg-gray-100  font-light min-w-[4rem]`}>
                                        <DropDown item={item} />
                                    </div>}

                                </li>
                            ))
                        }
                    </ul>
                    <div className="border flex items-center text-gray-600 px-3 rounded-lg">
                        <BiSearch />
                        <input type="text" className="facus:outline-none pl-1 pr-5 py-1 w-80" placeholder='Search in Our Store' />
                    </div>
                    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full items-center justify-center flex">
                        <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center">{cartItemNumber}</div>
                        <BsCart2 size={24} />
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    {isNavbarOpen ?
                        <div>
                            <IoMdClose size={29} />
                        </div>
                        :
                        <div className="flex lg:hidden">
                            <GiHamburgerMenu size={25} />
                        </div>
                    }
                </div>
            </div>
            {
                isNavbarOpen && <MobileNavbar />
            }
        </div>
    )
}

export default Navbar