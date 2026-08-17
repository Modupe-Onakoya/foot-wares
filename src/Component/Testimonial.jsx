const testimonials = [
    {
        id: 1,
        name: "John Davis",
        role: "Sneaker Enthusiast",
        text: "Great quality and smooth shopping experience. My shoes arrived exactly as expected.",
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Verified Customer",
        text: "The selection is amazing and delivery was fast. Definitely one of my favorite sneaker stores.",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Verified Customer",
        text: "Easy to navigate, great prices, and the shoes were authentic. Highly recommended.",
    },
];

const Testimonials = () => {
    return (
        <section className="px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30 -z-100"
            id="testimonials"
        >
            <h2 className="text-center text-xl font-bold">What Our Customers Say</h2>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="rounded-xl bg-gray-100 p-6"
                    >
                        <p className="text-gray-600">"{testimonial.text}"</p>

                        <div className="mt-6">
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <span className="text-sm text-gray-500">
                                {testimonial.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
