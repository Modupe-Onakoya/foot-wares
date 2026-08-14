import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { button } from 'motion/react-client'

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [nikeHover, setNikeHover] = useState(false)
    const [pumaHover, setPumaHover] = useState(false)
    const [adidasHover, setadidasHover] = useState(false)
    const [isLoggedIn, setIsLoggedIm] = useState(false)
    const { user } = useUser()
    const { openSignIn } = useClerk()

    useEffect(() => {
        document.body.style.overflow = showSearch ? "hidden" : ""
    }, [showSearch])

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
        <nav className={`px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 bg-white sm:flex flex-col gap-6 fixed top-0 left-0 right-0 py-2  ${showSearch && "backdrop-blur-sm z-40 inset-0"}`}>

            <div className=" w-full text-[13px] hidden md:flex items-center relative justify-between border ">

                <div className="flex gap-1 items-center  ">
                    <span className="text-lg font-bold">SNEAK LOVERS</span>
                    <a href="">
                        <img src={assets.baby_feet} className="cursor-pointer w-3 h-3" />
                    </a>
                </div>
                <div className=' flex mx-auto gap-15'>


                    {/* Nike */}

                    <a href="#">Home</a>


                    <div
                        className="relative"
                        onMouseEnter={() => setNikeHover(true)}
                        onMouseLeave={() => setNikeHover(false)}
                    >
                        <div className='flex items-center gap-1'>
                            <a href="#">Brand</a>
                            <img src={assets.search} className='w-2 h-2' alt="" />
                        </div>

                        {nikeHover && (
                            <div className="absolute top-full left-0 bg-white p-4 w-[100px] shadow-lg space-y-2 ">
                                <a href="#" className="block hover:bg-gray-300 ">Nike</a>
                                <a href="#" className="block hover:bg-gray-300">Puma</a>
                                <a href="#" className="block hover:bg-gray-300">Adidas</a>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative "
                        onMouseEnter={() => setPumaHover(true)}
                        onMouseLeave={() => setPumaHover(false)}
                    >
                        <div className='flex items-center gap-1'>
                            <a href="#">Shop</a>
                            <img src={assets.search} className='w-2 h-2' alt="" />
                        </div>
                        {
                            pumaHover && (
                                <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 p-4 shadow-lg">
                                    <a href="#" className="block hover:bg-gray-300">ALL</a>
                                    <a href="#" className="block hover:bg-gray-300">New Arrivals</a>
                                    <a href="#" className="block hover:bg-gray-300">Sales</a>
                                    <a href="#" className="block hover:bg-gray-300">Best Sellers</a>

                                </div>
                            )
                        }
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setadidasHover(true)}
                        onMouseLeave={() => setadidasHover(false)}
                    >
                        <div className='flex items-center gap-1'>
                            <a href="#">Collection</a>
                            <img src={assets.search} className='w-2 h-2' alt="" />
                        </div>
                        {
                            adidasHover && (
                                <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 z-100 p-4 shadow-lg">
                                    <a href="#" className="block hover:bg-gray-300">Air Jordan</a>
                                    <a href="#" className="block hover:bg-gray-300">Air Max</a>


                                </div>
                            )
                        }
                    </div>

                </div>
                <div className='flex items-center gap-2'>

                    <div className=''>
                        <img
                            src={assets.search}
                            className="cursor-pointer w-3 h-3"
                            onClick={() => setShowSearch(!showSearch)}

                        />
                        {showSearch &&
                            <form className='hidden absolute left-0 top-10  md:flex sm:text-4xl items-center rounded-xl justify-between bg-gray-200 w-xl h-[100px] px-3 mx-auto'>
                                <input type="text" placeholder='search' className='rounded-xl outline-none border-none w-full px-2' />
                                <img src={assets.search} alt="" className='w-3 h-3' />
                            </form>
                        }

                    </div>

                    {
                        user
                            ?
                            <UserButton />
                            :
                            <div className='flex items-center gap-1' onClick={() => openSignIn()}>
                                <img src={assets.search} alt="" className='w-3 h-3' />
                                <button >Account</button>
                            </div>
                    }
                </div>





            </div>


            {/* Mobile view */}
            <div className='md:hidden '>
                <div className=' flex w-full justify-between'>

                    <div className='flex gap-1 items-center '>
                        <span className='text-md font-bold'>SNEAK lOVERS</span>
                        <a href=""> <img src={assets.baby_feet} alt="" className='cursor-pointer w-3 h-3' /></a>

                    </div>

                    {user ? <div className='flex gap-5'>

                        <img src={assets.search} alt="" className='w-3 h-3 ' onClick={() => setOpenSearch(!openSearch)} />

                        <button className='space-y-[6px] flex flex-col' onClick={() => setOpenMenu(!openMenu)} >
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'rotate-45 translate-y-[8px]'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'opacity-0'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && '-rotate-45 -translate-y-[8px]'}`} />

                        </button>
                    </div>
                        : <button onClick={() => openSignIn()}>Sign In</button>
                    }
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