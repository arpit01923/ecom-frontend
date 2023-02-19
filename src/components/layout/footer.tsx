import {
  BsChevronDoubleRight,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-primaryShadow">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 container mx-auto p-4">
        <div
          className="text-3xl font-bold text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          E-com
        </div>
        <div className="mx-auto">
          <div className="font-bold text-lg mb-3 text-primary">
            Online Shopping
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsChevronDoubleRight fontSize={13} />
            <div>Men</div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsChevronDoubleRight fontSize={13} />
            <div>Women</div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsChevronDoubleRight fontSize={13} />
            <div>Kids</div>
          </div>
        </div>
        <div className="mx-auto col-span-2 md:col-span-1 md:ml-auto">
          <div className="font-bold text-lg mb-3 text-center text-primary">
            Contact Us
          </div>
          <div className="flex gap-5">
            <BsTwitter fontSize={30} className="text-twitter" />
            <BsGithub fontSize={30} />
            <BsLinkedin fontSize={30} className="text-linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
