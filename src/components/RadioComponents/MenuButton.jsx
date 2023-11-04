import React from "react";
import { useState } from "react";

import MenuModal from "../MenuComponents/MenuModal";

export default function MenuButton() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <MenuModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <div
        className={`
        h-10 w-5 border-b-0 bg-neutral-600
        absolute top-[80px] -right-[23.5px]
        rounded-r-lg transition-all active:w-4 active:-right-[19.5px]
        hover:cursor-pointer`}
        onClick={() => setOpenModal(!openModal)}
      ></div>
    </>
  );
}
