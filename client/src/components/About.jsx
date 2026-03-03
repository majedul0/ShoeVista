import React from "react";

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Est. 2024 &middot; Gurgaon, India</p>
                    <h1 className="logo text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        About ShoeVista
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Your ultimate destination for premium footwear — curated for comfort, crafted for style.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Our Story */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-[2px] bg-gray-900"></div>
                        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500">Our Story</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Welcome to ShoeVista, your ultimate online destination for an extensive
                        range of high-quality footwear tailored to meet the needs of the entire
                        family. Located in the vibrant city of Gurgaon, Haryana, we are proud to
                        offer a curated selection of shoes from some of the most renowned brands
                        in the industry, including Adidas, Puma, and Skechers. Our store is
                        designed to provide a seamless shopping experience with a diverse array
                        of options for men, women, and kids.
                    </p>
                </section>

                {/* Feature Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: "👟",
                            title: "Premium Quality",
                            text: "From high-performance running shoes to versatile walking sneakers — every pair meets the highest standards."
                        },
                        {
                            icon: "👨‍👩‍👧‍👦",
                            title: "For Everyone",
                            text: "Men's rugged durability, women's elegance, and kids' fun & functional styles — something for the whole family."
                        },
                        {
                            icon: "🚀",
                            title: "Fast Delivery",
                            text: "Reliable delivery across India with exceptional customer service, right to your doorstep."
                        }
                    ].map((card, i) => (
                        <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                            <span className="text-3xl mb-4 block">{card.icon}</span>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </section>

                {/* Comfort & Style */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-[2px] bg-gray-900"></div>
                        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500">Comfort Meets Style</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At ShoeVista, we understand that comfort and style go hand in hand.
                        That's why our collection features everything from high-performance
                        running shoes to versatile walking sneakers. Whether you're gearing up
                        for a marathon, enjoying a casual stroll, or simply seeking everyday
                        comfort, our range includes something for every occasion and preference.
                        Our assortment of men's shoes combines rugged durability with modern
                        design, while our women's collection offers both elegance and
                        practicality. For the little ones, we have a variety of fun and
                        functional options that ensure they step out in style.
                    </p>
                </section>

                {/* Why Shop With Us */}
                <section className="mb-16 bg-gray-50 rounded-2xl p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-[2px] bg-gray-900"></div>
                        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-500">Why Shop With Us</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Shopping with us means you have access to the latest trends and
                        innovations in footwear, all from the comfort of your home. Our
                        user-friendly online platform allows you to easily navigate through
                        categories, find detailed product information, and enjoy special
                        promotions. With our commitment to exceptional customer service and
                        fast, reliable delivery across India, you can trust us to deliver your
                        chosen pair right to your doorstep swiftly and securely.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "500+", label: "Products" },
                            { value: "50K+", label: "Happy Customers" },
                            { value: "4.8★", label: "Avg Rating" },
                            { value: "24/7", label: "Support" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trusted Brands */}
                <section className="text-center mb-10">
                    <p className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-4">Trusted Brands We Carry</p>
                    <div className="flex justify-center gap-10 text-2xl font-bold text-gray-300">
                        <span className="hover:text-gray-600 transition-colors cursor-default">Adidas</span>
                        <span className="hover:text-gray-600 transition-colors cursor-default">Nike</span>
                        <span className="hover:text-gray-600 transition-colors cursor-default">Puma</span>
                        <span className="hover:text-gray-600 transition-colors cursor-default">Skechers</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
