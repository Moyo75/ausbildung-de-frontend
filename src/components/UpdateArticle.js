import React, { useState } from "react";

import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";

import { useLocation, useNavigate } from "react-router-dom";

const url = "https://ausbildung-blog-api-production.up.railway.app/articles/";

export default function UpdateArticle() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, title, content, tags } = location.state;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [updatedTags, setUpdatedTags] = useState([]);

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(url + id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle,
        content: updatedContent,
        tags: updatedTags,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
        navigate("/");
      });
  };

  const buzzWords = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JS" },
    { title: "BE" },
    { title: "FE" },
    { title: "react" },
    { title: "vue" },
    { title: "angular" },
    { title: "devops" },
    { title: "web development" },
    { title: "developer" },
    { title: "carrier" },
    { title: "postwoman" },
    { title: "ipsum" },
    { title: "dolor" },
    { title: "try-catch" },
  ];

  const handleTags = (_, value) => {
    let result = value.map(({ title }) => title);
    setUpdatedTags(result);
  };

  return (
    <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      <div
        className={"flex flex-dr ai-c jc-c"}
        style={{ paddingBottom: "20px", height: "35px" }}
      >
        <h3
          style={{
            color: "#6e6e6e",
            fontSize: "1.2rem",
            fontWeight: "600",
            lineHeight: "1.8",
            letterSpacing: "1.3",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Update Article
        </h3>{" "}
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <form onSubmit={handleUpdate}>
        <TextField
          className="input-style"
          value={updatedTitle}
          style={{
            borderRadius: "4px",
            marginBottom: "30px",
            width: "100%",
            color: "#6e6e6e",
            fontSize: "1.2rem",
            fontWeight: "600",
            lineHeight: "1.8",
            letterSpacing: "1.3",
            fontFamily: "Roboto, sans-serif",
          }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(event) => setUpdatedTitle(event.target.value)}
        />
        <TextareaAutosize
          className="input-style"
          value={updatedContent}
          style={{
            marginBottom: "30px",
            width: "98%",
            resize: "none",
            borderColor: "#0072E5",
            color: "#6e6e6e",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            letterSpacing: "1.3",
            fontFamily: "Roboto, sans-serif",
            paddingLeft: "10px",
          }}
          aria-label="minimum height"
          minRows={10}
          placeholder="Write your article here..."
          onChange={(event) => setUpdatedContent(event.target.value)}
        />
        <Stack spacing={3} style={{ marginBottom: "30px" }}>
          <Autocomplete
            multiple={true}
            id="tags-standard"
            defaultValue={tags.map((tag) => ({ title: tag }))}
            options={buzzWords}
            getOptionLabel={(option) => option.title || ""}
            filterSelectedOptions={true}
            onChange={handleTags}
            isOptionEqualToValue={(option, value) =>
              option.title === value.title
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Tags"
                placeholder="Favorites"
              />
            )}
          />
        </Stack>
        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
}
