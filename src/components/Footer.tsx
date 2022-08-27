import * as React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-[#00df9a] w-full text-3xl font-bold">TAILWIND.</h1>
        <p className="py-4">
          TAILWIND Group assists organizations in the development, maintenance
          and application of their data to improve performance across a wide
          range of functions, including business, engineering, maintenance and
          operations.
        </p>
        <div className="flex my-4">
          <FaTwitter size={25}  className="mr-2"/>
          <FaDribbbleSquare size={25} className="mx-2"/>
          <FaFacebookSquare size={25} className="mx-2"/>
          <FaInstagram size={25} className="mx-2"/>
          <FaLinkedin size={25} className="mx-2"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
            <h4 className="font-bold text-gray-400">Solutions</h4>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-gray-400">Company</h4>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-gray-400">Support</h4>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-gray-400">Legal</h4>
            <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Tems</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
