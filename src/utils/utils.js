const _fetch = async (request) => {
  const fetchResult = await fetch(request);

  if (fetchResult.ok) {
    const result = await fetchResult.json();
    //console.log(result);
    return result;
  }

  const errorMessage = {
    type: "Error",
    message: fetchResult.message || "Something went wrong",
    code: fetchResult.code || "",
    data: fetchResult.data || "",
  };

  const error = new Error();
  error.info = errorMessage;

  return error;
};

const url = "https://ausbildung-blog-api-production.up.railway.app/articles/";

export { _fetch, url };
