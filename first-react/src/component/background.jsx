function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen top-0 left-0">
        <p className="text-zinc-500 absolute -translate-x-[50%] -translate-y-[50%] top-[10%] left-[50%] py-10 w-full flex justify-center items-center ">
          Dcouments.
        </p>
        <h1 className="text-zinc-900 text-[15vw] font-semibold leading-none tracking-tighter absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]   ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
