import { app } from "./app";
import { ping } from "./ping";
import { userRouter } from "./routes/userRouter";

app.use("/user", userRouter);

app.get("/ping", ping)