import React from "react";

const sizes = {
  xl: "text-[22px] font-bold",
  s: "text-sm font-bold leading-[17px]",
  md: "text-base font-bold leading-[19px]",
  xs: "text-xs font-bold",
  lg: "text-xl font-bold leading-6",
};

const Heading = ({ children, TotalRevenev, TotalCustomer, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
      {TotalRevenev}{TotalCustomer}
    </Component>
  );
};

export { Heading };
