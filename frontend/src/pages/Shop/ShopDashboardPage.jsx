import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import DashboardHero from "../../components/Shop/DashboardHero";

const ShopDashboardPage = () => {
  return (
        <div>
          <DashboardHeader />
          <div className="flex justify-between w-full bg-blue-100">
          <div className="w-[250px] sticky top-0 h-screen overflow-y-auto">
              <DashboardSideBar active={1} />
            </div>
            
            <DashboardHero />
          </div>
        </div>
  );
};

export default ShopDashboardPage;
