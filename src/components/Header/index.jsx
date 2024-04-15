import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    /*  <header {...props} className=" p-5 bg-white-A700 " > */
    <header {...props} className=" p-5 bg-slate-400 " >
      {/*   <div className="flex flex-row justify-between items-center  mx-auto max-w-[1128px]"> */}
      <div className="flex flex-row justify-between max-w-full  px-10 ">
        <Input
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8c8787ff" />
            ) : (
              <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
            )
          }
          className="w-[29%] gap-[35px] border-gray-50"
        />
        <div className="flex flex-row justify-between items-center w-auto gap-1 ">
          <Button color="gray_50" size="lg" className="w-[35px] flex flex-col relative text-white-A700 font-bold  
           rounded-[17px]">
            <Img className="  " src="images/img_group_257.svg " />
            <span className="absolute w-5 h-5 mb-6 bg-red-500 hover:bg-red-600 rounded-full  " >1</span>
          </Button>
          <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px] text-white-A700 font-bold">

            <Img src="images/img_group_259.svg" />
            <span className="absolute w-5 h-5 mb-6 bg-red-500 hover:bg-red-600 rounded-full  " >2</span>
          </Button>
          <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%] hover:scale-110 " />Sl
        </div>
      </div>
    </header>
  );
}
