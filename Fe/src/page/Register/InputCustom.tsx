import React from "react";

interface FormField {
  id: number;
  name: string;
  isClass: boolean;
}
 interface PropInput {
  field:FormField;
  errors:any;
  register:any;
 }
const input:React.FC<PropInput> = ({ field, errors ,register}) => {
  return (
    <div className={`${field.isClass ? "row-span-1 col-span-2" : ""} `}>
      <label
        htmlFor="username"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {field.name.toUpperCase()}
      </label>
      <div className="mt-2">
        <input
          id={field.name}
          type={field.name}
          autoComplete={field.name}
          {...register(field.name)}
          className={` block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        {errors[field.name] && (
          <span className="text-red-600">{errors[field.name].message}</span>
        )}
      </div>
    </div>
  );
};

export default input;

 