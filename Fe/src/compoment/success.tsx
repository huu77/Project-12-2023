import { ClipLoader } from "react-spinners";
const success = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="bg-black bg-opacity-50 rounded-md p-4">
        <ClipLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default success;
