import React from "react";
import Image from "next/image";
const Brand = () => {
  return (
    <div className="flex items-center my-3">
      <Image
        src="/brand.webp"
        width={10000}
        height={300}
        alt="brand"
        className="mx-auto dark:bg-zinc-100 rounded-md"
      />
    </div>
  );
};

export default Brand;
