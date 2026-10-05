const cors = require("cors");
const express = require("express");
const decisionRoutes = require("./routes/decisionRoutes");
const { clientOrigin } = require("./config/env");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "decisionlab-api" });
});

app.use("/api/decisions", decisionRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
