import React, { useState } from "react";
import "./index.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import northpool from "../../../../assest/images/north_pool.jpg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const InfoSectionLiberty = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [selectedItem, setSelectedItem] = useState("pass");

  const [expandedFaqs, setExpandedFaqs] = useState(false);

  const handleChangeFaqs = (panel) => (event, isExpanded) => {
    setExpandedFaqs(isExpanded ? panel : false);
  };

  return (
    <div className="info_section w-full bg-grayBG p-4">
      <div className="nested_info_section w-full text-black">
        <div className="">
          <h1 className="text-center text-2xl py-2">
            About Hop-On Hop-Off Pass 24 Hours + Liberty Cruise
          </h1>
          <p className="text-sm">
            While you are in New York, there's always so much to do but so
            little time. Our 24-hour hop-on hop-off package allows you to see
            all of the must-see New York attractions in the Downtown area, and
            gives you access to see the Statue of Liberty up close. What makes
            the pass better is that the Liberty Cruise departure point is
            conveniently located on Pier 36, and is only steps away from a
            Downtown Tour bus stop #11. You can take as much time as you like to
            explore the Downtown area, and when you are ready, hop on a Liberty
            Cruise. With this pass, attractions to see include: Statue of
            Liberty, Empire State Building, Times Square, Rockefeller Center,
            Flatiron Building, City Hall, Battery Park, and more.
          </p>
        </div>
        <div className="p-3 box_section flex flex-col my-2">
          <div className="links_included">
            <ul className="flex flex-row justify-between items-center">
              <li
                onClick={() => setSelectedItem("pass")}
                className={
                  selectedItem === "pass"
                    ? "selected py-3 w-full text-center"
                    : "py-3 w-full text-center"
                }
              >
                Included With Pass
              </li>
              <li
                onClick={() => setSelectedItem("tickets")}
                className={
                  selectedItem === "tickets"
                    ? "selected py-3 w-full text-center"
                    : "py-3 w-full text-center"
                }
              >
                Tickets
              </li>
              <li
                onClick={() => setSelectedItem("details")}
                className={
                  selectedItem === "details"
                    ? "selected py-3 w-full text-center"
                    : "py-3 w-full text-center"
                }
              >
                FAQs
              </li>
            </ul>
          </div>
          <div>
            {selectedItem == "pass" ? (
              <>
                <div className="information-section">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Hop-On Hop-Off Downtown</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accord_data w-full">
                        <div className="flex gap-1 w-full">
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                        </div>
                        <div className="desc_details p-4 bg-grayBG">
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Departure point:{" "}
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                            <p>
                              <span className="font-semibold">
                                {" "}
                                Complete Loop Takes:
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Unlimited Hop-On Hop-Off
                              </span>
                            </p>
                            <p>
                              <span className="font-semibold">Schedule:</span>
                              Daily, 8:00am - 5:45pm
                            </p>
                          </div>
                        </div>
                        <div className="my-2 p-4 bg-grayBG">
                          <p className="text-lg">What You'll See</p>
                          <ul className="list_item flex justify-between my-3">
                            <div>
                              <li>Time Square</li>
                              <li>Rockefeller Center</li>
                              <li>Empire State Building</li>
                            </div>
                            <div>
                              <li>Flatiron Building</li>
                              <li>Macy's</li>
                              <li>madison Square Garden</li>
                              <li>Union square</li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>Hop-On Hop-Off uptown</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accord_data w-full">
                        <div className="flex gap-1 w-full">
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                        </div>
                        <div className="desc_details p-4 bg-grayBG">
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Departure point:{" "}
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                            <p>
                              <span className="font-semibold">
                                {" "}
                                Complete Loop Takes:
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Unlimited Hop-On Hop-Off
                              </span>
                            </p>
                            <p>
                              <span className="font-semibold">Schedule:</span>
                              Daily, 8:00am - 5:45pm
                            </p>
                          </div>
                        </div>
                        <div className="my-2 p-4 bg-grayBG">
                          <p className="text-lg">What You'll See</p>
                          <ul className="list_item flex justify-between my-3">
                            <div>
                              <li>Time Square</li>
                              <li>Rockefeller Center</li>
                              <li>Empire State Building</li>
                            </div>
                            <div>
                              <li>Flatiron Building</li>
                              <li>Macy's</li>
                              <li>madison Square Garden</li>
                              <li>Union square</li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>Statue of Liberty Cruise</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accord_data w-full">
                        <div className="flex gap-1 w-full">
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                          <img
                            src={northpool}
                            alt="northpool"
                            className="w-2/4"
                          />
                        </div>
                        <div className="desc_details p-4 bg-grayBG">
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Departure point:{" "}
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                            <p>
                              <span className="font-semibold">
                                {" "}
                                Complete Loop Takes:
                              </span>
                              Any stop along the route (Stop #1-17)
                            </p>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <p>
                              <span className="font-semibold">
                                Unlimited Hop-On Hop-Off
                              </span>
                            </p>
                            <p>
                              <span className="font-semibold">Schedule:</span>
                              Daily, 8:00am - 5:45pm
                            </p>
                          </div>
                        </div>
                        <div className="my-2 p-4 bg-grayBG">
                          <p className="text-lg">What You'll See</p>
                          <ul className="list_item flex justify-between my-3">
                            <div>
                              <li>Time Square</li>
                              <li>Rockefeller Center</li>
                              <li>Empire State Building</li>
                            </div>
                            <div>
                              <li>Flatiron Building</li>
                              <li>Macy's</li>
                              <li>madison Square Garden</li>
                              <li>Union square</li>
                            </div>
                          </ul>
                        </div>
                        <div className="my-2 p-4 bg-grayBG">
                          <h1 className="text-2xl py-2">
                            About Hop-On Hop-Off Pass 24 Hours + Liberty Cruise
                          </h1>
                          <p className="text-sm">
                            While you are in New York, there's always so much to
                            do but so little time. Our 24-hour hop-on hop-off
                            package allows you to see all of the must-see New
                            York attractions in the Downtown area, and gives you
                            access to see the Statue of Liberty up close. What
                            makes the pass better is that the Liberty Cruise
                            departure point is conveniently located on Pier 36,
                            and is only steps away from a Downtown Tour bus stop
                            #11. You can take as much time as you like to
                            explore the Downtown area, and when you are ready,
                            hop on a Liberty Cruise. With this pass, attractions
                            to see include: Statue of Liberty, Empire State
                            Building, Times Square, Rockefeller Center, Flatiron
                            Building, City Hall, Battery Park, and more.
                          </p>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </>
            ) : selectedItem == "tickets" ? (
              <>
                <div className="main_ticket w-full p-4 bg-white">
                  <div className="nested_tickets">
                    <h1 className="text-lg font-medium">
                      Specific Start Date:
                    </h1>
                    <li className="text-sm ">
                      Valid for 48 consecutive hours starting from your selected
                      start date, or time of purchase (if selected start date is
                      the same day as purchase).
                    </li>
                    <h1 className="text-lg font-medium">
                      Flexible Start Date:
                    </h1>
                    <li className="text-sm ">
                      Valid for 48 consecutive hours starting from the time when
                      your tickets are scanned by our staff.
                    </li>
                    <h1 className="text-lg font-medium">All Options:</h1>
                    <li className="text-sm ">
                      Brooklyn Tour, Liberty Cruise (No Sky Deck access, General
                      Admission only), Holiday Lights Tour with Entertaining
                      Host and Night Tour with Entertaining Host are valid for a
                      single ride only and require reservations after purchase.
                    </li>
                  </div>
                </div>
              </>
            ) : (
              <div className="faqs_section">
                <Accordion
                  expanded={expandedFaqs === "panel1"}
                  onChange={handleChangeFaqs("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      General settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandedFaqs === "panel2"}
                  onChange={handleChangeFaqs("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Users
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandedFaqs === "panel3"}
                  onChange={handleChangeFaqs("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Advanced settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandedFaqs === "panel4"}
                  onChange={handleChangeFaqs("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Personal data
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
