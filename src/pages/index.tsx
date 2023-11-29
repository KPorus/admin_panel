import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
const RootLayouts = dynamic(() => import("@/components/Layout/RootLayouts"));
const HeadTag = dynamic(() => import("@/Helpers/HeadTag/HeadTag"));
const Homepage = dynamic(() => import("@/components/Home/Homepage"));
const Date_Picker = dynamic(() => import("@/components/DashBoard/DatePicker/Date_Picker"));
export default function Home()
{
  return (
    <main>
      <HeadTag
        title='Home'
        descriptionContent='Welcome to Admin page'></HeadTag>
      <div className=" flex justify-between mt-3">
        <div className='text-start p-3 uppercase text-slate-900 font-medium'>
          Welcome admin
        </div>
        <div className="text-start uppercase text-slate-900 font-medium"><Date_Picker></Date_Picker></div>
      </div>
      <Homepage></Homepage>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactNode)
{
  return <RootLayouts>{page}</RootLayouts>;
};
