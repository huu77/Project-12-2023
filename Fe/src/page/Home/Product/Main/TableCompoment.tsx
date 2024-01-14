import React, { useEffect, useState } from "react";

import {
  EditOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { InitSort } from "./Body";
import DeleteIcon from "../Delete";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { covertDate } from "../../../../until";
import UpdateIcon from '../UpdateProduct'


interface TableCompoment {
  data: any;
  setSortF: any;
  sortF: InitSort;
}
const TableComponent: React.FC<TableCompoment> = ({
  data,

  setSortF,
  sortF,
}) => {
  const ProductState = useSelector((state: RootState) => state.products);

  //  asc | desc status
  const [filter, setFilter] = useState<boolean>(true);
 
  const handleChangeFilter = () => {
   
    setFilter(!filter);
  };
  useEffect(() => {
    setSortF({ ...sortF, sortType: filter ? "asc" : "desc" });
  }, [filter]);
 

  return (
    <div className="w-[450px] md:w-[850px]    lg:w-full h-[400px] overflow-y-auto rounded-2xl scroll-smooth overflow-x-auto">
      <table className="  sm:min-w-[450px] md:min-w-[850px]    lg:min-w-full  bg-white border rounded-2xl ">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">
              Name
              {sortF.sortBy === "name" && (
                <span onClick={handleChangeFilter}>
                  {filter ? <ArrowDownOutlined className="thd_filter--icon"/> : <ArrowUpOutlined className="thd_filter--icon"/>}
                </span>
              )}
            </th>
            <th className="py-2 px-4 border-b">Price
            {sortF.sortBy === "price" && (
                <span onClick={handleChangeFilter}>
               {filter ? <ArrowDownOutlined className="thd_filter--icon"/> : <ArrowUpOutlined className="thd_filter--icon"/>}
                </span>
              )}
            </th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">CreatedAt
            {sortF.sortBy === "createdAt" && (
                <span onClick={handleChangeFilter}>
               {filter ? <ArrowDownOutlined className="thd_filter--icon"/> : <ArrowUpOutlined className="thd_filter--icon"/>}
                </span>
              )}
            </th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {ProductState.products &&
            ProductState.products.map((item: any) => (
              <tr key={item.id}>
                 <td className="py-2 px-4 border-b "><img src={'http://localhost:3333/storage/fda227c3-090c-4678-8d8e-4b7450872fda.jpg'} alt="image" className="w-20"/></td>
                <td className="py-2 px-4 border-b ">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">
                  {item.price}$
                </td>
                <td className="py-2 px-4 border-b max-w-xs truncate">
                  {item.description}
                </td>
                <td className="py-2 px-4 border-b">
                  {covertDate(item.createdAt)}
                </td>
                <td className="py-2 px-2 border max-w-20">
                  {item.active ? (
                    <div className="bg-green-600 thd_active--status">Active</div>
                  ) : (
                    <div className="bg-red-600 thd_active--status">
                      Inactive
                    </div>
                  )}
                </td>
                <td className="py-2 px-4 border-b text-center hover:cursor-pointer max-w-20 ">
          
                  <UpdateIcon id={item.id}/>
                  <DeleteIcon id={item.id} active={item.active}/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
