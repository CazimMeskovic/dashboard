import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
import { Outlet } from "react-router-dom";
import AnalyticsPage from "pages/Analytics";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table2Data = [
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Kathryn Murphy",
    location: "35 Station Road London",
    totalspent: "$83.46",
    lastorder: "$12.3",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Kathryn Murphy",
    location: "35 Station Road London",
    totalspent: "$83.46",
    lastorder: "$12.3",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Kristin Watson",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$45.36",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Darrell Steward",
    location: "35 Station Road London",
    totalspent: "$87.46",
    lastorder: "$8.36",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Jenny Wilson",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$71.56",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Courtney Henry",
    location: "35 Station Road London",
    totalspent: "$90.46",
    lastorder: "$12.59",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Annette Black",
    location: "35 Station Road London",
    totalspent: "$12.46",
    lastorder: "$78.12\n\n",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Eleanor Pena",
    location: "35 Station Road London",
    totalspent: "$92.46",
    lastorder: "$78.32\n\n",
  },
  {
    orderid: "#01236556",
    date: "23 June 2020, 12:42 AM",
    customertwo: "Wade Warren",
    location: "35 Station Road London",
    totalspent: "$32.46",
    lastorder: "$78.6",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
];

export default function CustomerPage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("orderid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Order ID{" "}
          </Text>
        ),
        meta: { width: "110px" },
      }),
      table2ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Date
          </Text>
        ),
        meta: { width: "210px" },
      }),
      table2ColumnHelper.accessor("customertwo", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Customer
          </Text>
        ),
        meta: { width: "170px" },
      }),
      table2ColumnHelper.accessor("location", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Location
          </Text>
        ),
        meta: { width: "237px" },
      }),
      table2ColumnHelper.accessor("totalspent", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Total Spent
          </Text>
        ),
        meta: { width: "141px" },
      }),
      table2ColumnHelper.accessor("lastorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Text as="p" className="mb-px">
              {info?.getValue?.()}
            </Text>
            <Img src="images/img_frame_13.svg" alt="image_five" className="h-[20px] w-[20px] mt-1.5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Last Order
          </Text>
        ),
        meta: { width: "194px" },
      }),
    ];
  }, []);

  return (
    <>
     {/*  <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
     {/*  <div className="flex flex-row justify-center items-start w-full bg-white-A700"> */}
      <div className="flex flex-row   bg-white-A700">
      {/*   <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" /> */}
        <div className="flex flex-col items-center justify-start w-[95%] gap-9">
        {/*   <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" /> */}
          <div className="flex flex-col items-center justify-start w-[94%] gap-[35px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <Text size="xl" as="p">
                  Customer
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  Customer / Reviwe
                </Text>
              </div>
              <SelectBox
                indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                getOptionLabel={(e) => (
                  <>
                    <div className="flex items-center">
                      <Img src="images/img_mifilter.svg" alt="mi:filter" />
                      <span>{e.label}</span>
                    </div>
                  </>
                )}
                name="filter"
                placeholder="Filter"
                options={dropDownOptions}
                className="w-[10%] border-blue-A200 border border-solid"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <div className="flex flex-row justify-center w-full p-[23px] bg-white-A700 shadow-md rounded-[15px]">
                <ReactTable
                  size="lg"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  className="w-[1062px] mb-[17px]"
                  columns={table2Columns}
                  data={table2Data}
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
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
      <Outlet />
    </>
  );
}
