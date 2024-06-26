import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
/* import Sidebar3 from "../../components/Sidebar3"; */
import { createColumnHelper } from "@tanstack/react-table";

const table5Data = [
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table",
    tablefloor: "Floor G-05",
    amount: "$82.48",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-04",
    amount: "$83.48",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$82.46\t",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-02",
    amount: "$87.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor G-05",
    amount: "$90.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table ",
    tablefloor: "Floor S-03",
    amount: "$12.46",
    satusorder: "Booked\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor S-01",
    amount: "$92.46",
    satusorder: "Available\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "23 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$32.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "218 June 2020, 12:42 AM",
    tabletype: "Brooklyn Simmons",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Booked",
  },
];

export default function TableListPage() {
  const [searchBarValue5, setSearchBarValue5] = React.useState("");
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("tableidone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table ID{" "}
          </Text>
        ),
        meta: { width: "111px" },
      }),
      table5ColumnHelper.accessor("bookdate", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Book Date
          </Text>
        ),
        meta: { width: "213px" },
      }),
      table5ColumnHelper.accessor("tabletype", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Type
          </Text>
        ),
        meta: { width: "196px" },
      }),
      table5ColumnHelper.accessor("tablefloor", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Floor
          </Text>
        ),
        meta: { width: "191px" },
      }),
      table5ColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Amount
          </Text>
        ),
        meta: { width: "137px" },
      }),
      table5ColumnHelper.accessor("satusorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Button color="green_50" className="mt-[33px] mb-3.5 font-medium min-w-[99px]">
              {info?.getValue?.()}
            </Button>
            <Img src="images/img_frame_13.svg" alt="image_five" className="h-[20px] w-[20px] mb-5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus Order
          </Text>
        ),
        meta: { width: "211px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>DasbordPravi</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row justify-start items-start w-full gap-0.5">
          {/*   <Sidebar3 className="w-[251px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" /> */}
          <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">

            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <Text size="xl" as="p">
                    Table List
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Add Table /Table List
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full p-[25px] bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="xl"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[1059px] my-[3px]"
                    columns={table5Columns}
                    data={table5Data}
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
      </div>
    </>
  );
}
