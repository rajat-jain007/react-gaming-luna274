import { RiLuggageDepositLine, RiLockPasswordFill } from "react-icons/ri";
import { BiMoneyWithdraw, BiTransferAlt, BiSolidReport } from "react-icons/bi";
import { AiOutlineAccountBook } from "react-icons/ai";
import { IoMdGitPullRequest } from "react-icons/io";
import { LuHistory, LuAlignHorizontalSpaceBetween } from "react-icons/lu";
import { GiClick } from "react-icons/gi";
import { FcRules } from "react-icons/fc";

export const navLinks = [
  { id: 1, href: "#home", title: "Home" },
  { id: 2, href: "#about", title: "About Us" },
  { id: 3, href: "#services", title: "Services" },
];

export const DropDownList = [
  { id: 1, items: "Deposit", icon: RiLuggageDepositLine },
  { id: 2, items: "Withdrawal", icon: BiMoneyWithdraw },
  { id: 3, items: "Fund Transfer", icon: BiTransferAlt },
  { id: 4, items: "Change Password", icon: RiLockPasswordFill },
  { id: 5, items: "Account Statement", icon: AiOutlineAccountBook },
  { id: 6, items: "Request", icon: IoMdGitPullRequest },
  { id: 7, items: "Profit Loss Report", icon: BiSolidReport },
  { id: 8, items: "Bet History", icon: LuHistory },
  { id: 9, items: "Unsettle Bet", icon: LuAlignHorizontalSpaceBetween },
  { id: 10, items: "Set Button Values", icon: GiClick },
  { id: 11, items: "Rules", icon: FcRules },
];


