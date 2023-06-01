import { FaClipboardList } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

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
  {
    icon: <TbDiscount2 />,
    link: "/settings/coupon-list",
  },
  {
    icon: <AiFillStar />,
    link: "/settings/review-list",
  },
];
//for 3rd party login
export const sideNavLinksWithoutResetPwd = [
  {
    icon: <IoPersonSharp />,
    link: "/settings/account",
  },

  {
    icon: <IoIosHeart />,
    link: "/settings/fav-list",
  },
  {
    icon: <FaClipboardList />,
    link: "/settings/order-list",
  },
  {
    icon: <TbDiscount2 />,
    link: "/settings/coupon-list",
  },
  {
    icon: <AiFillStar />,
    link: "/settings/review-list",
  },
];
