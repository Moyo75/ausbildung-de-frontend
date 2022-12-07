import React from "react";
import ArticleCard from "./ArticleCard";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ArticlesContainer({ articles, setArticles, search }) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {articles ? (
        articles
          .filter(({ title, content }) =>
            (title + content).toLowerCase().includes(search.toLowerCase())
          )
          .map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              setArticles={setArticles}
            />
          ))
      ) : (
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
