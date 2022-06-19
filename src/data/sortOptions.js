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
    val: "all",
    icon: <IoMdInfinite />,
  },
  {
    name: "A-Z",
    val: "a-z",
    icon: <FcAlphabeticalSortingAz />,
  },
  {
    name: "Z-A",
    val: "z-a",
    icon: <FcAlphabeticalSortingZa />,
  },
  {
    name: "New-Old",
    val: "new-old",
    icon: <FcClock />,
  },
  {
    name: "Old-New",
    val: "old-new",
    icon: <FcClock />,
  },
  {
    name: "High-Low",
    val: "sale-hl",
    icon: <FcSalesPerformance />,
  },
  {
    name: "Low-High",
    val: "sale-lh",
    icon: <FcSalesPerformance />,
  },
  {
    name: "High-Low",
    val: "price-hl",
    icon: <MdOutlineAttachMoney />,
  },
  {
    name: "Low-High",
    val: "price-lh",
    icon: <MdOutlineAttachMoney />,
  },
];
