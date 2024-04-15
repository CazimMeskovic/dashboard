import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
/* import Sidebar2 from "../../components/Sidebar2"; */
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table4Data = [
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692313",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692318",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692312",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692789",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  { productid: "#46569233", productname: "Sweet cheezy pizza ", quantity: "6957X", satus: "In Stock", price: "$56.12" },
  {
    productid: "#465692378",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692336",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
];

export default function MenuListPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("productid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Product ID
          </Text>
        ),
        meta: { width: "153px" },
      }),
      table4ColumnHelper.accessor("productname", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-row justify-start items-center w-[54%] mt-2.5 gap-4">
              <Img src="images/img_rectangle_4144_9.png" alt="image_five" className="w-[40px] object-cover rounded" />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[5px]">
                <Text as="p">{info?.getValue?.()}</Text>
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
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Product Name
          </Text>
        ),
        meta: { width: "381px" },
      }),
      table4ColumnHelper.accessor("quantity", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Quantity
          </Text>
        ),
        meta: { width: "233px" },
      }),
      table4ColumnHelper.accessor("satus", {
        cell: (info) => (
          <Text as="p" className="!text-green-500">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus
          </Text>
        ),
        meta: { width: "225px" },
      }),
      table4ColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "44px" },
      }),
    ];
  }, []);

  return (
    <>
      {/*  <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-row   bg-white-A700">
        <div className="flex flex-row  w-full">
          {/*   <Sidebar2 className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" /> */}
          <div className="flex flex-col items-center justify-start w-[95%] gap-9">
            {/*  <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" /> */}
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Menu List
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Menu / Menu List
                    </Text>
                  </div>
                  <SelectBox
                    indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                    name="today"
                    placeholder="Today"
                    options={dropDownOptions}
                    className="w-[9%] gap-px border-blue-A200 border border-solid"
                  />
                </div>
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="md"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[1036px] mx-[11px]"
                    columns={table4Columns}
                    data={table4Data}
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-[15px]">
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
