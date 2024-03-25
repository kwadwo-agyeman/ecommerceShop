import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Checkbox, Divider, Typography } from "@mui/material";

function LeftGrid(props) {
    const [addMinus, setAddMinus] = useState(props.leftGrid.map(() => true));


  return (
    <div>
          {props.leftGrid.map((item, index) => ( 
            <section
              style={{
                border: "1px solid black",
                height: addMinus[index] ? "1.5rem" : "fit-content",
                padding: "5px",
                margin: "10px 0",
              }}
              key={index}
            >
              <article
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => props.toggleMenuHeight(index,setAddMinus)}
              >
                <Typography>{item.header}</Typography>
                <article>
                  {addMinus[index] ? <AddIcon /> : <RemoveIcon />}
                </article>
              </article>
              <article
                style={{
                  marginTop: "5px",
                  display: addMinus[index] ? "none" : "block",
                  padding: "5px",
                }}
              >
                <Box>
                  <section
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "2px",
                    }}
                  >
                    <Checkbox
                      onClick={() => props.filterCardContent(item.body.title1,props.cardContent)}
                    />
                    <Typography>{item.body.title1}</Typography>
                  </section>
                  <Divider></Divider>
                  <section
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "2px",
                    }}
                  >
                    <Checkbox
                      onClick={() => props.filterCardContent(item.body.title2,props.cardContent)}
                    />
                    <Typography>{item.body.title2}</Typography>
                  </section>
                </Box>
              </article>
            </section>
          ))}
    </div>
  );
}

export default LeftGrid;
