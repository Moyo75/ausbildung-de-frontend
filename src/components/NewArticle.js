import React, { useState } from "react";

import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";

const url = "https://ausbildung-blog-api-production.up.railway.app/articles/";

function NewArticle() {
  const navigate = useNavigate();

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
    { title: "git" },
    { title: "UI" },
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ title: title, content: content, tags: tags });

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content, tags: tags }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Error: ", error);
        navigate("/");
      });
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const handleTags = (_, value) => {
    let result = value.map(({ title }) => title);
    setTags(result);

    //console.log(event);
  };

  return (
    <div style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
      <div
        className={"flex flex-dr ai-c jc-c"}
        style={{ paddingBottom: "20px", height: "35px" }}
      >
        {" "}
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
          New Article
        </h3>{" "}
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          className="input-style"
          style={{
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
          required
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextareaAutosize
          className="input-style"
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
          onChange={(event) => setContent(event.target.value)}
        />

        <Stack spacing={3} style={{ marginBottom: "30px" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={buzzWords}
            getOptionLabel={(option) => option.title}
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
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewArticle;
