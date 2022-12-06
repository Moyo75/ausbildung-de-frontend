import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";

export default function Header({ articles, setSearch, search }) {
  // const [search, setSearch] = useState("");
  //const handleModal = () => setOpen(!open);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-dr w-100"
      style={{ paddingTop: "20px", marginBottom: "20px" }}
    >
      <Badge color="secondary" badgeContent={articles.length}>
        <Typography variant="h5" gutterBottom>
          Blog
        </Typography>
      </Badge>
      <TextField
        value={search}
        style={{}}
        id="outlined-basic"
        placeholder="filter..."
        variant="outlined"
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/new")}
      >
        New Article
      </Button>

      {/* <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ></Modal> */}
    </div>
  );
}
