import Image from "next/image";
import { FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { FaHouse, FaMoneyCheckDollar } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section className=" px-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-32 items-center font-poppinsRegular">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl font-poppinsBold text-black mb-4 font-poppinspoppinsBold">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-700 text-sm">
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods.
          </p>
        </div>
        {/* Right Image Section */}
        <div>
          <Image
            src="/images/1.svg" // Replace with actual image source
            alt="Shopping Girls"
            width={400}
            height={400}
            className="rounded-sm shadow-lg w-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6  text-black">
        <div className="border-2 shadow-md rounded-sm p-6 flex flex-col items-center">
          <span className="text-2xl">
            <FaHouse />
          </span>
          <h3 className="text-xl font-poppinsBold mt-2">10.5k</h3>
          <p className="text-gray-500 text-sm">Sellers active on our site</p>
        </div>
        <div className=" border-2 shadow-md rounded-sm p-6 flex flex-col items-center">
          <span className="text-2xl">
            <FaDollarSign />
          </span>
          <h3 className="text-xl font-poppinsBold mt-2">33k</h3>
          <p className="text-sm">Monthly Product Sale</p>
        </div>
        <div className="border-2 shadow-md rounded-sm p-6 flex flex-col items-center">
          <span className="text-2xl">
            <FaShoppingBag />
          </span>
          <h3 className="text-xl font-poppinsBold mt-2">45.5k</h3>
          <p className="text-gray-500 text-sm">Customers active on our site</p>
        </div>
        <div className="border-2 shadow-md rounded-sm p-6 flex flex-col items-center">
          <span className="text-2xl">
            <FaMoneyCheckDollar />
          </span>
          <h3 className="text-xl font-poppinsBold mt-2">25k</h3>
          <p className="text-gray-500 text-sm">Annual gross sale in our site</p>
        </div>
      </div>
    </section>
  );
}
