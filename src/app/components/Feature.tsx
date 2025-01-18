// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Features() {
    return (
        <>
            <Head>
                <title>Step into What Feels Good</title>
                <link rel="stylesheet" href="https://cdn.tailwindcss.com" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap" rel="stylesheet" />
            </Head>
            <div className="container mx-auto my-8 px-4">
                {/* Section Title */}
                <div className="text-gray-600 uppercase tracking-wide font-bold text-center text-sm sm:text-lg">
                    Featured
                </div>

                {/* Hero Image */}
                <div className="mt-4">
                    <Image
                        src="/featutre.png"
                        width={1344}
                        height={700}
                        alt="A man running in nature with hills in the background"
                        className="w-full h-auto object-cover rounded"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    />
                </div>

                {/* Main Heading */}
                <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-6 leading-snug">
                    Step into what feels good
                </div>

                {/* Subheading */}
                <div className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                    Cause everyone should know the feeling of running in that perfect pair.
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-black text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-gray-800 transition ease-in-out duration-300">
                        Find Your Shoe
                    </button>
                </div>
            </div>
        </>
    );
}
