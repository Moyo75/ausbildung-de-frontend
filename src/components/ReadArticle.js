import React from "react";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ReactMarkdown from "react-markdown";

import { useLocation, useNavigate } from "react-router-dom";

export default function ReadArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, tags, created_at } = location.state;

  console.log(location);

  function formatDate(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const d = new Date(date);
    return `${monthNames[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;
  }

  return (
    <div style={{ paddingTop: "20px", width: "100%" }}>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back
      </Button>

      <hr />
      <div style={{ textAlign: "center" }}>
        <ReactMarkdown children={`# ${title.toUpperCase()}`} />
      </div>
      <p
        style={{
          textTransform: "capitalize",
          color: "#6e6e6e",
          fontSize: "0.8rem",
          fontWeight: "600",
          lineHeight: "1.8",
          letterSpacing: "1.1",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {formatDate(created_at)}
      </p>
      {content.split(/(?:\r?\n)+/).map((para, index) => (
        <p
          style={{
            color: "#6e6e6e",
            fontSize: "1.1rem",
            fontWeight: "600",
            lineHeight: "1.8",
            letterSpacing: "1.1",
            fontFamily: "Roboto, sans-serif",
          }}
          key={index}
          children={`${para}`}
        ></p>
      ))}

      <Stack
        direction="row"
        spacing={2}
        sx={{ marginBottom: "20px" }}
        style={{
          color: "#6e6e6e",
          fontSize: "1.25rem",
          fontWeight: "600",
          lineHeight: "1.8",
          letterSpacing: "1.1",
          fontFamily: "Roboto, sans-serif",
          textTransform: "capitalize",
        }}
      >
        {tags.map((tag, index) => (
          <Chip label={tag} key={index} variant="filled" />
        ))}
      </Stack>
    </div>
  );
}
