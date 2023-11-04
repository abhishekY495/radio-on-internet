import React from "react";

import SearchBox from "./SearchBox";

export default function MenuModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed top-0 left-0 bg-neutral-600/50 backdrop-blur-[1.5px] w-screen h-screen z-10 transition-all"
        onClick={onClose}
      >
        <div
          className="flex flex-col gap-2 w-[350px] h-[530px] m-auto p-3 mt-[85px] bg-black rounded-lg max-[400px]:w-[310px] max-[400px]:h-[453px] max-[400px]:mt-[65px]"
          onClick={(e) => e.stopPropagation()}
        >
          <SearchBox />
        </div>
      </div>
    );
  }
}
