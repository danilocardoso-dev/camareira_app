import express from "express";
import router from "../routes/login.routes";

const app = express();
app.use(express.json());
app.get('/api', (req, res) => res.json({ message: 'API funcionando!' }));
app.use('/api', router);

export default app;
