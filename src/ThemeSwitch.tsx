import React from "react";
import IconButton from "@material-ui/core/IconButton";
import useDarkMode from 'use-dark-mode';
import { Brightness5Rounded, Brightness4Rounded } from "@material-ui/icons";

export default function ThemeIndicator() {
  const darkMode = useDarkMode(true);
  const displayAlt = darkMode.value ? "Switch to Light Mode" : "Switch to Dark Mode";
  if (! darkMode.value) {
    return (
      <IconButton aria-label={displayAlt} onClick={darkMode.enable} color="inherit">
        <Brightness4Rounded />
      </IconButton>
    );
  } else {
    return (
      <IconButton aria-label={displayAlt} onClick={darkMode.disable} color="inherit">
        <Brightness5Rounded />
      </IconButton>
    );
  }
}
