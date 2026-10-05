const notFound = (request, response) => {
  response
    .status(404)
    .json({ error: `Route not found: ${request.method} ${request.path}` });
};

const errorHandler = (error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: "Internal server error." });
};

module.exports = { errorHandler, notFound };
