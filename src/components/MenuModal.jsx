import React, { useState } from "react";

import SearchBox from "./MenuComponents/SearchBox";
import Bookmarks from "./MenuComponents/Bookmarks";

export default function MenuModal({ isOpen, onClose }) {
  const [showSearch, setShowSearch] = useState(true);
  const [showBookmark, setShowBookmark] = useState(false);

  const searchBtnHandler = () => {
    setShowSearch(true);
    setShowBookmark(false);
  };
  const bookmarkBtnHandler = () => {
    setShowBookmark(true);
    setShowSearch(false);
  };

  if (!isOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed top-0 left-0 bg-neutral-600/50 backdrop-blur-[1.5px] w-screen h-screen z-10 transition-all"
        onClick={onClose}
      >
        <div
          className="flex flex-col gap-2 w-[320px] h-[460px] m-auto p-3 mt-14 bg-black rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2">
            <button
              onClick={searchBtnHandler}
              className={`w-full p-2 bg-neutral-600 rounded hover:bg-neutral-700 transition-all ${
                showSearch ? "bg-neutral-700 font-[500]" : "font-[200]"
              }`}
            >
              Search
            </button>
            <button
              onClick={bookmarkBtnHandler}
              className={`w-full p-2 bg-neutral-600 rounded hover:bg-neutral-700 transition-all ${
                showBookmark ? "bg-neutral-700 font-[500]" : "font-[200]"
              }`}
            >
              Bookmarks
            </button>
          </div>
          {showSearch && <SearchBox />}
          {showBookmark && <Bookmarks />}
        </div>
      </div>
    );
  }
}
