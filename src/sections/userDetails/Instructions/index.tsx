
import {InstructionList} from "@/src/mock/instructionList";
import {Card, Typography} from "@mui/material";
import {
    IndexStyle,
    InstructionCard,
    InstructionText,
    InstructionTitle
} from "@/src/sections/userDetails/Instructions/style";

interface InstructionsProps{}
const Instructions = ({}: InstructionsProps) => {
    return(
    <Card sx={InstructionCard}>
        <Typography sx={InstructionTitle}> Instruction</Typography>
        {InstructionList.map((data, index) => {
            return (
                <Typography sx={InstructionText} key={index}>
                    <span style={IndexStyle}>
                      {index + 1}.
                    </span>
                    <span>{data}</span>
                </Typography>
            );
        })}
    </Card>
    )
}

export default Instructions