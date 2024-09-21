import { Link } from "react-router-dom";

const ErrorFallbackBoundary = () => {
  return (
    <div className="flex justify-center gap-4 flex-col items-center w-full">
      <h3 className="uppercase tracking-widest text-gray-500 text-center">
        The route you are going to is not available or is experiencing problems.
        Try going back to the porch.
      </h3>
      <Link to="/" className="px-6 py-1 rounded-md bg-primary text-third">Back</Link>
    </div>
  );
};

export default ErrorFallbackBoundary;
