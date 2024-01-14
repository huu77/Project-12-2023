import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import React, { useState } from 'react'
import { InitSort } from './Body';

interface TableCompoment {
    pagination: any;
    setSortF: any;
    sortF: InitSort;
  }
const PaginationCompoment:React.FC<TableCompoment> = ({pagination,setSortF,sortF}) => {
      // pagination
  const itemsPerPage = pagination?.limit || 12; // Số mục mỗi trang
  const totalItems =pagination && pagination.totalItem ? (pagination.totalItem) : 100
  
  const [current, setCurrent] = useState(1);
 
  let totalEndOfPage = (current - 1) * itemsPerPage + itemsPerPage;
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setSortF({ ...sortF, page: page });
  };

  return (
    <div className="mt-10 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(current - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {totalItems - totalEndOfPage > 0
                ? totalEndOfPage
                : totalItems}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span>{" "}
            results
          </p>
        </div>
        <Pagination
          current={current}
          onChange={onChange}
          total={totalItems}
          pageSize={itemsPerPage}
        />
      </div>
  )
}

export default PaginationCompoment
