"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { dropIn } from "@/lib/animations";
import Overlay from "../modal/overlay";

const container = `max-w-6xl flex justify-end mx-auto px-4 w-full`;
const themodal = `w-full md:w-1/2 mx-auto h-0`;
const drawerstyle = `h-auto flex flex-col mt-28`;
const drawerheader = ` bg-white flex justify-between items-center p-8 rounded-t-xl`;
const drawerbody = `bg-white h-full px-4 overflow-y-auto b`;
const drawerfooter = `bg-white px-8 rounded-b-xl`;

export default function CartModal({ show, onClose }: any) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <Overlay onClick={onClose}>
      <div className={container}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className={themodal}
        >
          <div className={drawerstyle}>
            <div className={drawerheader}>
              <h2 className="text-xl uppercase font-bold tracking-widest">
                hey
              </h2>

              <div></div>
            </div>
            <div className={drawerbody}>
              <div>heyyy</div>
            </div>

            <div className={drawerfooter}>
              <div className="flex justify-between my-4">
                <h2 className="uppercase text-gray-500 ">total</h2>
              </div>
              <a href="/checkout" className="btn w-full block mb-8 text-center">
                checkout
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {modalContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("contact-modal")
    );
  } else {
    return null;
  }
}
