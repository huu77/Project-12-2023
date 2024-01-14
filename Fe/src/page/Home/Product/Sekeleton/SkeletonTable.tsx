import React from "react";
import { Table, Skeleton, Pagination, Space } from "antd";
import { EditOutlined, SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { InitSort } from "../Main/Body";

interface TableComponentProps {
  data: any;
  sortF:InitSort;
}

const TableComponent: React.FC<TableComponentProps> = ({ data=[],sortF }) => {
  const columns = [
    {
      title: "IMG",
      dataIndex: "img",
      key: "img",
      render: (text:string) => (
        <div>
          {text ? (
            <img src={text} alt="Product Image" className="w-full h-auto rounded-2xl object-cover" />
          ) : (
            <Skeleton.Image active={true} />
          )}
        </div>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "CreatedAt", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Skeleton.Button active size="small" shape="round" />
        </Space>
      ),
    },
    {
      title: "Edit",
      key: "edit",
      render: () => (
        <Space size="middle">
          <Link to="#">
            <EditOutlined className="text-red-600" />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="w-full h-[400px] overflow-y-auto rounded-2xl scroll-smooth">
       {sortF.searchTerm !=='' ? <div className="flex justify-center items-center w-full h-96"><span>Not found product...</span></div> :
        <Table
        columns={columns}
        dataSource={Array.from({ length: 3 }, (_, index) => ({ key: index }))}
        loading={data.length === 0}
        pagination={false}
         
      />
       }
       
      </div>

 <div className={`mt-10   justify-between items-center ${sortF.searchTerm ==='' ? 'flex' :'hidden'}`}>
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">0</span> to{" "}
            <span className="font-medium">0</span> of <span className="font-medium">0</span> results
          </p>
        </div>
        <Pagination current={1} onChange={() => {}} total={0} pageSize={10} />
      </div>
    
    </div>
  );
};

export default TableComponent;
