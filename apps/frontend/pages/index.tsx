import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";




const Index = () => <div>
  <h1>Welcome to my site!</h1>
  <Typography variant="h2" style={{ fontSize: "2rem" }}>
    Some common misconceptions people have about transgender people include:
  </Typography>

  <blockquote>
    <Typography>
      <strong>Misconception: </strong>{" "}
      <em>Isn't a transgender woman just a man wearing a dress?</em>
    </Typography>
    <Typography>
      <strong>Response: </strong> No, a transgender woman is someone who was
      assigned male at birth (AMAB) but identifies as a woman. Trans women
      generally take some steps to physically transitioning, which may
      include hormone therapy (generally consisting of estrogen and anti
      androgens or "testosterone blockers"), laser hair removal or
      electrolysis (particularly on/around the face), or even surgery
      (including but not limited to facial feminization surgery, voice
      feminization surgery, breast augmentation or "bottom surgery" - also
      known as vaginoplasty or vulvoplasty). Many trans women do not do all
      of these things, and some do not do any of them - and that's OK.
    </Typography>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>More Detail</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </blockquote>




</div>;

export default Index;
