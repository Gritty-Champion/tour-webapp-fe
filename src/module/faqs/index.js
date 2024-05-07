import React, { useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FAQ = [
  {
    question: "What is a double decker bus tour in New York?",
    answer:
      "A double decker bus tour is a popular way to see and explore New York City. It involves a sightseeing tour on an open-top bus that allows you to take in the sights and sounds of the city from a unique vantage point.",
  },
  {
    question:
      "What are the benefits of taking a double decker bus tour in New York?",
    answer:
      "A double decker bus tour allows you to see all the major landmarks and attractions of New York City in a short period of time. It is also a great way to get an overview of the city and learn about its history and culture from knowledgeable tour guides.",
  },
  {
    question:
      "What are the different types of double decker bus tours available in New York?",
    answer:
      "There are several types of double decker bus tours available in New York, including hop-on-hop-off tours, night tours, and themed tours.",
  },
  {
    question: "How long does a typical double decker bus tour last?",
    answer:
      "A typical double decker bus tour lasts between 1.5 and 3 hours, depending on the type of tour you choose.",
  },
  {
    question: "Can I hop on and off the bus during a hop-on-hop-off tour?",
    answer:
      "Yes, hop-on-hop-off tours allow you to get off the bus and explore the area on foot, and then hop back onto the bus when you’re ready to continue the tour.",
  },
  {
    question:
      "What are some of the popular attractions that are covered during a double decker bus tour in New York?",
    answer:
      "Popular attractions that are covered during a double decker bus tour in New York include the Statue of Liberty, Empire State Building, Central Park, Times Square, and the 9/11 Memorial.",
  },
  {
    question: "Do double decker bus tours provide commentary during the tour?",
    answer:
      "Yes, most double decker bus tours provide informative and interesting commentary about the attractions and landmarks you pass by during the tour.",
  },
  {
    question: "How do i use my tour ticket?",
    answer: `Here are the details for your upcoming tour:`,
    quest2: "**Boarding Location",
    ans2: "Hop on Hop off tours: West 56th Street & 7th Avenue, New York, NY (Front of Red Eye Grill)",
    ans2_2: `Night Tour: 42nd Street on 7th Avenue (5 Times Square)`,
    ans2_3: `Tips: Our agents are in Orange Uniform.`,
    ans3: "*Tour Start Time: Hop on Hop off 9:00 AM to 5:00 PM",
    ans3_1: `Night Tour 6:00PM to 11 PM`,
    ans3_2: `Please arrive at the boarding location a little early to ensure a smooth departure. Our friendly staff will be there to assist you. Don’t forget to bring your reservation/confirmation detail.`,
    ans4_1:
      "If you have any questions or need further assistance, please feel free to contact our customer support team: contact@newyorkiconiccruises.com",
    ans4_2: `We hope you have a memorable tour experience.`,
  },
];
export const FaqSection = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto py-4">
        <div className="faq-section  text-black">
          {FAQ.map((faq, index) => (
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
                    <FaPlus className="cursor-pointer" />
                  ) : (
                    <FaMinus className="cursor-pointer" />
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
