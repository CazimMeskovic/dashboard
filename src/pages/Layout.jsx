import React from 'react'
import { Outlet } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import Sidebar1 from '../components/Sidebar1';
import Header from "../components/Header";
/* import DashboardOle from './DashboardOle'; */

export default function Layout() {
  return (
    <div className='flex  '>

      <div>
        <Sidebar1 />
      </div>

      <div className='flex flex-col w-full bg-slate-300  ' >
        <Header />

        {/*    <DashboardOle /> */}


        <Outlet />
      </div>
    </div>
  )
}
