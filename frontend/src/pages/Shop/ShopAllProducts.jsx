import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllProducts from "../../components/Shop/AllProducts";

const ShopAllProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full bg-blue-100">
        <div className="w-[250px] sticky top-0 h-screen overflow-y-auto">
              <DashboardSideBar active={3} />
            </div>
            <div className="flex-1 overflow-y-auto">
                <AllProducts />
            </div>
          </div>
    </div>
  )
}

export default ShopAllProducts