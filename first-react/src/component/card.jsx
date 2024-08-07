import { FaFileAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

function Card({ item, reference, deleteCard }) {


  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="relative flex-shrink-0 h-80 w-[260px] rounded-[45px] bg-zinc-900/90 text-white overflow-hidden px-8 py-8"
      >
        <FaFileAlt />
        <p className="text-sm leading-tight mt-4 font-semibold">{item.desc}</p>
        <div id="footer" className="absolute bottom-0 left-0 w-full">
          <div className="flex justify-between items-center px-8 py-3 mb-3">
            <h5>{item.fileSize}</h5>
            <span onClick={() => deleteCard(item.id)} className="flex justify-center items-center bg-zinc-600 h-7 w-7 rounded-full cursor-pointer">
              <RxCross2/>
            </span>
          </div>
          <div
            id="tag"
            className={`flex justify-center items-center py-4 bg-blue-600`}
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
