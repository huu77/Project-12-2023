 
import { ClipLoader } from 'react-spinners';

 
const failure = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="bg-black bg-opacity-50 rounded-md p-4 flex flex-col justify-center items-center">
    <ClipLoader color="red" />
        {/* Ghi nhập lại input bằng tiếng Anh */}
        <p className="text-white mt-2">Please enter the information again.</p>
    </div>
  </div>
  )
}

export default failure
