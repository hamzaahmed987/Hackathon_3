import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="max-w-[1430px] mx-auto px-6 sm:px-8 py-6">
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">GET HELP</h1>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full px-4 py-2 border rounded-md pr-10 text-sm sm:text-base"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1309px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className="text-sm sm:text-base mb-4">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc ml-4 text-sm sm:text-base mb-4 space-y-2">
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                <li>Apple Pay</li>
              </ul>
              <p className="text-sm sm:text-base mb-4">
                Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{" "}
                <Link href="/join" className="underline">
                  join us today
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/join"
                  className="bg-black text-white px-6 py-2 rounded-full text-sm"
                >
                  JOIN US
                </Link>
                <Link
                  href="/shop"
                  className="bg-black text-white px-6 py-2 rounded-full text-sm"
                >
                  SHOP NIKE
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">FAQs</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "Does my card need international purchases enabled?",
                    answer:
                      "Yes, we recommend asking your bank to enable international purchases on your card. Some banks may charge a small transaction fee for international orders.",
                  },
                  {
                    question: "Can I pay for my order with multiple methods?",
                    answer: "No, payment for Nike orders can't be split between multiple payment methods.",
                  },
                  {
                    question: "What payment method is accepted for SNKRS orders?",
                    answer: "You can use any accepted credit card to pay for your SNKRS order.",
                  },
                  {
                    question: "Why don't I see Apple Pay as an option?",
                    answer:
                      "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS and be signed in to your iCloud account.",
                  },
                ].map(({ question, answer }, i) => (
                  <div key={i}>
                    <h3 className="font-bold mb-2">{question}</h3>
                    <p className="text-sm sm:text-base">{answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-sm sm:text-base mb-4">Was this answer helpful?</p>
              <div className="flex gap-4">
                <button className="p-2 border rounded text-sm sm:text-base">👍</button>
                <button className="p-2 border rounded text-sm sm:text-base">👎</button>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center">CONTACT US</h2>
            <div className="space-y-6">
              {[
                { img: "/h1.png", text: ["(00) 800 919 0666", "Products & Orders: 24/7"] },
                { img: "/h2.png", text: ["24/7 Chat Support"] },
                { img: "/h3.png", text: ["We'll reply within 5 business days"] },
                { img: "/h4.png", text: ["Find Nike stores"] },
              ].map(({ img, text }, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Image
                    src={img}
                    alt="Contact Icon"
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  {text.map((line, j) => (
                    <p key={j} className="text-sm sm:text-base">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
