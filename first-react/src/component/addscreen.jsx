import { useContext, useRef } from "react";
import Context from "../store/card-store";

function Addscreen({ changeToNotAdd }) {
  let dsc = useRef();
  let tit = useRef();

  const { inputValue } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    let dscValue = dsc.current.value;
    let titValue = tit.current.value;

    inputValue(dscValue, titValue);

    changeToNotAdd();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-[600px] w-[600px] z-[10] flex flex-col gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-700/90 p-5 rounded-lg ">
          <div id="desc" className="flex flex-col gap-2 text-white">
            <h4 className="font-semibold">Discription</h4>
            <input
              ref={dsc}
              className="p-2 rounded-md border-2 bg-transparent"
              type="text"
              placeholder="Write only in 40 words."
              maxLength={50}
            />
          </div>
          <div id="title" className="flex flex-col gap-2 text-white">
            <h4 className="font-semibold">Title</h4>
            <input
              ref={tit}
              className="p-2 rounded-md border-2 bg-transparent"
              type="text"
              placeholder="Like: Do later/Important/Nothing."
              maxLength={10}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 px-7 py-3 text-white rounded-lg font-semibold text-lg mt-5"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default Addscreen;
