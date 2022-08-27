import * as React from "react";
import laptop from "../assets/laptop.jpeg";

interface IAnalyticsProps {}

const Analytics: React.FunctionComponent<IAnalyticsProps> = (props) => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="Tailwind" className="w-[500px] mx-auto my-4"/>
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="text-[#00df9a] text-xl font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-start">Manage data analytics centrally</h1>
          <p className="text-center md:text-start">
            Our goal is to help our clients manage and analyze their data to
            make better decisions. Today, organizations are collecting more data
            than ever before, but many are not taking full advantage of the
            insights that reside within these data to optimize their
            performance. Just as with facilities, equipment and people, an
            organization's data is a valuable business asset.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium py-3 my-5 text-[#00df9a]">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
