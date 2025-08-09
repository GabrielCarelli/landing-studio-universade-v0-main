"use client";
import React from "react";
import * as Icons from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

interface GenericIconProps extends SvgIconProps {
  iconName: keyof typeof Icons;
}

const GenericIcon: React.FC<GenericIconProps> = ({ iconName, ...props }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props}/>;
};

export default GenericIcon;