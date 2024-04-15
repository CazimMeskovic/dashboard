import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Slider, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

const table6Data = [
  {
    items: "Sweet 05641",
    tabletypeone: "Special Table",
    tablecapacity: "3-5 Person",
    tabletwo: "Ac, Double Table, Wifi",
    bookdate: "2 Oct - 28 oct ",
  },
  {
    items: "Sweet 05641",
    tabletypeone: "Double Table",
    tablecapacity: "3-5 Person",
    tabletwo: "Ac, Double Table, Wifi",
    bookdate: "3 Oct - 28 oct ",
  },
  {
    items: "Sweet 05641",
    tabletypeone: "Single Table",
    tablecapacity: "1-2 Person",
    tabletwo: "Ac, Double Table, Wifi",
    bookdate: "4 Oct - 28 oct ",
  },
];

export default function TableIdPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue6, setSearchBarValue6] = React.useState("");
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [
      table6ColumnHelper.accessor("items", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-3">
            <Img
              src="images/img_rectangle_4144_48x50.png"
              alt="image_five"
              className="w-[50px] mt-3 ml-[5px] object-cover rounded"
            />
            <div className="flex flex-col items-start justify-start w-[38%] mb-[7px] gap-1">
              <Text as="p">{info?.getValue?.()}</Text>
              <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                #45612
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-6 py-px">
            Items
          </Text>
        ),
        meta: { width: "240px" },
      }),
      table6ColumnHelper.accessor("tabletypeone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Table Type
          </Text>
        ),
        meta: { width: "182px" },
      }),
      table6ColumnHelper.accessor("tablecapacity", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Table Capacity
          </Text>
        ),
        meta: { width: "194px" },
      }),
      table6ColumnHelper.accessor("tabletwo", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Table Faciliticstal{" "}
          </Text>
        ),
        meta: { width: "255px" },
      }),
      table6ColumnHelper.accessor("bookdate", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Text as="p" className="mb-[5px]">
              {info?.getValue?.()}
            </Text>
            <Img src="images/img_frame_13.svg" alt="image_six" className="h-[20px] w-[20px] mt-4 mb-1" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Book Date
          </Text>
        ),
        meta: { width: "238px" },
      }),
    ];
  }, []);

  return (
    <>
     {/*  <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-row justify-center  bg-white-A700">
        <div className="flex flex-row justify-center items-start w-full">
          <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
            <Img src="images/img_group_18298.svg" alt="image" className="h-[30px] mt-[19px] ml-7 mr-[97px]" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px 7px 7px 30px",
                  color: "#8c8787",
                  fontWeight: 400,
                  fontSize: "16px",
                  gap: "8px",
                },
              }}
              renderExpandIcon={() => (
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
              )}
              className="flex flex-col items-center justify-start w-full mt-[76px]"
            >
              <MenuItem
                icon={
                  <Img src="images/img_circlesfour_blue_gray_400.svg" alt="image_one" className="h-[20px] w-[20px]" />
                }
              >
                Dashboard
              </MenuItem>
              <SubMenu
                label={
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Img src="images/img_frame_17.svg" alt="rocketlaunch" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p">
                      Orders
                    </Text>
                  </div>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                label={
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Img src="images/img_frame_18.svg" alt="image_two" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p">
                      Menus
                    </Text>
                  </div>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                label={
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Img src="images/img_frame_19.svg" alt="vector_one" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p">
                      Customer
                    </Text>
                  </div>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <MenuItem icon={<Img src="images/img_frame_20.svg" alt="vector_three" className="h-[16px] w-[16px]" />}>
                Analytics
              </MenuItem>
              <SubMenu
                suffix={<div className="h-[24px] w-[24px] rotate-[90deg]" />}
                label={
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Img src="images/img_circlehalf.svg" alt="image_three" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p" className="!text-blue-A200">
                      Table{" "}
                    </Text>
                  </div>
                }
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <MenuItem>Add Table</MenuItem>
                  <MenuItem>Table List</MenuItem>
                  <MenuItem>Table ID</MenuItem>
                </div>
              </SubMenu>
            </Menu>
            <div className="flex flex-col items-start justify-start w-[76%] mt-[140px] mb-[92px] mx-auto">
              <Img src="images/img_group_18692_10.png" alt="image_four" className="w-full object-cover" />
              <Text size="s" as="p" className="mt-[23px] ml-px !font-medium">
                Bistro Restaurant Admin{" "}
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
          </Sidebar>
          <div className="flex flex-col items-center justify-start w-[83%] gap-10">
            <header className="flex justify-center items-center w-full p-[15px] bg-white-A700 shadow-xs">
              <div className="flex flex-row justify-between items-center w-[98%] mb-[5px] ml-[7px]">
                <Input
                  name="search"
                  placeholder="Search here"
                  value={searchBarValue6}
                  onChange={(e) => setSearchBarValue6(e)}
                  suffix={
                    searchBarValue6?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue6("")} height={16} width={16} fillColor="#8c8787ff" />
                    ) : (
                      <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
                    )
                  }
                  className="w-[29%] gap-[35px] border-gray-50"
                />
                <div className="flex flex-row justify-between items-center w-auto">
                  <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                    <Img src="images/img_group_257.svg" />
                  </Button>
                  <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                    <Img src="images/img_group_259.svg" />
                  </Button>
                  <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                </div>
              </div>
            </header>
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <Text size="xl" as="p">
                    Table ID
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Table List /Table ID
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[51px] gap-[35px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-[66%]">
                      <div className="flex flex-row justify-center w-full p-3 bg-white-A700 shadow-md rounded-[10px]">
                        <div className="flex flex-col items-center justify-start w-full mt-[11px] mb-[18px] gap-[29px]">
                          <div className="flex flex-col items-start justify-start w-[98%] gap-3.5">
                            <Text size="lg" as="p" className="!font-medium">
                              Current Booking
                            </Text>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center w-[55%] gap-7">
                                <div className="flex flex-row justify-start items-center w-[64%] gap-2.5">
                                  <Button size="2xl" shape="circle" className="w-[60px]">
                                    <Img src="images/img_mdi_shield_key_outline.svg" />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start w-[71%] gap-[11px]">
                                    <Text size="lg" as="p" className="!text-blue-A200 !font-medium">
                                      Booking ID #01236556
                                    </Text>
                                    <Text size="lg" as="p">
                                      Queen Table
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[29%] gap-2.5">
                                  <Text size="lg" as="p" className="!font-medium">
                                    Table Capacity
                                  </Text>
                                  <Text size="lg" as="p" className="ml-[3px]">
                                    3-5 Person
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start gap-3.5">
                                <Text as="p">Table Type</Text>
                                <Text size="lg" as="p">
                                  Spcial table
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start gap-3">
                                <Text size="lg" as="p" className="!font-medium">
                                  Date Book
                                </Text>
                                <Text size="lg" as="p">
                                  2 Oct - 28 oct{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full gap-4">
                            <Text size="lg" as="p" className="ml-2 !font-medium">
                              Table Facilitics
                            </Text>
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 6 } }}
                              disableDotsControls
                              activeIndex={sliderState}
                              onSlideChanged={(e) => {
                                setSliderState(e?.item);
                              }}
                              ref={sliderRef}
                              className="w-full"
                              items={[...Array(18)].map(() => (
                                <React.Fragment key={Math.random()}>
                                  <Img
                                    src="images/img_rectangle_4146.png"
                                    alt="image"
                                    className="mx-2.5 object-cover rounded"
                                  />
                                </React.Fragment>
                              ))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full pt-[30px]">
                    <ReactTable
                      size="md"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "" }}
                      rowDataProps={{ className: "" }}
                      className="w-[1109px] bg-white-A700 shadow-md rounded-[15px]"
                      columns={table6Columns}
                      data={table6Data}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-[30px]">
                  <Text as="p" className="!font-poppins text-center">
                    Dispalying 10 Out of 250
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
                    <Text as="p" className="text-center">
                      10-250
                    </Text>
                    <div className="flex flex-row justify-start w-[49%]">
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] z-[1]">
                        <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_white_a700.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                        <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_blue_a200.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
