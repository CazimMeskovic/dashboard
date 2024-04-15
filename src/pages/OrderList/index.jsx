import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
/* import Sidebar4 from "../../components/Sidebar4"; */
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option111", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


export default function OrderListPage({ tableData }) {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("orderidone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Order ID{" "}
          </Text>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Date
          </Text>
        ),
        meta: { width: "210px" },
      }),
      tableColumnHelper.accessor("customerone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Customer
          </Text>
        ),
        meta: { width: "174px" },
      }),
      tableColumnHelper.accessor("location", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Location
          </Text>
        ),
        meta: { width: "212px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Amount
          </Text>
        ),
        meta: { width: "140px" },
      }),
      tableColumnHelper.accessor("satusorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Button color="blue_50" className="mt-[11px] font-medium min-w-[100px]">
              {info?.getValue?.()}
            </Button>
            <Img src="images/img_frame_13.svg" alt="image_five" className="h-[20px] w-[20px] mb-1.5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus Order
          </Text>
        ),
        meta: { width: "216px" },
      }),
    ];
  }, []);

  return (
    <>
      {/*  <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-row px-10  ">
        {/*   <Sidebar4 className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" /> */}
        <div className="flex flex-col items-center justify-start  w-[95%] gap-[35px]">
          {/*   <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" /> */}
          <div className="flex flex-col items-center justify-start w-[94%] gap-9">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <Text size="xl" as="p">
                  Order List
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  Dashboard / Order List
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[22%] gap-[22px]">
                <SelectBox
                  indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                  name="allstatus"
                  placeholder="All Status"
                  options={dropDownOptions}
                  className="w-[49%] gap-px border-blue-A200 text-red-500 border border-solid"
                />
                <SelectBox
                  color="blue_50"
                  variant="outline"
                  indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                  name="today"
                  placeholder="Today"
                  options={dropDownOptions}
                  className="w-[42%] gap-px"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[26px]">
              <div className="flex flex-row justify-center w-full p-[23px] bg-white-A700 shadow-md rounded-[15px]">
                <ReactTable
                  size="md"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  className="w-[1062px]"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="!font-poppins text-center">
                  Dispalying 10 Out of 250
                </Text>
                <div className="flex flex-row justify-start items-center w-[12%] gap-[18px]">
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
    </>
  );
}
