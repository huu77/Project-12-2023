import React from 'react';
import { Flex, Spin } from 'antd';

const skeletonLoading: React.FC = () => (
    <div className='w-auto h-full flex justify-center items-center bg-white absolute top-0 bottom-0 right-0 left-0'>
  <Flex align="center" gap="middle" >
    <Spin size="large" />
  </Flex>
  </div>
);

export default skeletonLoading;