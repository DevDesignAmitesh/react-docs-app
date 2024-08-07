import { IoAddSharp } from "react-icons/io5";

function Addbtn({changeToAdd}) {
  return (
    <>
      <button onClick={changeToAdd} className="h-20 w-20 z-[10] flex justify-center items-center bg-blue-600 rounded-full absolute right-[2%] top-[3%] ">
        <IoAddSharp size={"2em"} color="#fff" />
      </button>
    </>
  );
}

export default Addbtn;
