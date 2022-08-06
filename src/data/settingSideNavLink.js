import { FaClipboardList } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

export const sideNavLinks = [
  {
    icon: <IoPersonSharp />,
    link: "/settings/account",
  },
  {
    icon: <RiLockPasswordFill />,
    link: "/settings/account-reset-pwd",
  },
  {
    icon: <IoIosHeart />,
    link: "/settings/fav-list",
  },
  {
    icon: <FaClipboardList />,
    link: "/settings/order-list",
  },
];
