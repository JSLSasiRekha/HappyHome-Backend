import React from 'react';
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader';
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import AllOrders from "../../components/Shop/AllOrders";

const ShopAllOrders = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex">
        <div className="w-[230px] sticky top-0 h-screen overflow-y-auto">
          <DashboardSideBar active={2} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <AllOrders />
        </div>
      </div>
    </div>
  );
};

export default ShopAllOrders;
