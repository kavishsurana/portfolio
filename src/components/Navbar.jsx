"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavLink from "./NavLink"

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Protfolio" },
    { url: "/contact", title: "Contact" },
]

const Navbar = () => {

    const [open,setOpen] = useState(false)

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                <NavLink link={link} key={link.title} />
                ))}
            </div>
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">Kavish</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Surana</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4 w-1/3">
            <a href="https://github.com/kavishsurana" target="_blank">
                <Image src="/github.png" width={24} height={24} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/kavish-surana/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" width={24} height={24} alt="Linkedin" />
            </a>


            </div>
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map((link) => (
                        <Link href={link.url} key={link.title}>
                            {link.title}
                        </Link>
                    ))}
                </div>
                )

                }
                
            </div>
        </div>
    )
}

export default Navbar