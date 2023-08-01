import React from "react";
import { MdProductionQuantityLimits, MdShoppingCart } from "react-icons/md";
import { FaHistory, FaRegCalendarAlt,FaWalking } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <AiFillDashboard className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Main Pages"],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Walk In",
  //   to: "/add-walk-in",
  //   icon: <FaWalking className="c-sidebar-nav-icon" />,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Add Stylist",
    to: "/add-stylist",
    icon: <BsPersonAdd className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Services",
    to: "/add-products",
    icon: <MdProductionQuantityLimits className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Appointments",
    to: "/appointment",
    icon: <FaRegCalendarAlt className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "History",
    to: "/history",
    icon: <FaHistory className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "My Products",
    to: "/my-products",
    icon: <MdShoppingCart className="c-sidebar-nav-icon" />,
  },
];

export default _nav;
