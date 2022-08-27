import * as React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

interface ISubscriptionProps {}

const Subscription: React.FunctionComponent<ISubscriptionProps> = (props) => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={single}
            alt="Tailwind"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-6">Single User</h2>
          <p className="text-4xl text-center font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-3 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-3 border-b mx-8">1 Granted User</p>
            <p className="py-3 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            src={double}
            alt="Tailwind"
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl text-center font-bold py-6">Double User</h2>
          <p className="text-4xl text-center font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-3 border-b mx-8 mt-8">1000GB Storage</p>
            <p className="py-3 border-b mx-8">2 Granted Users</p>
            <p className="py-3 border-b mx-8">Send up to 20GB</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 bg-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={triple}
            alt="Tailwind"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-6">
            Multiple Users
          </h2>
          <p className="text-4xl text-center font-bold">$449</p>
          <div className="text-center font-medium">
            <p className="py-3 border-b mx-8 mt-8"> Unlimited Storage</p>
            <p className="py-3 border-b mx-8">Multiple Users</p>
            <p className="py-3 border-b mx-8">Send up to unlimited</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
