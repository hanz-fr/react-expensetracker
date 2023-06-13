import React from "react";

import Container from "./Container";

const Separator = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#777777] h-8 w-11/12 flex flex-row gap-5 px-10">
        <Container className="h-full w-14 bg-[#00ccbe7c] rounded-none" />
        <Container className="h-full w-14 bg-[#eeb87b88] rounded-none" />
      </div>
    </div>
  );
};

export default Separator;
