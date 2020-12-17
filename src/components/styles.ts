import { createStyles, makeStyles } from "@material-ui/core";

export const testStyle = makeStyles(() =>
  createStyles({
    bodyContainer: {},
    links: {
      fill: "none",
      stroke: "#666",
      strokeWidth: "1.5px",
    },
    node: {
      "& circle": {
        fill: "#ccc",
        stroke: "#fff",
        strokeWidth: "1.5px",
      },
    },
    text: {
      font: "10px",
      pointerEvents: "none",
    },
    Gavroche: {
      background: `url(#"./test.png") no-repeat`,
    },
    Myriel: {},
  })
);
