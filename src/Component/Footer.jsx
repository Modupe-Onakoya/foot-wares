const Footer = () => {
    return (
        <footer className='border-t border-gray-200 mt-20 py-10 px-4 sm:px-6 md:px-8 lg:px-20'>
            <div className='flex flex-col md:flex-row justify-between gap-8'>

                {/* brand */}
                <div>
                    <p className='font-bold text-xl'>SNEAK LOVERS</p>
                    <p className='text-gray-500 text-sm mt-2 max-w-[250px]'>
                        Premium products curated for people who know the difference.
                    </p>
                </div>

                {/* links */}
                <div className='flex gap-16'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-sm'>Shop</p>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>Nike</a>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>Puma</a>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>Adidas</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-sm'>Help</p>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>FAQ</a>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>Shipping</a>
                        <a href="#" className='text-gray-500 text-sm hover:text-black transition-colors'>Returns</a>
                    </div>
                </div>

            </div>

            {/* bottom */}
            <div className='border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row justify-between gap-2'>
                <p className='text-gray-400 text-xs'>© 2026 SneakLovers. All rights reserved.</p>
                <div className='flex gap-4'>
                    <a href="#" className='text-gray-400 text-xs hover:text-black transition-colors'>Privacy</a>
                    <a href="#" className='text-gray-400 text-xs hover:text-black transition-colors'>Terms</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer