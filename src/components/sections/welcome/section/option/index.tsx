import { Radio } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Option = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  let tempArray = [1, 2, 3, 4];

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>SELECT ONLY ONE</Box>
        <Box sx={{ gap: "30px", display: "flex", flexDirection: "column" }}>
          {tempArray.map((data) => {
            return (
              <>
                <Box
                  sx={{
                    border: "2px solid #efefef",
                    borderRadius: "5px",
                    cursor: "pointer",
                    "&:hover": {
                      border: "2px solid #46a997",
                    },
                  }}
                >
                  <Radio
                    {...controlProps("c")}
                    color="success"
                    sx={{
                      padding: "0px",
                      margin: "10px",
                      "&:hover": {
                        border: "2px solid #46a997",
                      },
                    }}
                    // inputProps={{
                    //   style: {
                    //     border: "1px solid red",
                    //   },
                    // }}
                  />
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Option;
