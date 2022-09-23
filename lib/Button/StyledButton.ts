import { styled } from "@stitches/react";

const StyledButton = styled("button", {
  fontFamily: "Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1,

  variants: {
    size: {
      small: {
        fontSize: "12px",
        padding: "10px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "11px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
    mode: {
      primary: {
        color: "white",
        backgroundColor: "red",
      },
      secondary: {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      },
    },
  },

  defaultVariants: {
    size: "medium",
    mode: "secondary",
  },
});

export default StyledButton;
