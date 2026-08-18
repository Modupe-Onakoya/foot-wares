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
    const [mobileSection, setMobileSection] = useState("")
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [homeHover, setHomeHover] = useState(false)
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
                                <Link to={"/"} className="block hover:bg-gray-300 ">Home</Link>

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
                                    <Link to={"/all-products?collection=sports"} className="block hover:bg-gray-300">Sports</ Link>
                                    <Link to={"/all-products?collection=fashion"} className="block hover:bg-gray-300">Fashion</Link>


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
            <div className='md:hidden'>

                {/* Mobile top bar */}
                <div className='flex w-full justify-between items-center'>
                    <Link to="/" className='flex gap-1 items-center'>
                        <span className='text-md font-bold'>SNEAK LOVERS</span>
                        <img src={assets.baby_feet} alt="" className='w-3 h-3' />
                    </Link>

                    <div className='flex gap-4 items-center'>
                        {/* search icon */}
                        <img
                            src={assets.search}
                            alt=""
                            className='w-4 h-4 cursor-pointer'
                            onClick={() => setOpenSearch(!openSearch)}
                        />
                        {/* cart */}
                        {user && (
                            <div className='relative flex cursor-pointer' onClick={() => navigate("/cart")}>
                                <img src={assets.cart} alt="" className='w-4 h-4' />
                                <p className='absolute text-[10px] -top-1 -right-2 font-bold'>{cart.length}</p>
                            </div>
                        )}
                        {/* hamburger */}
                        <button className='space-y-[5px] flex flex-col' onClick={() => setOpenMenu(!openMenu)}>
                            <span className={`w-[18px] h-[2px] bg-black transition-all duration-300 ${openMenu ? 'rotate-45 translate-y-[7px]' : ''}`} />
                            <span className={`w-[18px] h-[2px] bg-black transition-all duration-300 ${openMenu ? 'opacity-0' : ''}`} />
                            <span className={`w-[18px] h-[2px] bg-black transition-all duration-300 ${openMenu ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu — slides down */}
                <div className={`fixed top-0 left-0 right-0 z-50 bg-white h-screen flex flex-col transition-transform duration-500 ease-in-out ${openMenu ? "translate-y-0" : "-translate-y-full"}`}>

                    {/* menu top bar */}
                    <div className='flex justify-between items-center px-6 py-4 border-b border-gray-100'>
                        <Link to="/" className='flex gap-1 items-center' onClick={() => setOpenMenu(false)}>
                            <span className='font-bold'>SNEAK LOVERS</span>
                            <img src={assets.baby_feet} alt="" className='w-3 h-3' />
                        </Link>
                        <button className='space-y-[5px] flex flex-col' onClick={() => setOpenMenu(false)}>
                            <span className='w-[18px] h-[2px] bg-black rotate-45 translate-y-[7px]' />
                            <span className='w-[18px] h-[2px] bg-black opacity-0' />
                            <span className='w-[18px] h-[2px] bg-black -rotate-45 -translate-y-[7px]' />
                        </button>
                    </div>

                    {/* nav links — accordion style */}
                    <div className='flex flex-col px-6 py-6 gap-1 overflow-y-auto flex-1'>

                        {/* Home accordion */}
                        <div className='border-b border-gray-100'>
                            <button
                                onClick={() => setMobileSection(mobileSection === "home" ? "" : "home")}
                                className='flex items-center justify-between w-full py-4 font-semibold text-lg'
                            >
                                <span>Home</span>
                                <img src={assets.arrow_down} className={`w-3 h-3 transition-transform duration-300 ${mobileSection === "home" ? "rotate-180" : ""}`} alt="" />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileSection === "home" ? "max-h-48 pb-3" : "max-h-0"}`}>
                                <div className='flex flex-col gap-3 pl-4'>
                                    <a href='#' onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Home</a>
                                    <a href='#products' onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Featured Products</a>
                                    <a href='#brands' onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Brands</a>
                                    <a href='#testimonials' onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Testimonials</a>
                                </div>
                            </div>
                        </div>

                        {/* Brand accordion */}
                        <div className='border-b border-gray-100'>
                            <button
                                onClick={() => setMobileSection(mobileSection === "brand" ? "" : "brand")}
                                className='flex items-center justify-between w-full py-4 font-semibold text-lg'
                            >
                                <span>Brand</span>
                                <img src={assets.arrow_down} className={`w-3 h-3 transition-transform duration-300 ${mobileSection === "brand" ? "rotate-180" : ""}`} alt="" />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileSection === "brand" ? "max-h-48 pb-3" : "max-h-0"}`}>
                                <div className='flex flex-col gap-3 pl-4'>
                                    <Link to="/brand-page/nike" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Nike</Link>
                                    <Link to="/brand-page/puma" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Puma</Link>
                                    <Link to="/brand-page/adidas" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Adidas</Link>
                                </div>
                            </div>
                        </div>

                        {/* Shop accordion */}
                        <div className='border-b border-gray-100'>
                            <button
                                onClick={() => setMobileSection(mobileSection === "shop" ? "" : "shop")}
                                className='flex items-center justify-between w-full py-4 font-semibold text-lg'
                            >
                                <span>Shop</span>
                                <img src={assets.arrow_down} className={`w-3 h-3 transition-transform duration-300 ${mobileSection === "shop" ? "rotate-180" : ""}`} alt="" />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileSection === "shop" ? "max-h-48 pb-3" : "max-h-0"}`}>
                                <div className='flex flex-col gap-3 pl-4'>
                                    <Link to="/all-products" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>All</Link>
                                    <Link to="/all-products?newArrivals=true" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>New Arrivals</Link>
                                    <Link to="/all-products?tag=bestseller" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Best Sellers</Link>
                                </div>
                            </div>
                        </div>

                        {/* Collection accordion */}
                        <div className='border-b border-gray-100'>
                            <button
                                onClick={() => setMobileSection(mobileSection === "collection" ? "" : "collection")}
                                className='flex items-center justify-between w-full py-4 font-semibold text-lg'
                            >
                                <span>Collection</span>
                                <img src={assets.arrow_down} className={`w-3 h-3 transition-transform duration-300 ${mobileSection === "collection" ? "rotate-180" : ""}`} alt="" />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileSection === "collection" ? "max-h-48 pb-3" : "max-h-0"}`}>
                                <div className='flex flex-col gap-3 pl-4'>
                                    <Link to="/all-products?collection=sports" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'> Sports</Link>
                                    <Link to="/all-products?collection=fashion" onClick={() => setOpenMenu(false)} className='text-gray-500 text-sm'>Fashion</Link>
                                </div>
                            </div>
                        </div>

                        {/* Account / sign in */}
                        <div className='mt-4'>
                            {user
                                ? <UserButton />
                                : <button onClick={() => { openSignIn(); setOpenMenu(false); }} className='w-full border border-black py-3 font-semibold text-sm rounded-lg'>
                                    Sign In
                                </button>
                            }
                        </div>

                    </div>
                </div>

                {/* Mobile search — slides down */}
                <div className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-500 ease-in-out ${openSearch ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className='flex items-center justify-between px-6 py-4 border-b border-gray-100'>
                        <form
                            className='flex items-center gap-2 flex-1'
                            onSubmit={(e) => { e.preventDefault(); search(); setOpenSearch(false); }}
                        >
                            <img src={assets.search} alt="" className='w-4 h-4 shrink-0' />
                            <input
                                type="text"
                                placeholder='Search sneakers...'
                                className='outline-none text-lg flex-1'
                                value={searchShoe}
                                onChange={(e) => setSearchShoe(e.target.value)}
                                autoFocus
                            />
                        </form>
                        <button
                            onClick={() => setOpenSearch(false)}
                            className='ml-4 text-gray-400 font-medium text-sm'
                        >
                            Cancel
                        </button>
                    </div>
                </div>

            </div>

        </nav >

    )
}

export default Navbar