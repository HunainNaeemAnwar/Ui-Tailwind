import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex flex-col absolute font-poppinsRegular top-32 md:flex-row gap-6 p-6">
      {/* Contact Info Card */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/3">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2 font-poppinsBold text-red-500 font-semibold">
            <span className="text-lg bg-[#DB4444] rounded-full p-2">
              <FaPhone className="text-white" />
            </span>
            Call To Us
          </div>
          <p className="text-gray-600 text-sm">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-600 text-sm">Phone: +8801611122222</p>
        </div>
        <hr className="my-4" />
        <div>
          <div className="flex items-center gap-3 mb-2 font-poppinsBold text-red-500 font-semibold">
            <span className="text-lg  bg-[#DB4444] rounded-full p-2">
              <MdEmail className="text-white" />
            </span>
            Write To Us
          </div>
          <p className="text-gray-600 text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-600 text-sm">
            Emails: customer@exclusive.com
          </p>
          <p className="text-gray-600 text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="p-3 border border-gray-300 bg-[#F5F5F5] rounded-sm w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="p-3 border border-gray-300 rounded-sm w-full bg-[#F5F5F5] text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="p-3 border border-gray-300 rounded-sm w-full bg-[#F5F5F5] text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300  bg-[#F5F5F5] rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-400 h-32"
        ></textarea>
        <div className="mt-4">
          <button className="bg-red-500 text-white py-3 px-6 rounded-sm text-sm hover:bg-red-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
