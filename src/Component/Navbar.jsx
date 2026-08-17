import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/asset'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { button, div } from 'motion/react-client'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../context/AppContext'

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [menuOpen, setMenuOpen] = useState({
        nikeHover: false,
        pumaHover: false,
        adidasHover: false
    })
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    // const [nikeHover, setNikeHover] = useState(false)
    // const [pumaHover, setPumaHover] = useState(false)
    const [homeHover, setHomeHover] = useState(false)
    // const [adidasHover, setadidasHover] = useState(false)
    const [isLoggedIn, setIsLoggedIm] = useState(false)
    const { user } = useUser()
    const navigate = useNavigate()
    const { openSignIn } = useClerk()
    const { searchShoe, setSearchShoe, cart } = useContext(context)

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
        navigate(`/all-products?shoeSearch=${searchShoe}`)
        setShowSearch(!showSearch)
        searchShoe("")
    }
    return (
        <nav className={`px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 bg-white sm:flex flex-col gap-6 fixed top-0 left-0 right-0 py-2 z-40 ${showSearch && "backdrop-blur-sm  inset-0"}`}>

            <div className=" w-full text-[13px] hidden md:flex items-center relative justify-between  ">

                <Link to={"/"} className="flex gap-1 items-center  ">
                    <span className="text-lg font-bold">SNEAK LOVERS</span>

                    <img src={assets.baby_feet} className="cursor-pointer w-3 h-3" />

                </Link>
                <div className=' flex mx-auto gap-15'>


                    {/* Nike */}

                    <div
                        className="relative"
                        onMouseEnter={() => setHomeHover(true)}
                        onMouseLeave={() => setHomeHover(false)}
                    >
                        <div className='flex items-center gap-1'>
                            <a href="#">Home</a>
                            <img src={assets.arrow_down} className='w-2 h-2' alt="" />
                        </div>

                        {homeHover && (
                            <div className="absolute top-full left-0 bg-white p-4 w-[200px] shadow-lg space-y-2 ">
                                <a href='#' className="block hover:bg-gray-300 ">Home</a>

                                <a href='#products' className="block hover:bg-gray-300 ">Featured Products</a>
                                <a href='#brands' className="block hover:bg-gray-300 ">Brands</a>
                                <a href='#testimonials' className="block hover:bg-gray-300 ">Testimonials</a>


                            </div>
                        )}
                    </div>


                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMenu({ ...openMenu, nikeHover: true })}
                        onMouseLeave={() => setOpenMenu({ ...openMenu, nikeHover: false })}

                    >
                        <div className='flex items-center gap-1'>
                            <p >Brand</p>
                            <img src={assets.arrow_down} className='w-2 h-2' alt="" />
                        </div>

                        {openMenu.nikeHover && (
                            <div className="absolute top-full left-0 bg-white p-4 w-[100px] shadow-lg space-y-2 ">
                                <Link to={"/brand-page/nike"} className="block hover:bg-gray-300 ">Nike</Link>
                                <Link to={"/brand-page/puma"} className="block hover:bg-gray-300 ">Puma</Link>
                                <Link to={"/brand-page/adidas"} className="block hover:bg-gray-300 ">Adidas</Link>

                            </div>
                        )}
                    </div>

                    <div
                        className="relative "
                        onMouseEnter={() => setOpenMenu({ ...openMenu, pumaHover: true })}
                        onMouseLeave={() => setOpenMenu({ ...openMenu, pumaHover: false })}
                    >
                        <div className='flex items-center gap-1'>
                            <p>Shop</p>
                            <img src={assets.arrow_down} className='w-2 h-2' alt="" />
                        </div>
                        {
                            openMenu.pumaHover && (
                                <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 p-4 shadow-lg">
                                    <Link to={"/all-products"} className="block hover:bg-gray-300">ALL</Link>
                                    <Link to={"/all-products?newArrivals=true"} className="block hover:bg-gray-300">New Arrivals</Link>
                                    <Link to={`/all-products?tag=bestseller`} className="block hover:bg-gray-300">Best Sellers</Link>

                                </div>
                            )
                        }
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMenu({ ...openMenu, adidasHover: true })}
                        onMouseLeave={() => setOpenMenu({ ...openMenu, adidasHover: false })}
                    >
                        <div className='flex items-center gap-1'>
                            <p>Collection</p>
                            <img src={assets.arrow_down} className='w-2 h-2' alt="" />
                        </div>
                        {
                            openMenu.adidasHover && (
                                <div className="absolute top-full left-0 bg-white w-[150px] space-y-2 z-100 p-4 shadow-lg">
                                    <Link to={"/all-products?collection=airJordan"} className="block hover:bg-gray-300">Air Jordan</ Link>
                                    <Link to={"/all-products?collection=airmax"} className="block hover:bg-gray-300">Air Max</Link>


                                </div>
                            )
                        }
                    </div>

                </div>
                <div className='flex items-center gap-3'>

                    <div className=''>
                        <img
                            src={assets.search}
                            className="cursor-pointer w-3 h-3"
                            onClick={() => setShowSearch(!showSearch)}

                        />
                        {showSearch &&
                            <form className='hidden absolute left-0 top-10  md:flex sm:text-4xl items-center rounded-xl justify-between bg-gray-200 w-xl h-[100px] px-3 mx-auto'>
                                <input type="text" placeholder='search' className='rounded-xl outline-none border-none w-full px-2' value={searchShoe} onChange={(e) => setSearchShoe(e.target.value)} />
                                <button onClick={() => search()} className='cursor-pointer'> <img src={assets.search} alt="" className='w-3 h-3' /></button>
                            </form>
                        }

                    </div>

                    {
                        user
                            ?
                            <div className='flex items-center gap-2 relative'>
                                <UserButton />
                                <div className='flex cursor-pointer' onClick={() => navigate("/cart")}>
                                    <img src={assets.cart} alt="" className='cursor-pointer w-3 h-3' />
                                    <p className='absolute text-[11px] top-0 -right-2 font-bold'>{cart.length}</p>
                                </div>

                            </div>
                            :
                            <div className='flex items-center gap-1' onClick={() => openSignIn()}>
                                <img src={assets.user} alt="" className='w-3 h-3' />
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

                    {/* {user ? <div className='flex gap-5'>

                        <img src={assets.search} alt="" className='w-3 h-3 ' onClick={() => setOpenSearch(!openSearch)} />

                        <button className='space-y-[6px] flex flex-col' onClick={() => setOpenMenu(!openMenu)} >
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'rotate-45 translate-y-[8px]'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && 'opacity-0'}`} />
                            <span className={`w-[15px] h-[2px] bg-black transition-all border ${openMenu && '-rotate-45 -translate-y-[8px]'}`} />

                        </button>
                    </div>
                        : <button onClick={() => openSignIn()}>Sign In</button>
                    } */}
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
                        <div><a href="">Home</a></div>
                        <div className='relative'>
                            <a href="">Brand</a>
                            <div className='absolute '>
                                <p>Nike</p>
                            </div>

                        </div>
                        <div><a href="">Shop</a></div>
                        <div> <a href="">Collection</a></div>

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