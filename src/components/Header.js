import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import { useNavigate } from "react-router-dom";

export default function Header({ articles, setSearch, search }) {
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
      <input
        value={search}
        className={"search"}
        autocomplete="off"
        id="outlined-basic"
        placeholder="filter..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/new")}
      >
        New Article
      </Button>
    </div>
  );
}
