export const AssessmentBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

export const PaperStyles = {
  width: { lg: "60%", md: "60%", sm: "80%", xs: "90%" },
  backgroundColor: "#282c48",
  marginTop: { sm: "0px", xs: "45px" },
};

export const ContinerStyle = {
  display: "flex",
  flexDirection: "column",
  px: { lg: "70px", md: "70px", sm: "40px ", xs: "16px" },
  py: { lg: "20px", sm: "20px", xs: "20px" },
  margin: "0px",
  width: "100%",
};

export const InnerContainerStyle = {
  display: "flex",
  flexDirection: { sm: "row", xs: "column" },
  justifyContent: "space-between",
  padding: "0px !important",
  gap: { sm: "0px", xs: "20px" },
};

export const AvatarContainer = { display: "flex", gap: "10px" };

export const AvatarStyles = { fontWeight: "bold", backgroundColor: "#181b32" };

export const PersonOutlineTwoToneIconStyle = {
  color: "#595e83",
};

export const UserNameTextStyles = {
  color: "#fff",
  alignSelf: "center",
  fontSize: { sm: "16px", xs: "20px" },
  fontWeight: "bold",
  fontFamily: "sans-serif",
};

export const userTotalCompletedTextStyles = {
  fontSize: { sm: "14px", xs: "16px" },
  fontWeight: "bold",
  color: "#fff",
  fontFamily: "sans-serif",
};

export const MobileStepperStyles = {
  maxWidth: 600,
  flexGrow: 1,
  width: "100%",
  py: 1,
  px: "0px",
  backgroundColor: "#282c48",
  ".MuiMobileStepper-progress": {
    width: "100%",
    borderRadius: "10px",
    height: { sm: 4, xs: 8 },
  },
};

export const DividerStyles = {
  border: { sm: "1px solid #5f658d47", xs: "2px solid #5f658d47" },
};

export const InnerContainerstyles = {
  gap: "30px",
  px: { lg: "70px", md: "70px", sm: "40px ", xs: "20px" },
  py: { lg: "30px", sm: "20px", xs: "30px" },
  margin: "0px",
  width: "100%",
};

export const leftAnswerContainerStyle = {
  display: "flex",
  flexDirection: { sm: "row", xs: "column" },
  gap: { sm: "0px", xs: "10px" },
  justifyContent: "space-between",
  padding: "0px !important",
};

export const LeftAnswerTextStyles = {
  color: "#61678c",
  fontWeight: "bold",
  fontSize: { sm: "14px", xs: "18px" },
  fontFamily: "sans-serif",
  alignSelf: { sm: "center", xs: "left" },
};

export const TimeRemainingContainerStyles = {
  display: "flex",
  gap: "20px",
  justifyContent: "space-between",
};

export const TimeRemainingTextStyles = {
  color: "#61678c",
  fontWeight: "bold",
  fontSize: { sm: "14px", xs: "16px" },
  fontFamily: "sans-serif",
  alignSelf: "center",
};

export const QuestionContainerStyles = {
  padding: "0px !important",
};

export const QuestionTextStyles = {
  display: "flex",
  color: "#efefef",
  fontWeight: "bold",
  fontSize: { sm: "16px", xs: "14px" },
  fontFamily: "sans-serif",
  textAlign: "justify",
  gap: "5px",
};

export const OptionGridContainerStyle = { padding: "0px !important" };

export const OptionFormControlStyle = { width: "100%" };

export const customButtonContainer = {
  padding: "0px !important",
  width: "100%",
  display: "flex",
  justifyContent: "end",
};

export const formLabelStyle = {
  fontSize: "18px",
  color: "black !important",
};

export const FormControlLabelStyle = {
  width: "100%",
  border: "2px solid #71748b59",
  borderRadius: "2px",
  marginTop: "8px",
  marginBottom: "10px",
  padding: "5px",
  cursor: "pointer",
  marginLeft: "0",
  marginRight: "0",
  "&:hover": {
    border: "2px solid #40BA77",
  },
  "& .MuiFormControlLabel-label": {
    fontSize: { xs: "13px", md: "18px" },
    color: "#efefef",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
};
