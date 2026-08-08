import React, { useState } from 'react'
import { assets } from '../assets/asset'

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const blur = () => {
        setShowSearch(!showSearch)
        document.body.style.filter = "blur(5px)"
    }


    const search = () => {
    }
    return (
        <nav className={`px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 sm:flex flex-col gap-6  fixed top-0 left-0 right-0 py-2  ${showSearch && "backdrop-blur-sm z-40 inset-0"}`}>

            <div className=' mx-auto  gap-20 text-[13px] hidden md:flex '>
                <a href=""> <img src={assets.baby_feet} alt="" className='cursor-pointer w-5 h-5' /></a>
                <a href="">Sneakers</a>
                <a href="">Sandals</a>
                <a href="">Boots</a>
                <p className='cursor-pointer'>Loafers</p>
                <img src={assets.search} alt="" className='cursor-pointer w-3 h-3' onClick={() => setShowSearch(!showSearch)} />
            </div >
            {
                showSearch &&
                <form className='hidden md:flex  sm:text-4xl  items-center rounded-xl justify-between bg-gray-200 w-xl h-[100px] px-3 mx-auto'>
                    <input type="text" placeholder='search' className='rounded-xl outline-none  border-none  w-full px-2' />
                    <img src={assets.search} alt="" className='w-3 h-3' />

                </form>
            }

            {/* Mobile view */}
            <div className='md:hidden '>
                <div className=' flex w-full justify-between'>

                    <a href=""> <img src={assets.baby_feet} alt="" className='cursor-pointer w-5 h-5' /></a>
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
                        <a href="">Sneakers</a>
                        <a href="">Sandals</a>
                        <a href="">Boots</a>
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