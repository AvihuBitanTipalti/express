import express from "express";
import { wizardRoutes } from "./routes/wizardRoutes";
import { logger } from "./middleware/logger";
import { requestTiming } from "./middleware/requestTiming";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port = 3000;

app.use(express.json());
app.use(requestTiming);

// app.use(logger);

app.use("/wizards", wizardRoutes);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
