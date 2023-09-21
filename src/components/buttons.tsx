import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
type Props = {
  data: string[];
  updateCount: (val: string) => void;
};
const Buttons = ({ data, updateCount }: Props) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item, inx) => {
        return (
          <Fragment key={inx}>
            <Typography
              variant="h1"
              color="black"
              sx={{
                width: "calc(98% / 3)",
                backgroundColor: "#80808049",
                border: "1px solid gray",
                textAlign: "center",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#707070",
                },
              }}
              onClick={() => updateCount(item)}
            >
              {item}
            </Typography>
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Buttons;
