import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countries";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use("/countries", countryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
