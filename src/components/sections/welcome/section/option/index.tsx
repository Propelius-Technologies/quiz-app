import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import styles from "./style.module.css";

const Option = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  let tempArray = [1, 2, 3, 4];

  return (
    <>
      <Box className={styles.optionBox}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label2"
            className={styles.formLabel}
          >
            SELECT ONLY ONE
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {tempArray.map((data, index) => {
              return (
                <>
                  <FormControlLabel
                    value={data}
                    key={index}
                    control={<Radio />}
                    label="Please Select Any one Option"
                    sx={{
                      "&:hover": {
                        border: "2px solid #46a997",
                      },
                      "& .MuiFormControlLabel-label": {
                        fontSize: { xs: "13px", md: "20px" },
                      },
                    }}
                    className={styles.formControlLabel}
                  />
                </>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Option;
