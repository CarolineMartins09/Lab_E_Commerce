import { app } from "./app";
import { ping } from "./ping";
import { userRouter } from "./routes/userRouter";

app.use("", userRouter);

app.use("",userRouter);

app.get("/ping", ping)