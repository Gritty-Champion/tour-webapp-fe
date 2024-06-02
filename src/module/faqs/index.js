import React, { useEffect, useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



export const FaqSection = () => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.nyiconictours.com/faqs/all').then(
     response=>response.json()).then(data=>setData(data?.data.sort((a, b) => a.orderNumber - b.orderNumber)));
 }, []); 
  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto py-4">
        <div className="faq-section  text-black">
          {data.map((faq, index) => (
            <div key={index} className="faq-item my-4">
              <motion.div
                className="faq-question bg-transparent"
                onClick={() => toggleAccordion(index)}
                initial={false}
                // animate={{ backgroundColor: selected === index ? '#eee' : '#fff' }}
              >
                <div className="flex items-center justify-between">
                  <p>{faq.question}</p>
                  {selected === index ? (
                    <FaMinus className="cursor-pointer" />
                  ) : (
                    <FaPlus className="cursor-pointer" />
                  )}
                </div>
              </motion.div>
              <AnimatePresence>
                {selected === index && (
                  <>
                    <motion.div
                      className="faq-answer py-4"
                    //   initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    //   exit={{ opacity: 0, height: 0 }}
                    >
                      {faq.answer}
                    
                    {faq.quest2 && (
                      <>
                        <motion.p>{faq.quest2}</motion.p>
                        <motion.p>{faq.ans2}</motion.p>
                        <motion.p>{faq.ans2_2}</motion.p>
                        <motion.p>{faq.ans2_3}</motion.p>
                      </>
                    )}
                     {faq.quest2 && (
                        <motion.div className="py-4">
                        <motion.p>{faq.ans3}</motion.p>
                        <motion.p>{faq.ans3_1}</motion.p>
                        <motion.p>{faq.ans3_2}</motion.p>
                        <motion.p className="py-4">{faq.ans4_1}</motion.p>
                        <motion.p className="py-1">{faq.ans4_2}</motion.p>
                        </motion.div>
                     )}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
