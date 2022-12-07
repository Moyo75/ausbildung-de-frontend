import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import ReactMarkdown from "react-markdown";

import { useNavigate, useLocation } from "react-router-dom";

export default function DeleteArticle() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Delete: ", location);
  const { id, content } = location.state;

  const handleDelete = () => {
    try {
      fetch(
        `https://ausbildung-blog-api-production.up.railway.app/articles/${id}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        navigate("/");
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div style={{ width: "80%", paddingTop: "20px", paddingBottom: "20px" }}>
      <div
        className={"flex flex-dr ai-c jc-c"}
        style={{ paddingBottom: "20px", height: "35px" }}
      >
        <h3
          style={{
            color: "#6e6e6e",
            fontSize: "1.6rem",
            fontWeight: "600",
            lineHeight: "1.8",
            letterSpacing: "1.3",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Delete Article
        </h3>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>

      <Typography
        variant="h5"
        component="div"
        style={{
          marginTop: "0",
          marginBottom: "20px",
          color: "#6e6e6e",
          fontSize: "1.1rem",
          fontWeight: "600",
          lineHeight: "1.8",
          letterSpacing: "1.1",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <ReactMarkdown
          children={`#### ${
            content.length > 200
              ? content.substring(0, 199).trim() + "..."
              : content
          }`}
        />
      </Typography>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete This Article?
      </Button>
    </div>
  );
}
