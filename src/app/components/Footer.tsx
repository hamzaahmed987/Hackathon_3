import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="space-y-4">
            <Link href="/store" className="block text-white hover:text-gray-300">
              FIND A STORE
            </Link>
            <Link href="/member" className="block text-white hover:text-gray-300">
              BECOME A MEMBER
            </Link>
            <Link href="/signup" className="block text-white hover:text-gray-300">
              SIGN UP FOR EMAIL
            </Link>
            <Link href="/feedback" className="block hover:text-gray-300">
              Send Us Feedback
            </Link>
            <Link href="/student-discounts" className="block hover:text-gray-300">
              STUDENT DISCOUNTS
            </Link>
          </div>

          {/* GET HELP Column */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">GET HELP</h3>
            <Link href="/order-status" className="block hover:text-gray-300">
              Order Status
            </Link>
            <Link href="/delivery" className="block hover:text-gray-300">
              Delivery
            </Link>
            <Link href="/returns" className="block hover:text-gray-300">
              Returns
            </Link>
            <Link href="/payment" className="block hover:text-gray-300">
              Payment Options
            </Link>
            <Link href="/contact" className="block hover:text-gray-300">
              Contact Us On Nike.com Inquiries
            </Link>
            <Link href="/contact-other" className="block hover:text-gray-300">
              Contact Us On All Other Inquiries
            </Link>
          </div>

          {/* ABOUT NIKE Column */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">ABOUT NIKE</h3>
            <Link href="/news" className="block hover:text-gray-300">
              News
            </Link>
            <Link href="/careers" className="block hover:text-gray-300">
              Careers
            </Link>
            <Link href="/investors" className="block hover:text-gray-300">
              Investors
            </Link>
            <Link href="/sustainability" className="block hover:text-gray-300">
              Sustainability
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="https://twitter.com/nike" className="hover:opacity-80">
              <Image
                src="/x.png"
                alt="Twitter"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="https://facebook.com/nike" className="hover:opacity-80">
              <Image
                src="/fb.png"
                alt="Facebook"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="https://youtube.com/nike" className="hover:opacity-80">
              <Image
                src="/yt.png"
                alt="YouTube"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="https://instagram.com/nike" className="hover:opacity-80">
              <Image
                src="/insta.png"
                alt="Instagram"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm">
            <span>🌍</span>
            <span>India</span>
            <span className="ml-4">© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/guides" className="hover:text-gray-300">
              Guides
            </Link>
            <Link href="/terms-of-sale" className="hover:text-gray-300">
              Terms of Sale
            </Link>
            <Link href="/terms-of-use" className="hover:text-gray-300">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
