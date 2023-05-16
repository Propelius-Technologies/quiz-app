import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { FormControlLabelStyle, OptionBoxStyle } from "../styles";

import styles from "./style.module.css";

const Option = () => {
  let tempArray = [1, 2, 3, 4];

  return (
    <>
      <OptionBoxStyle>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label2"
            className={styles.formLabel}
          >
            Select Any One
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => console.log(e.target.value)}
          >
            {tempArray.map((data, index) => {
              return (
                <>
                  <FormControlLabel
                    value={data}
                    key={index}
                    control={<Radio />}
                    label="Please Select Any one Option"
                    sx={FormControlLabelStyle}
                    className={styles.formControlLabel}
                  />
                </>
              );
            })}
          </RadioGroup>
        </FormControl>
      </OptionBoxStyle>
    </>
  );
};

export default Option;
