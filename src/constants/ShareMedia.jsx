import { Facebook, Linkedin, Twitter } from "@pwskills/rachnaui/Icons";
import Telegram from "../components/Common/socialMedia/Telegram";
import WhatsApp from "../components/Common/socialMedia/WhatsApp";
import Reddit from "../components/Common/socialMedia/Reddit";

export const shareMedia = [
  {
    className: "bg-[#D6F5E6]",
    icon: <WhatsApp />,
    text: "WhatsApp",
  },
  {
    className: "bg-[#DCE7FF]",
    icon: <Facebook className="text-[#3C5A9A]" />,
    text: "Facebook",
  },
  {
    className: "bg-[#DFF4FF]",
    icon: <Twitter className="text-[#03A9F4]" />,
    text: "Twitter",
  },
  {
    className: "bg-[#EAF8FF]",
    icon: <Telegram className="w-20 h-20" />,
    text: "Telegram",
  },
  {
    className: "bg-[#FFF3EE]",
    icon: <Reddit className="w-6 h-6 m-1 text-gray-300" />,
    text: "Reddit",
  },
  {
    className: "bg-[#DEF3FE]",
    icon: <Linkedin className="text-[#0077B5]" />,
    text: "Linkedin",
  },
];
