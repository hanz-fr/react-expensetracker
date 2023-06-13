import React from "react";

const Dropdown = () => {
  return (
    <div className="flex justify-end">
      <div className="hs-dropdown relative inline-flex [--trigger:hover] w-fit">
        <button id="hs-dropdown-with-dividers" type="button" className="hs-dropdown-toggle w-fit py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-[5px] border-[#4D4D4D] font-medium bg-[#373737] text-white shadow-sm align-middle hover:bg-[#2b2b2b] focus:outline-none transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          2023
          <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-[#4F4F4F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </button>

        <div className="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-[6rem] border-[5px] border-[#4D4D4D] bg-[#373737] drop-shadow-xl rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-dividers">
          <div className="py-2 first:pt-0 last:pb-0">
            <a className="dropdown-link" href="#">
              2023
            </a>
            <a className="dropdown-link" href="#">
              2022
            </a>
            <a className="dropdown-link" href="#">
              2021
            </a>
            <a className="dropdown-link" href="#">
              2020
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
