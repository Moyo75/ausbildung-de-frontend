import React, { useState } from "react";

import { Link } from "react-router-dom";
import slugify from "slugify";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import ReactMarkdown from "react-markdown";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// const url = "https://ausbildung-blog-api-production.up.railway.app/articles/";

export default function ArticleCard({ article, setArticles }) {
  // console.log(article);

  const { id, title, content } = article;

  return (
    <div>
      <Card
        sx={{ minWidth: 275, backgroundColor: "#efefef", marginBottom: "20px" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              marginTop: "0",
              marginBottom: "0",
              color: "#494949",
              fontWeight: "600",
              lineHeight: "1.8",
              letterSpacing: "1.1",
              fontFamily: "Roboto, sans-serif",
              textTransform: "capitalize",
            }}
          >
            <ReactMarkdown
              children={`### ${
                title.length > 40 ? title.substring(1, 40).toUpperCase() : title
              }`}
            />
          </Typography>
          <Typography
            variant="span"
            style={{
              marginTop: "0",
              marginBottom: "0",
              color: "#6e6e6e",
              fontWeight: "600",
              lineHeight: "1.8",
              letterSpacing: "1.1",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <ReactMarkdown
              children={`### ${
                content.length > 200
                  ? content.substring(0, 199).trim() + "..."
                  : content
              }`}
            />
          </Typography>
        </CardContent>
        <CardActions className="flex flex-dr">
          <Link
            to={`/${slugify(article.title.toLowerCase(), {
              replacement: "-",
            })}`}
            state={article}
            style={{ textDecoration: "none" }}
          >
            <Button size="small">Read more...</Button>
          </Link>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              <Link
                to={`/delete`}
                state={article}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Delete
              </Link>
            </Button>
            <Button variant="contained" startIcon={<UpgradeIcon />}>
              <Link
                to={`/update`}
                state={article}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Update
              </Link>
            </Button>
          </Stack>
        </CardActions>
      </Card>
      {/* <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Article deleted successfully
        </Alert>
      </Snackbar> */}
    </div>
  );
}
