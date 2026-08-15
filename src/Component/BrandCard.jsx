import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    return (
        <div className="relative h-[400px] overflow-hidden rounded-xl -z-100 transition-transform duration-500 hover:scale-105">
            <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex h-full flex-col items-center justify-between p-6 text-white">
                <div className="text-center">
                    <img
                        src={brand.logo}
                        alt={brand.name}
                        className="mx-auto h-12 w-auto object-contain"
                    />

                    <p className="mt-3 text-sm">{brand.tagline}</p>
                </div>

                <Link
                    to={brand.link}
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                    Explore
                </Link>
            </div>
        </div>
    );
};

export default BrandCard;