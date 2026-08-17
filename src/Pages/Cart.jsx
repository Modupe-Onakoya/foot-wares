import { useContext } from "react";
import { context } from "../context/AppContext";
import { assets } from "../assets/asset";

const Cart = () => {
    const { cart, setCart } = useContext(context);

    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    if (cart.length === 0) {
        return (
            <section className="flex min-h-[60vh] flex-col items-center justify-center px-4">
                <h1 className="text-2xl font-bold">Your Cart Is Empty</h1>
                <p className="mt-2 text-gray-500">
                    Add some sneakers to your cart.
                </p>
            </section>
        );
    }
    const removeCart = (id) => {
        setCart((prev) => prev.filter((cart) => cart.id !== id))
    }

    return (
        <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-20">
            <div className="mb-10">
                <p className="text-sm text-gray-500">Sneak Lovers</p>
                <h1 className="mt-2 text-3xl font-bold">
                    Your Cart
                </h1>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

                {/* Cart products */}
                <div className="space-y-5">
                    {cart.map((product, index) => (

                        <div
                            key={`${product.id}-${index}`}
                            className="flex gap-4 relative rounded-xl border p-4"
                        >
                            <img src={assets.search} className="w-3 h-3 absolute top-5 right-5" alt="" onClick={() => removeCart(product.id)} />

                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-28 w-28 rounded-lg bg-gray-100 object-cover"
                            />

                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {product.brand}
                                    </p>

                                    <h2 className="font-semibold">
                                        {product.name}
                                    </h2>
                                </div>

                                <p className="font-bold">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Summary */}
                <div className="h-fit rounded-xl bg-gray-100 p-6">
                    <h2 className="text-xl font-bold">
                        Order Summary
                    </h2>

                    <div className="mt-6 flex justify-between">
                        <span>Items</span>
                        <span>{cart.length}</span>
                    </div>

                    <div className="mt-3 flex justify-between">
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>

                    <div className="my-6 border-t" />

                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>

                    <button className="mt-6 w-full rounded-lg bg-black py-3 text-white">
                        Checkout
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Cart;