import React, { useState } from "react";
import { Text, Img } from "./..";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaBars } from 'react-icons/fa';

export default function Sidebar1({ ...props }) {
  const [closeSidebar, setCloseSidebar] = useState(false);

  const handleSidebar = () => {
    setCloseSidebar(!closeSidebar);
  };

  return (
    <div className="flex flex-row pb-[68px] bg-gray-50">
      {!closeSidebar ? (
        <Sidebar
          width="252px !important"
          className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto"
        >
          <div>
            <button onClick={handleSidebar} className="right-2 top-2 absolute">
              X
            </button>
          </div>
          <Img src={logo} alt="image" className="h-[50px] mt-6 ml-7 mr-[97px]" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 28px",
                width: "100%",
                color: "#8c8787",
                fontWeight: 400,
                fontSize: "16px",
                gap: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#438ffe",
                  fontWeight: "500 !important",
                  backgroundColor: "#edf5ff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] cursor-pointer" />
            )}
            className="flex flex-col items-center justify-start w-full mt-[65px]"
          >
            <MenuItem icon={<Img src="images/img_circlesfour.svg" alt="image_one" className="h-[20px] w-[20px]" />}>
              <Link to="/dashboard" >Dashboard</Link>

            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_17.svg" alt="image_two" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Orders
                  </Text>
                </div>
              }
            >
              {/*   <MenuItem>Submenu Item</MenuItem> */}
              <MenuItem><Link to="orderlist" >Order 1</Link></MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_18.svg" alt="image_three" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Menus
                  </Text>
                </div>
              }
            >
              {/* <MenuItem>Submenu Item</MenuItem> */}
              <MenuItem><Link to="menulist" >Meny 1</Link></MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_19.svg" alt="image_four" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Customer
                  </Text>
                </div>
              }
            >
              {/*  <MenuItem>Submenu Item</MenuItem>  */}
              <MenuItem><Link to="customer" >Customer 1</Link></MenuItem>
              <MenuItem><Link to="customer" >Customer 2</Link></MenuItem>

            </SubMenu>
            <MenuItem icon={<Img src="images/img_frame_20.svg" alt="image_five" className="h-[20px] w-[20px]" />}>

              <Link to="analytics" >Analitix 1</Link>
            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_21.svg" alt="image_six" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Table{" "}
                  </Text>
                </div>
              }
            >
              {/*  <MenuItem>Submenu Item</MenuItem> */}
              <MenuItem><Link to="tablelist" >Table 1</Link></MenuItem>
            </SubMenu>

            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_21.svg" alt="image_six" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Grafix{" "}
                  </Text>
                </div>
              }
            >
              {/*  <MenuItem>Submenu Item</MenuItem> */}
              <MenuItem><Link to="DashboardOle" >Grafix 1</Link></MenuItem>
            </SubMenu>

          </Menu>
          <div className="flex flex-col items-start justify-start w-[76%] mt-[276px] mb-[84px] mx-auto">
            <Img src="https://marvel-b1-cdn.bc0a.com/f00000000283357/web-assets.domo.com/blog/wp-content/uploads/2022/09/image-1-63.png"
              alt="image_seven" className="w-full object-cover" />
            <Text size="s" as="p" className="mt-[23px] ml-px !font-medium">
              Cazim's Dashboard{" "}
            </Text>
            <Text size="xs" as="p" className="mt-1.5 ml-px">
              2021 All Rights
            </Text>
            <div className="flex flex-row justify-start mt-[5px] gap-0.5">
              <Text size="xs" as="p">
                Made with
              </Text>
              <Img src="images/img_heart.svg" alt="heart_one" className="h-[12px]" />
              <Text size="xs" as="p">
                by Bistro
              </Text>
            </div>
          </div>
        </Sidebar>) : (
        <button onClick={handleSidebar}>  <FaBars className="h-8 w-16 pt-3 " /> </button>
      )}

    </div>

  );
}
