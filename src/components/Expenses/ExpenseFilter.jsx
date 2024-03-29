import React, {useState} from 'react'

const ExpenseFilter = (props) => {

  /* Forward the selected year to Expenses.js */
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="flex justify-end">
      <div className="hs-dropdown relative inline-flex [--trigger:hover] w-fit">
        <button id="hs-dropdown-with-dividers" type="button" className="font-equinox text-xs md:text-base hs-dropdown-toggle w-24 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-[5px] border-[#4D4D4D] font-medium bg-[#373737] text-white shadow-sm align-middle hover:bg-[#2b2b2b] focus:outline-none transition-all dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          {props.selectedFilterYear}
          <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-[#4F4F4F]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth={"4"} strokeLinecap="round"/>
          </svg>
        </button>
        <div className="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-[6rem] border-[5px] border-[#4D4D4D] bg-[#373737] drop-shadow-xl rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-dividers">
          <div className="py-2 first:pt-0 last:pb-0">
            <option className="dropdown-link prevent-select cursor-pointer" href="#" value={2023} onClick={dropdownChangeHandler}>
              2023
            </option>
            <option className="dropdown-link prevent-select cursor-pointer" href="#" value={2022} onClick={dropdownChangeHandler}>
              2022
            </option>
            <option className="dropdown-link prevent-select cursor-pointer" href="#" value={2021} onClick={dropdownChangeHandler}>
              2021
            </option>
            <option className="dropdown-link prevent-select cursor-pointer" href="#" value={2020} onClick={dropdownChangeHandler}>
              2020
            </option>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseFilter;