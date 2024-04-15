import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, RatingBar, SelectBox } from "../../components";
import Header from "../../components/Header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AnalyticsPage() {
  return (
    <>
     {/*  <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-row   bg-white-A700">
     
        <div className="flex flex-col items-center justify-start w-[95%] gap-[38px]">
          {/* <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" /> */}
          <div className="flex flex-col items-center justify-start w-[94%] gap-[34px]">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col items-start justify-start gap-1">
                <Text size="xl" as="p">
                  Analytics
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  Analytics / Analytics
                </Text>
              </div>
              <SelectBox
                indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                name="today"
                placeholder="Today"
                options={dropDownOptions}
                className="w-[9%] mt-2.5 gap-px border-blue-A200 border border-solid"
              />
            </div>
            <div className="flex flex-row justify-start w-full gap-[30px]">
              <div className="flex flex-row justify-start w-[66%]">
                <div className="flex flex-row justify-end w-full p-1.5 bg-white-A700 shadow-md rounded-[15px]">
                  <Tabs
                    className="flex flex-col items-center justify-start w-[99%] gap-6 my-6"
                    selectedTabClassName="bg-blue-A200 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <div className="flex flex-row justify-between items-center w-[99%]">
                      <Text size="lg" as="p" className="!font-medium">
                        Most Favorites Item{" "}
                      </Text>
                      <TabList className="flex flex-row justify-center items-start gap-[-18px] p-[7px] border-blue-50 border border-solid rounded-[15px]">
                        <Tab className="h-[12px] ml-2.5 text-gray-700_01 text-[10px] font-normal">All</Tab>
                        <Tab className="text-white-A700 text-[10px] font-normal">Pizza</Tab>
                        <Tab className="text-gray-700_01 text-[10px] font-normal z-[1]">Drink</Tab>
                        <Tab className="mt-1.5 text-white-A700 text-[10px] font-normal">Month</Tab>
                        <Tab className="mr-[11px] text-gray-700_01 text-[10px] font-normal">Dessert</Tab>
                      </TabList>
                    </div>
                    {[...Array(5)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="items-center w-full absolute">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                            <div className="justify-center w-full gap-[54px] grid-cols-2 grid">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_5.png"
                                    alt="sweet_cheezy"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Sweet cheezy pizza </Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="335_total_sales"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_6.png"
                                    alt="image"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Cheesy desert kids</Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="image_one"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="h-px w-full bg-blue-50" />
                              <div className="h-px w-full bg-blue-50" />
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_7.png"
                                    alt="image"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Beezy pizza for kids</Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="image_one"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_8.png"
                                    alt="image"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Sweet cheezy pizza </Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="image_one"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="h-px w-full bg-blue-50" />
                              <div className="h-px w-full bg-blue-50" />
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_9.png"
                                    alt="image"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Juice for kids</Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="image_one"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[13px]">
                                  <Img
                                    src="images/img_rectangle_4126_10.png"
                                    alt="image"
                                    className="w-[60px] object-cover rounded-sm"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                                    <Text as="p">Sweet cheezy pizza </Text>
                                    <div className="flex flex-row justify-start items-center gap-2.5">
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        activeColor="#438ffe"
                                        size={10}
                                        className="flex justify-between w-[66px]"
                                      />
                                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                                        (Review 4.5 )
                                      </Text>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-[5px]">
                                      <Img
                                        src="images/img_frame_14.svg"
                                        alt="image_one"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text size="s" as="p" className="!font-medium">
                                        3,35 Total Sales
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px]">
                                  <div className="h-[50px] w-[50px] relative">
                                    <CircularProgressbar
                                      strokeWidth={10}
                                      value={51}
                                      styles={{
                                        trail: { stroke: "#c4c4c4" },
                                        path: {
                                          strokeLinecap: "square",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                        },
                                      }}
                                      className="justify-center h-[50px] w-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="s"
                                      as="p"
                                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium absolute"
                                    >
                                      45%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-[98%]">
                              <Text size="s" as="p" className="mt-px !font-poppins text-center !font-medium">
                                Dispalying 6 Out of 25
                              </Text>
                              <div className="flex flex-row justify-start items-center gap-[5px]">
                                <a href="#">
                                  <Text as="p" className="!text-blue-A200 !font-normal">
                                    Viwe All
                                  </Text>
                                </a>
                                <Img src="images/img_arrow_1.svg" alt="arrowone_one" className="h-px" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%]">
                <div className="flex flex-col items-center justify-center w-full p-5 bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-col items-start justify-start w-[97%] mt-[5px] mb-2 gap-[22px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Daily Trending Menus
                    </Text>
                    <div className="flex flex-col w-full gap-[11px]">
                      <div className="flex flex-row justify-start items-center w-[99%] mr-0.5 gap-3.5">
                        <Img
                          src="images/img_rectangle_4144_9.png"
                          alt="image"
                          className="w-[17%] object-cover rounded"
                        />
                        <div className="flex flex-col items-center justify-start w-[79%] gap-[7px]">
                          <div className="flex flex-row justify-center items-start w-full gap-[41px]">
                            <Text as="p" className="w-[77%] mt-px leading-4">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text as="p" className="!text-blue-A200">
                              #1
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-center">
                              <Heading as="h1">$5.6</Heading>
                            </div>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-[296px] h-px bg-blue-50" />
                      <div className="flex flex-row justify-start items-center w-full gap-3.5">
                        <Img
                          src="images/img_rectangle_4144_10.png"
                          alt="image"
                          className="w-[17%] object-cover rounded"
                        />
                        <div className="flex flex-col items-center justify-start w-[79%] gap-[7px]">
                          <div className="flex flex-row justify-center items-start w-full gap-[41px]">
                            <Text as="p" className="w-[76%] mt-px leading-4">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text as="p" className="h-[17px] !text-blue-A200">
                              #2
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[99%]">
                            <Heading as="h2">$5.6</Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-[296px] h-px bg-blue-50" />
                      <div className="flex flex-row justify-start items-center w-full gap-3.5">
                        <Img
                          src="images/img_rectangle_4144_11.png"
                          alt="image"
                          className="w-[17%] object-cover rounded"
                        />
                        <div className="flex flex-col items-center justify-start w-[79%] gap-[7px]">
                          <div className="flex flex-row justify-center items-start w-full gap-[42px]">
                            <Text as="p" className="w-[75%] mt-px leading-4">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text as="p" className="h-[17px] !text-blue-A200">
                              #3
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[99%]">
                            <Heading as="h3">$5.6</Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-[296px] h-px bg-blue-50" />
                      <div className="flex flex-row justify-start items-center w-full gap-3.5">
                        <Img
                          src="images/img_rectangle_4144_12.png"
                          alt="image"
                          className="w-[17%] object-cover rounded"
                        />
                        <div className="flex flex-col items-center justify-start w-[79%] gap-[7px]">
                          <div className="flex flex-row justify-center items-start w-full gap-[41px]">
                            <Text as="p" className="w-[76%] mt-px leading-4">
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text as="p" className="h-[17px] !text-blue-A200">
                              #4
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[99%]">
                            <Heading as="h4">$5.6</Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                              Order 56x{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start w-full gap-[30px]">
              <div className="flex flex-row justify-start w-[49%]">
                <div className="flex flex-row justify-center w-full p-[18px] bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Most Selling Items
                      </Text>
                      <TabList className="flex flex-row justify-between w-auto gap-[27px] p-[7px] border-blue-50 border border-solid rounded-[15px]">
                        <Tab className="ml-[3px] text-gray-700_01 text-[10px] font-normal">Today</Tab>
                        <Tab className="text-white-A700 text-[10px] font-normal">Month</Tab>
                        <Tab className="mr-[3px] text-gray-700_01 text-[10px] font-normal">Weekly</Tab>
                      </TabList>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                      <div className="flex flex-col w-full gap-3">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-between items-center w-[71%]">
                            <div className="flex flex-row justify-start items-center w-[63%] gap-4">
                              <Img
                                src="images/img_rectangle_4127.png"
                                alt="image"
                                className="w-[50px] object-cover rounded-sm"
                              />
                              <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                                <Text as="p">Sweet cheezy pizza kids</Text>
                                <Text size="xs" as="p" className="!text-blue-A200 !font-medium">
                                  BURGER
                                </Text>
                                <div className="flex flex-row justify-start gap-[11px]">
                                  <Text size="s" as="p" className="mb-px !text-blue_gray-400">
                                    Serves for 4 Person
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400">
                                    4 min
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Heading size="md" as="h5">
                              $12.56
                              <br />
                            </Heading>
                          </div>
                          <Img src="images/img_frame_13.svg" alt="image_one" className="h-[20px] w-[20px]" />
                        </div>
                        <div className="w-[501px] h-px bg-blue-50" />
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-between items-center w-[71%]">
                            <div className="flex flex-row justify-start items-center w-[63%] gap-4">
                              <Img
                                src="images/img_rectangle_4127_50x50.png"
                                alt="image"
                                className="w-[50px] object-cover rounded-sm"
                              />
                              <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                                <Text as="p">Sweet cheezy pizza kids</Text>
                                <Text size="xs" as="p" className="!text-blue-A200 !font-medium">
                                  BURGER
                                </Text>
                                <div className="flex flex-row justify-start gap-[11px]">
                                  <Text size="s" as="p" className="mb-px !text-blue_gray-400">
                                    Serves for 4 Person
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400">
                                    4 min
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Heading size="md" as="h6">
                              $12.56
                              <br />
                            </Heading>
                          </div>
                          <Img src="images/img_frame_13.svg" alt="image_one" className="h-[20px] w-[20px]" />
                        </div>
                        <div className="w-[501px] h-px bg-blue-50" />
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-between items-center w-[71%]">
                            <div className="flex flex-row justify-start items-center w-[63%] gap-4">
                              <Img
                                src="images/img_rectangle_4127_1.png"
                                alt="image"
                                className="w-[50px] object-cover rounded-sm"
                              />
                              <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                                <Text as="p">Sweet cheezy pizza kids</Text>
                                <Text size="xs" as="p" className="!text-blue-A200 !font-medium">
                                  BURGER
                                </Text>
                                <div className="flex flex-row justify-start gap-[11px]">
                                  <Text size="s" as="p" className="mb-px !text-blue_gray-400">
                                    Serves for 4 Person
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400">
                                    4 min
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Heading size="md" as="h6">
                              $12.56
                              <br />
                            </Heading>
                          </div>
                          <Img src="images/img_frame_13.svg" alt="image_one" className="h-[20px] w-[20px]" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text size="s" as="p" className="mt-px !font-poppins text-center !font-medium">
                          Dispalying 3 Out of 25
                        </Text>
                        <div className="flex flex-row justify-start items-center gap-[5px]">
                          <a href="#">
                            <Text as="p" className="!text-blue-A200 !font-normal">
                              Viwe All
                            </Text>
                          </a>
                          <Img src="images/img_arrow_1.svg" alt="arrowone_three" className="h-px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[49%]">
                <div className="flex flex-row justify-center w-full p-[18px] bg-white-A700 shadow-md rounded-[15px]">
                  <Tabs
                    className="flex flex-col items-center justify-start w-full gap-6 my-[7px]"
                    selectedTabClassName="!text-white-A700 bg-blue-A200 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Customer Map
                      </Text>
                      <TabList className="flex flex-row justify-center gap-7 p-[5px] border-blue-50 border border-solid rounded-[15px]">
                        <Tab className="ml-1 text-gray-700_01 text-xs font-normal">Today</Tab>
                        <Tab className="text-white-A700 text-xs font-normal">Month</Tab>
                        <Tab className="mr-1 text-gray-700_01 text-xs font-normal">Weekly</Tab>
                      </TabList>
                    </div>
                    {[...Array(3)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="justify-center w-full absolute">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-row justify-start items-start w-full gap-3">
                                <div className="flex flex-col items-start justify-start w-[5%] mt-1.5 gap-[7px]">
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    500
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    400
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    300
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    200
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    100
                                  </Text>
                                  <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                    90
                                  </Text>
                                  <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                    70
                                  </Text>
                                  <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                    60
                                  </Text>
                                  <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                    50
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start w-[94%]">
                                  <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                    <div className="h-[202px] w-[99%] relative">
                                      <div className="flex flex-col items-end justify-start w-[99%] top-0 right-0 left-0 m-auto absolute">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="flex flex-col items-start justify-start w-full">
                                            <div className="h-[117px] w-[3%] ml-11 rounded-tr-[50%] rounded-tl-[50%] z-[1] bg-blue-A200" />
                                            <div className="flex flex-row justify-start items-center mt-[-74px]">
                                              <Img
                                                src="images/img_group_36.svg"
                                                alt="image_five"
                                                className="h-[122px] z-[1]"
                                              />
                                              <div className="h-px w-full ml-[-10px] bg-blue-50" />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_group_36.svg"
                                            alt="image_six"
                                            className="h-[100px] mt-[-90px] ml-[133px]"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_group_36.svg"
                                          alt="image_seven"
                                          className="h-[100px] mt-[-99px] mr-[43px]"
                                        />
                                      </div>
                                      <div className="flex flex-row justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                        <div className="h-px w-[99%] bg-blue-50" />
                                        <Img
                                          src="images/img_group_36.svg"
                                          alt="image_eight"
                                          className="h-[189px] ml-[-6px]"
                                        />
                                      </div>
                                      <div className="h-px w-[99%] bottom-[13%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                      <div className="h-px w-[99%] bottom-[24%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                      <div className="flex flex-col items-start justify-start w-[99%] bottom-[24%] right-0 left-0 m-auto absolute">
                                        <div className="h-px w-full z-[1] bg-blue-50" />
                                        <div className="h-[24px] w-[3%] ml-[46px] rounded-tr-[50%] rounded-tl-[50%] bg-orange-300_01" />
                                      </div>
                                      <div className="flex flex-col items-end justify-start w-[99%] top-[10%] right-0 left-0 m-auto absolute">
                                        <Img
                                          src="images/img_group_36.svg"
                                          alt="image_nine"
                                          className="h-[140px] mr-[178px] z-[1]"
                                        />
                                        <div className="flex flex-col items-end justify-start w-full mt-[-77px]">
                                          <div className="h-px w-full bg-blue-50" />
                                          <Img
                                            src="images/img_group_43.svg"
                                            alt="image_ten"
                                            className="h-[89px] mr-[132px]"
                                          />
                                        </div>
                                      </div>
                                      <div className="h-px w-[99%] top-[19%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                      <div className="h-px w-[99%] top-[30%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                      <div className="h-px w-[99%] top-[7%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_eleven"
                                        className="h-[189px] bottom-0 left-[20%] m-auto absolute"
                                      />
                                      <Img
                                        src="images/img_group_43.svg"
                                        alt="image_twelve"
                                        className="h-[61px] bottom-[24%] left-[39%] m-auto absolute"
                                      />
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_thirteen"
                                        className="justify-center h-[123px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_fourteen"
                                        className="h-[140px] right-[19%] top-[12%] m-auto absolute"
                                      />
                                    </div>
                                    <div className="flex flex-row justify-between w-full">
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Jan
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Feb
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Mar
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Apr
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        May
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Jun
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        July
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Aug
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Sep
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Oct
                                      </Text>
                                      <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                        Nov
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
