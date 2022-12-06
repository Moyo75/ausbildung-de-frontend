import { Fragment, useEffect, useState } from "react";
import ArticlesContainer from "./ArticlesContainer";

import Header from "./Header";

import { _fetch } from "../utils/utils";

const url = "https://ausbildung-blog-api-production.up.railway.app/articles/";

function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      const response = await _fetch(`${url}`);
      setArticles(response);
    }
    getCountries();
  }, []);

  return (
    <Fragment>
      <Header articles={articles} setSearch={setSearch} search={search} />
      <ArticlesContainer
        articles={articles}
        setArticles={setArticles}
        search={search}
      />
    </Fragment>
  );
}

export default Home;
