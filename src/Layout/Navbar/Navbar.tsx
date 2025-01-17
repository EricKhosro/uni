import { useState } from "react";
import Item from "./Item";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardActiveIcon from "Assets/Icons/DashboardActiveIcon";
import DashboardDeactiveIcon from "Assets/Icons/DashboardDeactiveIcon";
import SellerPageActive from "Assets/Icons/SellerPageActive";
import SellerPageDeactive from "Assets/Icons/SellerPageDeactive";
import ServicesPageActive from "Assets/Icons/ServicesPageActive";
import ServicesPageDeactive from "Assets/Icons/ServicesPageDeactive";
import CustomerActiveIcon from "Assets/Icons/CustomerActiveIcon";
import CustomerDeactiveIcon from "Assets/Icons/CustomerDeactiveIcon";
import BillActive from "Assets/Icons/BillActive";
import BillDeactive from "Assets/Icons/BillDeactive";
import LogoutIcon from "Assets/Icons/LogoutIcon";
import FullScreenLoading from "Components/Loading/FullScreenLoading";

const Navbar = () => {
  const location = useLocation();

  const checkIsActive = (url: string) => {
    if (location.pathname.slice(1).includes(url)) return true;
    return false;
  };

  const getImageSrc = (url: string, isActive: boolean) => {
    switch (url) {
      case "Dashboard": {
        if (isActive) return <DashboardActiveIcon />;
        return <DashboardDeactiveIcon />;
      }

      case "Courses": {
        if (isActive) return <ServicesPageActive />;
        return <ServicesPageDeactive />;
      }

      case "Tutors": {
        if (isActive) return <CustomerActiveIcon />;
        return <CustomerDeactiveIcon />;
      }

      case "Schedule": {
        if (isActive) return <BillActive />;
        return <BillDeactive />;
      }

      default:
        return <DashboardDeactiveIcon />;
    }
  };

  return (
    <div className="fixed w-60 bg-white h-screen pt-12 flex flex-col justify-start items-start gap-2 z-[99999999]">
      <Item
        title="پیشخوان"
        checkIsActive={checkIsActive}
        url="Dashboard"
        Icon={getImageSrc}
      />
      <Item
        title="استاد ها"
        checkIsActive={checkIsActive}
        url="Tutors"
        Icon={getImageSrc}
      />
      <Item
        title="دروس"
        checkIsActive={checkIsActive}
        url="Courses"
        Icon={getImageSrc}
      />
      <Item
        title="برنامه"
        checkIsActive={checkIsActive}
        url="Schedule"
        Icon={getImageSrc}
      />
    </div>
  );
};

export default Navbar;
