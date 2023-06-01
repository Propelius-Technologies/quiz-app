import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ExamModal from "../common/Model";
import Success from "@/src/assets/images/success.gif";
import { useState } from "react";

const SubmitModel = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <ExamModal open={openModal} onClose={() => setOpenModal(false)}>
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: { sm: "220px", xs: "150px" },
            height: { sm: "220px", xs: "200px" },
          }}
        >
          <Image
            src={Success}
            alt={"test done"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { sm: "32px", xs: "18px" },
            fontWeight: "400",
            color: "#fff",
          }}
        >
          Test completed successfully!
        </Typography>
      </Box>
    </ExamModal>
  );
};

export default SubmitModel;
