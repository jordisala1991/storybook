import { VariantProps } from "@stitches/react";
import React from "react";

import StyledButton from "./StyledButton";

interface ButtonProps extends VariantProps<typeof StyledButton> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" style={{ backgroundColor }} {...props}>
      {label}
    </StyledButton>
  );
};

export { ButtonProps };
