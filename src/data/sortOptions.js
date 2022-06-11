import {
  FcAlphabeticalSortingZa,
  FcAlphabeticalSortingAz,
  FcSalesPerformance,
  FcClock,
} from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoMdInfinite } from "react-icons/io";

export const sortOptions = [
  {
    name: "All",
    icon: <IoMdInfinite />,
  },
  {
    name: "A-Z",
    icon: <FcAlphabeticalSortingAz />,
  },
  {
    name: "Z-A",
    icon: <FcAlphabeticalSortingZa />,
  },
  {
    name: "New-Old",
    icon: <FcClock />,
  },
  {
    name: "Old-New",
    icon: <FcClock />,
  },
  {
    name: "High-Low",
    icon: <FcSalesPerformance />,
  },
  {
    name: "Low-High",
    icon: <FcSalesPerformance />,
  },
  {
    name: "High-Low",
    icon: <MdOutlineAttachMoney />,
  },
  {
    name: "Low-High",
    icon: <MdOutlineAttachMoney />,
  },
];
