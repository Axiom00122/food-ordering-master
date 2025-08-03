'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";

// Static menu items data
const bestSellers = [
  {id: 1, name: "Pepperoni Pizza", description: "Classic favorite", price: 12, image: '/pizza.png'},
  {id: 2, name: "Cheeseburger", description: "Juicy beef patty", price: 8, image: '/burger.png'},
  {id: 3, name: "Pasta", description: "Creamy alfredo", price: 10, image: '/pasta.png'},
];

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Sellers'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}