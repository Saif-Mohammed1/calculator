import { useState } from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Buttons from "./components/buttons";

function App() {
  const [count, setCount] = useState("0");
  const data = ["c", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const updateCount = (val: string) => {
    if (val === "=") {
      try {
        // Use eval to evaluate the expression
        const result = eval(count);
        setCount(result.toString());
      } catch (error) {
        setCount("Error");
      }
    } else if (val === "c") {
      // Clear the display
      setCount("0");
    } else {
      // Append the clicked value to the current expression
      setCount(count === "0" ? val : count + val);
    }
  };
  return (
    <Box
      border={"2px solid"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container sx={{ margin: "10px" }}>
        <Typography
          variant="h2"
          color={"black"}
          padding={"30px"}
          border={"1px solid "}
          textAlign={"end"}
          sx={{ overflowWrap: "anywhere" }}
        >
          {count}
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <Typography
          variant="h3"
          color={"black"}
          sx={{
            width: " calc(98% /4)",
            backgroundColor: "#80808049",
            border: "1px solid gray",
            textAlign: "center",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#707070",
            },
            cursor: "pointer",
          }}
          onClick={() => updateCount("+")}
        >
          +
        </Typography>
        <Typography
          variant="h3"
          color={"black"}
          sx={{
            width: " calc(98% /4)",
            backgroundColor: "#80808049",
            border: "1px solid gray",
            textAlign: "center",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#707070",
            },
            cursor: "pointer",
          }}
          onClick={() => updateCount("-")}
        >
          -
        </Typography>
        <Typography
          variant="h3"
          color={"black"}
          sx={{
            width: " calc(98% /4)",

            backgroundColor: "#80808049",
            border: "1px solid gray",
            textAlign: "center",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#707070",
            },
            cursor: "pointer",
          }}
          onClick={() => updateCount("/")}
        >
          /
        </Typography>
        <Typography
          variant="h3"
          color={"black"}
          sx={{
            width: " calc(98% /4)",
            backgroundColor: "#80808049",
            border: "1px solid gray",
            textAlign: "center",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#707070",
            },
            cursor: "pointer",
          }}
          onClick={() => updateCount("*")}
        >
          X
        </Typography>
      </Container>
      <Container sx={{ display: "flex", margin: "10px" }}>
        <Buttons data={data.reverse()} updateCount={updateCount} />
        <Typography
          variant="h1"
          color="black"
          sx={{
            backgroundColor: "#80808049",
            border: "1px solid gray",
            textAlign: "center",
            transition: "background-color 0.2s ease-in-out",
            lineHeight: "4.190",
            "&:hover": {
              backgroundColor: "#707070",
            },
            cursor: "pointer",
          }}
          onClick={() => updateCount("=")}
        >
          =
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
