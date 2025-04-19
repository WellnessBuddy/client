import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center my-12">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Empowering <span className="text-green-700">Your Wellness</span> Every Day!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Wellness Buddy helps individuals prioritize well-being with daily tracking,
                    smart reminders, and mental health support, fostering balance in life.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                <div className="rounded-full overflow-hidden max-w-md mx-auto">
                    <img
                        src="../../src/assets/hero-image.png"
                        alt="People celebrating wellness achievement"
                        className="w-full h-auto object-cover object-center"
                        style={{ maxHeight: "450px" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;