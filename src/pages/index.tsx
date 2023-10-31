import React, { ReactNode } from 'react';
import dynamic from "next/dynamic";
const RootLayouts = dynamic(() => import("@/components/Layout/RootLayouts"));
const HeadTag = dynamic(() => import('@/Helpers/HeadTag/HeadTag'));
export default function Home()
{
   return (
   <main>
       <HeadTag title='Home' descriptionContent='Welcome to Admin page'></HeadTag>
   </main>
  );
}

Home.getLayout = function getLayout(page: ReactNode)
{
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
};
