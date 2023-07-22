import React from "react";
import { MdProductionQuantityLimits, MdShoppingCart } from "react-icons/md";
import { FaHistory, FaRegCalendarAlt } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <GoDashboard className="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Main Pages"],
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
