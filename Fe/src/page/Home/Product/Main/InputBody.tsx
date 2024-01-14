import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { InitSort } from "./Body";
import CreateNewProduct from '../Create'
import { debounce } from 'lodash';
interface SearchInputProps {
  setSortF: Dispatch<SetStateAction<InitSort>>;
  sortF: InitSort;
 
}

const InputBody: React.FC<SearchInputProps> = ({ setSortF, sortF }) => {
  const [search, setSearch] = useState("");
  
  // active
  const handleChangeActive = (value: boolean | null) => {


    setSortF({ ...sortF, active: value });
  };
  // search
  const debouncedHandleChangeSearch = debounce((value: string) => {
    // Perform your search logic here
    console.log('Searching for:', value);
  
  }, 300); 
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // debouncedHandleChangeSearch(e.target.value);
   
  };
  const handleClick = () => {
     
    setSortF({ ...sortF, searchTerm: search });
  };

  //  SortBy
  const handleChangeSortBy=(value:"name" | "price" | "createdAt")=>{
    
    setSortF({ ...sortF, sortBy: value });
  }
 
  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center py-5 overflow-y-auto">
      <div className="flex w-full justify-between items-center">
        <div className="w-full  md:flex">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-l-md focus:border-gray-300  w-3/12"
            placeholder="Search..."
            onChange={handleChangeSearch}
          />
          <button
            onClick={handleClick}
            className="bg-sky-600 font-bold text-white p-2 rounded-r-md hover:bg-sky-700 focus:outline-none focus:ring focus:border-sky-300"
          >
            Search
          </button>


          <div className="flex mt-10 md:mt-0 justify-center items-center">
          <Select
            className="md:ml-10 "
            defaultValue={true}
            style={{ width: 120 }}
            onChange={handleChangeActive}
            options={[
              { value: true, label: "Active" },
              { value: false, label: "Inactive" },
              
            ]}
          />

          <Select
            className="ml-10 "
            defaultValue="name"
            style={{ width: 120 }}
            onChange={handleChangeSortBy}
            options={[
              { value: 'name', label: "Name" },
              { value: 'price', label: "Price" },
              { value: 'createdAt', label: "Created At" },
            ]}
          />
          </div>
         
        </div>
 
        <CreateNewProduct/>
      </div>
    </div>
  );
};

export default InputBody;
