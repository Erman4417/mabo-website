import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Біз жайлы"  />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">MOBA</span>{" "}
          - әлемдегі жетекші электрондық коммерция брендтерінің бірі және классикалық Дүниежүзілік әдемі көрінетін стильдің мәнін атап өту үшін халықаралық деңгейде танылған.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Сатып алуды жалғастыру
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
