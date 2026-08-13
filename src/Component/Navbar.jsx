import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [nikeHover, setNikeHover] = useState(false)
    const [pumaHover, setPumaHover] = useState(false)
    const [adidasHover, setadidasHover] = useState(false)


    const overIn = () => {
        console.log("worked")
        setIfHover(true)
    }
    const overOut = () => {
        console.log("worked")
        setIfHover(false)
    }
    const blur = () => {
        setShowSearch(!showSearch)
        document.body.style.filter = "blur(5px)"
    }


    const search = () => {
    }
    return (
        <nav className={`px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 bg-white sm:flex flex-col gap-6  fixed top-0 left-0 right-0 py-2  ${showSearch && "backdrop-blur-sm z-40 inset-0"}`}>
            <div className="mx-auto gap-20 text-[13px] hidden md:flex">

                <div className="flex gap-1 items-center">
                    <span className="text-lg font-bold">SNEAK LOVERS</span>
                    <a href="">
                        <img src={assets.baby_feet} className="cursor-pointer w-3 h-3" />
                    </a>
                </div>

                {/* Nike */}
                <div
                    className="relative"
                    onMouseEnter={() => setNikeHover(true)}
                    onMouseLeave={() => setNikeHover(false)}
                >
                    <a href="#">Nike</a>

                    {nikeHover && (
                        <div className="absolute top-full left-0 bg-white p-4 w-[100px] shadow-lg ">
                            <a href="#" className="block hover:bg-gray-300 ">Air Max</a>
                            <a href="#" className="block hover:bg-gray-300">Air Force</a>
                            <a href="#" className="block hover:bg-gray-300">Dunk</a>
                        </div>
                    )}
                </div>

                <div
                    className="relative "
                    onMouseEnter={() => setPumaHover(true)}
                    onMouseLeave={() => setPumaHover(false)}
                >
                    <a href="#">Puma</a>
                    {
                        pumaHover && (
                            <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 p-4 shadow-lg">
                                <a href="#" className="block hover:bg-gray-300">Puma Suede</a>
                                <a href="#" className="block hover:bg-gray-300">Puma Clyde</a>
                                <a href="#" className="block hover:bg-gray-300">Puma Palermo</a>
                                <a href="#" className="block hover:bg-gray-300">Puma Cali & Carina</a>

                            </div>
                        )
                    }
                </div>
                <div
                    className="relative"
                    onMouseEnter={() => setadidasHover(true)}
                    onMouseLeave={() => setadidasHover(false)}
                >
                    <a href="#">Adidas</a>
                    {
                        adidasHover && (
                            <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 z-100 p-4 shadow-lg">
                                <a href="#" className="block hover:bg-gray-300">Adidas Samba</a>
                                <a href="#" className="block hover:bg-gray-300">Adidas Gazelle</a>
                                <a href="#" className="block hover:bg-gray-300">Adidas Superstar</a>
                                <a href="#" className="block hover:bg-gray-300">Adidas Stan Smith</a>
                                <a href="#" className="block hover:bg-gray-300">Adidas Campus 00s</a>

                            </div>
                        )
                    }
                </div>

                <img
                    src={assets.search}
                    className="cursor-pointer w-3 h-3"
                    onClick={() => setShowSearch(!showSearch)}
                />

            </div>

            {/* Mobile view */}
            <div className='md:hidden '>
                <div className=' flex w-full justify-between'>

                    <div className='flex gap-1 items-center '>
                        <span className='text-md font-bold'>SNEAK lOVERS</span>
                        <a href=""> <img src={assets.baby_feet} alt="" className='cursor-pointer w-3 h-3' /></a>

                    </div>
                    <div className='flex gap-5'>

                        <img src={assets.search} alt="" className='w-3 h-3 ' onClick={() => setOpenSearch(!openSearch)} />

                        <button className='space-y-[6px] flex flex-col' onClick={() => setOpenMenu(!openMenu)} >
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'rotate-45 translate-y-[8px]'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'opacity-0'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && '-rotate-45 -translate-y-[8px]'}`} />

                        </button>
                    </div>
                </div>



                <div className={`${openMenu ? "translate-y-0 delay-200" : "-translate-y-full"} bg-white h-screen flex justify-between fixed top-0 left-0 right-0 z-10  px-4 py-2 transition-transform ease-in-out duration-500   `}>
                    <div className='flex flex-col h-full text-3xl py-20 gap-8 font-bold px-10'>
                        <a href="">Nike</a>
                        <a href="">Puma</a>
                        <a href="">Addidas</a>
                    </div>
                    <button className='space-y-[6px] flex flex-col ' onClick={() => setOpenMenu(!openMenu)} >
                        <span className={`w-[15px] bg-black h-[2px] transition-all border ${openMenu && 'rotate-45 translate-y-[8px] '}`} />
                        <span className={`w-[15px] bg-black  h-[2px] transition-all border ${openMenu && 'opacity-0'}`} />
                        <span className={`w-[15px] bg-black h-[2px] transition-all border ${openMenu && '-rotate-45 -translate-y-[8px]'}`} />

                    </button>

                </div>

                <div className={`${openSearch ? "translate-y-0 delay-200" : "-translate-y-full"} bg-white h-screen flex justify-between fixed top-0 left-0 right-0 z-100  px-4 py-2 transition-transform ease-in-out duration-500   `}>
                    <form action="" className='flex py-10 flex px-5 gap-1  h-fit items-center '>
                        <img src={assets.search} alt="" className='w-5 h-5 ' />
                        <input type="text" className='h-[50px] outline-none text-2xl max-w-[200px] text-black ' placeholder='Search' />
                    </form>
                    <button className='space-y-[6px] flex flex-col ' onClick={() => setOpenSearch(!openSearch)} >
                        <span className={`w-[15px] bg-black h-[2px] transition-all border ${openSearch && 'rotate-45 translate-y-[8px] '}`} />
                        <span className={`w-[15px] bg-black  h-[2px] transition-all border ${openSearch && 'opacity-0'}`} />
                        <span className={`w-[15px] bg-black h-[2px] transition-all border ${openSearch && '-rotate-45 -translate-y-[8px]'}`} />

                    </button>
                </div>


            </div>

        </nav >

    )
}

export default Navbar