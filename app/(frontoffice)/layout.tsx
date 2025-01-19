import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const frontLayout = ({ children }: Props) => {
  return (
    <div>
      <div>menu</div>
      <div>{children}</div>
    </div>
  );
};

export default frontLayout;
