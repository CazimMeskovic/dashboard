import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from "react";
/* import { useRoutes } from "react-router-dom"; */

import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import OrderList from "pages/OrderList";
import OrderId from "pages/OrderId";
import Customer from "pages/Customer";
import Review from "pages/Review";
import Analytics from "pages/Analytics";
import AddMenu from "pages/AddMenu";
import MenuList from "pages/MenuList";
import Categories from "pages/Categories";
import AddTable from "pages/AddTable";
import TableList from "pages/TableList";
import TableId from "pages/TableId";
import DashboardOle from 'pages/DashboardOle';

import Layout from './pages/Layout';



const ProjectRoutes = () => {
  const Ole = {
    ol: 30,
    ol1: 100,
    ol2: 200,
    ol3: 300
  }
  const TotalRevenev = 100
  const TotalCustomer = 200
  const Tm = 500

  const tableData = [
    {
      orderidone: "#01236556",
      date: "21 June 2020, 12:42 AM",
      customerone: "Kathryn Murphy",
      location: "35 Station Road London",
      amount: "$83.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "21 June 2020, 12:42 AM",
      customerone: "Kathryn Murphy",
      location: "35 Station Road London",
      amount: "$83.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "24 June 2020, 12:42 AM",
      customerone: "Kristin Watson",
      location: "35 Station Road London",
      amount: "$82.46\t",
      satusorder: "On Delivery",
    },
    {
      orderidone: "#01236556",
      date: "21 June 2020, 12:42 AM",
      customerone: "Darrell Steward",
      location: "35 Station Road London",
      amount: "$87.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "24 June 2020, 12:42 AM",
      customerone: "Jenny Wilson",
      location: "35 Station Road London",
      amount: "$82.46",
      satusorder: "On Delivery",
    },
    {
      orderidone: "#01236556",
      date: "24 June 2020, 12:42 AM",
      customerone: "Courtney Henry",
      location: "35 Station Road London",
      amount: "$90.46",
      satusorder: "On Delivery",
    },
    {
      orderidone: "#01236556",
      date: "21 June 2020, 12:42 AM",
      customerone: "Annette Black",
      location: "35 Station Road London",
      amount: "$12.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "21 June 2020, 12:42 AM",
      customerone: "Eleanor Pena",
      location: "35 Station Road London",
      amount: "$92.46",
      satusorder: "On Delivery",
    },
    {
      orderidone: "#01236556",
      date: "23 June 2020, 12:42 AM",
      customerone: "Wade Warren",
      location: "35 Station Road London",
      amount: "$32.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "218 June 2020, 12:42 AM",
      customerone: "Brooklyn Simmons",
      location: "35 Station Road London",
      amount: "$82.46",
      satusorder: "\tNew Order",
    },
    {
      orderidone: "#01236556",
      date: "218 June 2020, 12:42 AM",
      customerone: "Brooklyn Simmons",
      location: "35 Station Road London",
      amount: "$82.46",
      satusorder: "\tNew Order",
    },
  ];

  return (
    <Router>
      <Routes>
        {/*  <Route path="/dhiwise-dashboard" element={<Home />} />  */}

        <Route path="/" element={<Layout />} >

          <Route path="/dashboard" element={<Dashboard {...Ole} />} />

          <Route path="/orderlist" element={<OrderList tableData={tableData} />} />
          <Route path="/orderid" element={<OrderId />} />
          <Route path="/customer" element={<Customer />} />

          <Route path="/review" element={<Review />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/menulist" element={<MenuList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addtable" element={<AddTable />} />
          <Route path="/tablelist" element={<TableList />} />
          <Route path="/tableid" element={<TableId />} />
          {/*  <div className='grid grid-cols-2 gap-4' > */}
          <Route path="/DashboardOle" element={<DashboardOle />} />
          {/*  </div> */}

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;