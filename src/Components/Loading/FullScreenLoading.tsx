import Loading from "./Loading";

const FullScreenLoading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-opacity-0.32 fixed top-0 left-0 z-[999999]">
      <Loading size={40} className="!text-red-02" />
    </div>
  );
};

export default FullScreenLoading;
