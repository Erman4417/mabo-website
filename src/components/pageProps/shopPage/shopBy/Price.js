import React from "react";
import NavTitle from "./NavTitle";
import { SplOfferData } from "../../../../constants";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0,
      priceTwo: 199,
    },
    {
      _id: 951,
      priceOne: 200,
      priceTwo: 499,
    },
    {
      _id: 952,
      priceOne: 500,
      priceTwo: 999,
    },
    {
      _id: 953,
      priceOne: 1000,
      priceTwo: 1499,
    },
    {
      _id: 954,
      priceOne: 1500,
      priceTwo: 2000,
    }
  ];

  
  
  
  const clicker = (e) => {
    speechSynthesis.map(item=> console.log(item))
  }

  return (
    <div className="cursor-pointer">
      <NavTitle title="Бағасы бойынша көру" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              onClick={
                (e)=> clicker(e)
              }
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
