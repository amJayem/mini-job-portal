import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { styled } from "@mui/material/styles";
import ViewJobDialogue from "./ViewJobDialogue";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${"#ACACAC"}`,
  background: "#F5F5F5",
  width: "80vw",
  margin: "5px",
  borderRadius: "8px",
  "&:before": {
    display: "none",
  },
}));

const ViewJob = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const category = ["category 1", "category 2", "category 3"];

  return (
    <Box
      display={"flex"}
      alignItems="center"
      alignContent="center"
      flexDirection="column"
    >
      <Typography sx={{ textTransform:'uppercase' }} variant="h1" fontSize="20px" fontWeight="bold">
        Browse open positions by category
      </Typography>
      <Typography paragraph={true}>
        we are always on the lookout for talented people
      </Typography>

      {category.map((ctg, i) => (
        <Accordion
          key={i}
          expanded={expanded === `${ctg}`}
          onChange={handleChange(`${ctg}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="category-content"
            id="category-header"
          >
            <Typography>{ctg}</Typography>
          </AccordionSummary>
          {category.map((ctg, i) => (
            <AccordionDetails key={i}>
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  background: "#fff",
                  padding: "2px"
                }}
              >
                <Typography m={`5px`}>
                  {ctg}
                </Typography>
                <ViewJobDialogue id={i} ctg={ctg} />
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};

export default ViewJob;
