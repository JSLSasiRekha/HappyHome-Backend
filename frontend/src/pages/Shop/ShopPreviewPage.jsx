import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopPreviewPage = () => {
  return (
    <div className={` mx-auto -mt-12 bg-[#dbeafe]`}>
         <div className="w-full 800px:flex py-10 justify-between">
          <div className="800px:w-[25%]  rounded-[4px] shadow-sm 800px:h-[140vh] 800px:sticky top-1 left-0 z-10">
            <ShopInfo isOwner={false} />
          </div>
          <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
            <ShopProfileData isOwner={false} />
          </div>
         </div>
    </div>
  )
}

export default ShopPreviewPage