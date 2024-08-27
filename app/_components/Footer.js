import Image from "next/image";
import logo from "@/public/Oobli_Logo_87a11e5d-0cf5-438f-8342-514310177448.png";

export default function Footer() {
  return (
    <footer className="bg-[#040454] text-gray-200 pt-12 px-12 -mt-2 flex flex-col gap-12 relative">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-4xl font-bold">Stay in the loop</h3>
          <div class="w-full space-y-3">
            <input
              type="text"
              class="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <p>Our Story</p>
            <p>Sweet Proteins</p>
            <p>Press</p>
            <p>Blog</p>
            <p>FAQs</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Contact Us</p>
            <p>Register/Sign In</p>
            <p>Affiliate Program</p>
            <p>Jobs</p>
            <p>Partners</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
      <Image src={logo} alt="Oobli Logo" />
    </footer>
  );
}
