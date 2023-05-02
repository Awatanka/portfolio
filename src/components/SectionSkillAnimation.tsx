import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

const SectionSkill: FC = (): ReactElement => {
  const dotStyles = {
    position: "relative",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#9880ff",
    color: "#9880ff",
    animation: "dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1)",
  };

  const dotBeforeStyles = {
    content: '""',
    display: "inline-block",
    position: "absolute",
    top: "0",
    left: "-12px",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#9880ff",
    color: "#9880ff",
    animation: "dot-floating-before 3s infinite ease-in-out",
  };

  const dotAfterStyles = {
    content: '""',
    display: "inline-block",
    position: "absolute",
    top: "0",
    left: "-24px",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#9880ff",
    color: "#9880ff",
    animation: "dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1)",
  };

  const dotKeyframes = {
    "0%": {
      left: "calc(-50% - 5px)",
    },
    "75%": {
      left: "calc(50% + 105px)",
    },
    "100%": {
      left: "calc(50% + 105px)",
    },
  };

  const dotBeforeKeyframes = {
    "0%": {
      left: "-50px",
    },
    "50%": {
      left: "-12px",
    },
    "75%": {
      left: "-50px",
    },
    "100%": {
      left: "-50px",
    },
  };

  const dotAfterKeyframes = {
    "0%": {
      left: "-100px",
    },
    "50%": {
      left: "-24px",
    },
    "75%": {
      left: "-100px",
    },
    "100%": {
      left: "-100px",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          ...dotStyles,
          "&::before": {
            ...dotBeforeStyles,
            animation: `${dotBeforeKeyframes} 1s ease-out infinite`,
          },
          "&::after": {
            ...dotAfterStyles,
            animation: `${dotAfterKeyframes} 1s ease-out infinite`,
          },
          animation: `${dotKeyframes} 1s ease-out infinite`,
        }}
      />
    </Box>
  );
};

export default SectionSkill;
