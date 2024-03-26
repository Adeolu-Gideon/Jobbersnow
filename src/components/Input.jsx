/* eslint-disable react/prop-types */
const Input = ({type, placeholder, name, label}) => {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label || name}
        </label>
        <div className="mt-2">
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={type}
            required
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}
export default Input