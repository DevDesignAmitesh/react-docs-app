import { useContext, useRef, useState } from "react";
import Card from "./card";
import Context from "../store/card-store";

function Foreground() {
  const ref = useRef(null);

  const {initialData} = useContext(Context)

  const [data, setData] = useState(initialData);

  const deleteCard = (id) => {
    let finalData = data.filter((one) => id !== one.id);
    setData(finalData);
  };

  return (
    <>
      <div ref={ref} className="relative z-[3] p-[15px] h-screen w-full flex flex-wrap gap-3">
        {data.map((item, index) => (
          <Card
            deleteCard={deleteCard}
            reference={ref}
            key={index}
            item={item}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Foreground;
