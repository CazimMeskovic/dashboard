import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, RatingBar, GoogleMap } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
/* import Sidebar4 from "../../components/Sidebar4"; */
import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const table1Data = [
  {
    items: "Sweet cheezy pizza for kids \nMeal (smail )",
    oty: "1x",
    price: "$12.5",
    totalprice: "$456",
    clear: "images/img_group_18171.svg",
  },
  {
    items: "Sweet cheezy pizza for kids \nMeal (smail )",
    oty: "3x",
    price: "$12.5",
    totalprice: "$456",
    clear: "images/img_group_18171_blue_a200.svg",
  },
  {
    items: "Sweet cheezy pizza for kids \nMeal (smail )",
    oty: "5x",
    price: "$12.5",
    totalprice: "$456",
    clear: "images/img_group_18171.svg",
  },
];

export default function OrderIdPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("items", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-row justify-start items-center w-[85%] mt-4 gap-3.5">
              <Img src="images/img_rectangle_4144_6.png" alt="image_six" className="w-[21%] object-cover rounded" />
              <div className="flex flex-col items-start justify-start w-[74%] gap-1.5">
                <Text as="p" className="leading-4">
                  {info?.getValue?.()}
                </Text>
                <div className="flex flex-row justify-start items-center gap-[7px]">
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#febe42"
                    activeColor="#febe42"
                    size={10}
                    className="flex justify-between w-[74px]"
                  />
                  <Text size="s" as="p" className="!text-orange-300 !font-medium">
                    (45)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Items
          </Text>
        ),
        meta: { width: "285px" },
      }),
      table1ColumnHelper.accessor("oty", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Oty
          </Text>
        ),
        meta: { width: "124px" },
      }),
      table1ColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "106px" },
      }),
      table1ColumnHelper.accessor("totalprice", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Total Price
          </Text>
        ),
        meta: { width: "139px" },
      }),
      table1ColumnHelper.accessor("clear", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <Img src={info?.getValue?.()} alt="image_seven" className="h-[30px] w-[30px] mt-[34px] mb-[17px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Clear
          </Text>
        ),
        meta: { width: "36px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full pb-[53px] bg-white-A700">
        {/*   <Sidebar4 className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" /> */}
        <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
          <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
          <div className="flex flex-col items-start justify-start w-[94%] gap-[34px]">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Text size="xl" as="p">
                Order ID #5552351
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Dashboard / Order Details
              </Text>
            </div>
            <div className="flex flex-row justify-start w-full gap-[29px]">
              <div className="flex flex-col items-center justify-start w-[66%] gap-[30px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-start w-full p-[23px] bg-white-A700 shadow-md rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-[97%] gap-3">
                      <Img src="images/img_group_18804.svg" alt="image_five" className="h-[26px]" />
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <Text size="lg" as="p" className="!font-medium">
                            Order Created
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Thu, 21 jul 2020{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[5px]">
                          <Text size="lg" as="p" className="!font-medium">
                            Payment Succcess
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Thu, 21 jul 2020
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-1.5">
                          <Text size="lg" as="p" className="!font-medium">
                            On Delivery
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Thu, 21 jul 2020
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <Text size="lg" as="p" className="!font-medium">
                            Order Delivered
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Thu, 21 jul 2020{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-[25px] bg-white-A700 shadow-md rounded-[15px]">
                  <GoogleMap showMarker={false} className="h-[281px] w-full" />
                </div>
                <div className="flex flex-row justify-center w-full p-5 bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[690px] mt-0.5 mb-[13px]"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] gap-[30px]">
                <div className="h-[479px] w-full relative">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-[17px] left-0 bottom-0 right-0 top-0 p-5 m-auto bg-white-A700 shadow-md absolute rounded-[15px]">
                    <div className="flex flex-col items-center justify-start w-[44%] mt-1.5 gap-[13px]">
                      <Img
                        src="images/img_ellipse_48.png"
                        alt="circleimage_one"
                        className="h-[120px] w-[120px] rounded-[50%]"
                      />
                      <Text size="lg" as="p" className="!font-medium">
                        Darlene Robertson
                      </Text>
                      <div className="flex flex-row justify-center w-[89%]">
                        <Button className="w-full font-medium rounded-[15px]">Customer</Button>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mb-[181px]">
                      <div className="flex flex-row justify-center items-center w-[66%] gap-2.5">
                        <Button size="xl" shape="circle" className="w-[40px]">
                          <Img src="images/img_heroicons_outli.svg" />
                        </Button>
                        <Text as="p" className="w-[76%] !text-blue_gray-400">
                          Parker Rd. 12Allentown, New
                        </Text>
                      </div>
                      <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                        02 Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full bottom-0 right-0 left-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-full pt-4 gap-[15px] bg-gray-100_01">
                      <div className="flex flex-col items-center justify-start w-[90%] gap-2.5">
                        <div className="flex flex-row justify-between items-center w-[99%]">
                          <Text size="lg" as="p" className="!text-blue-A200 !font-medium">
                            Note Order
                          </Text>
                          <Img src="images/img_group_18425.svg" alt="image_twelve" className="h-[16px]" />
                        </div>
                        <Text size="s" as="p" className="!text-blue_gray-400 leading-5">
                          Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it
                          is pain, but because occasionally circumstances occur in which toil{" "}
                        </Text>
                      </div>
                      <Button
                        size="3xl"
                        leftIcon={<Img src="images/img_carbondelivery.svg" alt="carbon:delivery" />}
                        className="w-full gap-[35px] rounded-bl-[15px] rounded-br-[15px] font-medium"
                      >
                        Parker Rd. Allentown, New
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full p-[18px] bg-white-A700 shadow-md rounded-[15px]">
                  <Text size="lg" as="p" className="mt-[5px] !font-medium">
                    Order Summary
                  </Text>
                  <div className="h-[139px] w-[139px] mt-[17px] shadow-lg relative">
                    <CircularProgressbar
                      strokeWidth={16}
                      value={44}
                      counterClockwise
                      styles={{ trail: { stroke: "#ffa41d" }, path: { strokeLinecap: "square" } }}
                      className="justify-center h-[139px] w-[139px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <CircularProgressbar
                      strokeWidth={16}
                      value={22}
                      styles={{
                        trail: { stroke: "#ffa41d" },
                        path: { strokeLinecap: "square", transformOrigin: "center", transform: "rotate(246deg)" },
                      }}
                      className="justify-center h-[139px] w-[139px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[97%] mt-[34px] gap-4">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-center w-[44%]">
                        <div className="flex flex-col items-start justify-start w-full gap-1.5">
                          <Text as="p">Piza (40%)</Text>
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="h-[3px] w-full bg-gray-200 rounded-[1px]" />
                              <div className="h-[3px] w-[77%] mt-[-3px] bg-red-500 rounded-[1px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[44%] gap-1.5">
                        <Text as="p">Dessert (40%)</Text>
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="h-[3px] w-full bg-gray-200 rounded-[1px]" />
                            <div className="h-[3px] w-[77%] mt-[-3px] bg-orange-400 rounded-[1px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[44%] gap-1.5">
                      <Text as="p">juice (20%)</Text>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="h-[3px] w-full bg-gray-200 rounded-[1px]" />
                          <div className="h-[3px] w-[77%] mt-[-3px] bg-blue-300 rounded-[1px]" />
                        </div>
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
