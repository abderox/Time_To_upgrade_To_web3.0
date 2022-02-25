const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <span className="animate-spin relative rounded-full h-24 w-24 border-b-2 border-red-300 shadow-rose-500 shadow-md" >
      </span>
      <span className="animate-spin absolute animate-pulse rounded-full h-24 w-24 border-2 border-indigo-900 "  ></span>
    </div>
  );
};

export default Loader;
