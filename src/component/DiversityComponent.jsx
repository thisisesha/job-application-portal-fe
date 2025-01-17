import { CheckBox } from "@material-ui/icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import React from "react";

export default function DiversityComponent({
  setDiversityInformation,
  diversityInformation,
}) {
  console.log("diversityInformation", diversityInformation);
  const diversityOptions = [
    {
      title: "Gender Identity⁠ :",
      options: ["Male", "Female", "Others"],
      columValue: "gender",
    },
    {
      title: "Race/Ethnicity⁠ :",
      options: [
        "Hispanic or Latino",
        "American Indian or Alaska Native (Not Hispanic or Latino)",
        "Asian (Not Hispanic or Latino)",
        "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
        "Two or More Races (Not Hispanic or Latino)",
        "White (Not Hispanic or Latino)",
        "I don't wish to answer",
      ],
      columValue: "ethnicity",
    },
    {
      title: "Veteran Status⁠ :",
      options: ["Yes", "No", "I don't wish to answer"],
      columValue: "veteran_status",
    },
    {
      title: "Do you have any disability or had one in the past⁠ :",
      options: ["Yes", "No", "I don't wish to answer"],
      columValue: "disability_status",
    },
  ];
  return (
    <div>
      <h2>United States Diversity, Equity, and Inclusion Questions</h2>
      <span>
        Epic Games, and our subsidiaries, care deeply about Diversity, Equity,
        and Inclusion. We are committed to ensuring our recruitment processes
        uphold these beliefs. In order to ensure we hold ourselves to these
        expectations, we collect additional voluntary personal information
        related to preferred pronouns, gender identity, race/ethnicity, and
        military status for these purposes. Any information you provide will
        only be used to better understand our recruitment activity across these
        dimensions and will never be used as part of consideration for an open
        job opportunity. If you are not comfortable providing this information
        please select the opt-out options available.
      </span>
      <br />
      <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
        {diversityOptions?.map((group, key) => (
          <FormControl key={key} style={{ margin: "30px" }}>
            <FormLabel id={`group-label-${key}`}>{group.title}</FormLabel>
            <RadioGroup
              aria-labelledby={`group-label-${key}`}
              defaultValue="female"
              name={`radio-buttons-group-${key}`}
            >
              {group.options?.map((option, key2) => (
                <FormControlLabel
                  key={key2}
                  value={option}
                  checked={diversityInformation?.[group.columValue] == option}
                  onClick={(e) => {
                    console.log(group.columValue, e.target.value);
                    setDiversityInformation((prevValue) => {
                      return {
                        ...prevValue,
                        [group.columValue]: e.target.value,
                      };
                      // console.log(prevValue);
                      // if (prevValue === undefined) prevValue = {};
                      // prevValue[group.columValue] = e.target.value;
                    });
                  }}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
      </div>
    </div>
  );
}
