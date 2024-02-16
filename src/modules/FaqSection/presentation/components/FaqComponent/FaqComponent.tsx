"use client";
import FaqEntity from "@/modules/FaqSection/domain/entities/FaqEntity";
import { useState } from "react";
import { AddIcon } from "../../assets/AddIcon";
import { Divider } from "@/core/components/Divider";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  faq: FaqEntity;
}

export default function FaqComponent({ faq }: Props) {
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const handleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  return (
    <>
      <div>
        <div
          className="flex flex-row justify-between w-full items-center cursor-pointer"
          onClick={handleAnswerVisibility}
        >
          <p className="text-2xl font-bold">{faq.question}</p>
          <span className="w-8 h-8">
            <AddIcon />
          </span>
        </div>
        <AnimatePresence>
        {isAnswerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{ height: 0, opacity: 0 }}
            className="text-lg font-medium mt-4 w-full"
          >
            {faq.answer}
          </motion.div>
        )}
        </AnimatePresence>
        <Divider className="border-yellow mt-3" />
      </div>
    </>
  );
}
