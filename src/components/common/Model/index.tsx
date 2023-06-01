import React, { ReactNode, useEffect, useState } from "react";
import { Box, IconButton, Modal, SxProps, Theme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MainBox, ModalBox } from "./style";

interface ModalType {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ExamModal = ({ open, onClose, children }: ModalType) => {
  return (
    <Modal open={open} onClose={onClose} sx={ModalBox}>
      <Box sx={MainBox}>
        <IconButton
          sx={{
            position: "absolute",
            top: "8px",
            right: "10px",
            color: "#40BA77",
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ width: "30px", height: "30px" }} />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default ExamModal;
