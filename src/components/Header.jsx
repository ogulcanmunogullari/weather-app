import React from "react";
import { useState } from "react";
import { useLocation } from "../context/Location_Context";

function Header() {
  const { setSearch, infoCity } = useLocation();
  const [searchButton, setSearchButton] = useState("");
  const aramaControl = () => {
    if (searchButton.match(/[0-9]/g)) {
      alert("arama işlemi başarısız, sadece harf giriniz");
    } else {
      setSearch(searchButton);
    }
  };
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 mb-10">{infoCity}</h1>
      <div className="flex flex-row md:w-full lg:w-[1024px] mx-auto">
        <input
          className="w-full p-2 rounded-l-lg border-l-2 border-y-2 border-gray-900 bg-cyan-200 text-xl text-cyan-600 placeholder-cyan-600 outline-0"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchButton(e.target.value)}
        />
        <button
          className="px-5 py-2 border-r-2 border-y-2 border-gray-900 rounded-r-lg text-xl bg-cyan-400 text-neutral-50"
          onClick={() => aramaControl()}
        >
          Arama
        </button>
      </div>
    </div>
  );
}

export default Header;
