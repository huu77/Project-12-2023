import React, { useEffect, useState } from "react";
import TableCompoment from "./TableCompoment";
import InputBody from "./InputBody";
import { getAllProduct } from "../../../../database/product";
import SkeletonTable from "../Sekeleton/SkeletonTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Product.slice";
import PaginationCompoment from "./Pagination";


interface Sort {
  sortBy: "name" | "price" | "createdAt";
  sortType: "asc" | "desc";
}
export interface InitSort extends Sort {
  searchTerm: string;
  page: number;
  active: boolean | null;
}

const Body = () => {
// 
  // sort init
  const [sortF, setSortF] = useState<InitSort>({
    searchTerm: "",
    page: 1,
    active: true,
    sortBy: "name",
    sortType: "asc",
  });
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  // dispatch action , save data on redux toolkit
  const dispatch = useDispatch();

  useEffect(() => {
    const connectAPi = async () => {
      const response = await getAllProduct(sortF);
 
      dispatch(getAllProducts(response.items) as any);
      setData(response.items);
      setPagination(response.pagination);
    };
    connectAPi();
  }, [sortF]);

  return (
    <div className="w-11/12 flex flex-wrap flex-col  ">
 
      <InputBody setSortF={setSortF} sortF={sortF} />
      {data && data.length !== 0 ? (<>
        <TableCompoment data={data} setSortF={setSortF} sortF={sortF} />
        <PaginationCompoment
        pagination={pagination}
        setSortF={setSortF}
        sortF={sortF}
      />
      </>
      ) : (
        <SkeletonTable data={[]} sortF={sortF} />
      )}
  
      
    </div>
  );
};

export default Body;
