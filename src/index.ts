import express from "express";
import { wizardRoutes } from "./routes/wizardRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/wizards", wizardRoutes);

app.listen(port, () => {
  console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
