import { app } from "./app";
import { ping } from "./ping";
import { productRouter } from "./routes/productRouter";
import { userRouter } from "./routes/userRouter";

app.use("", userRouter);

app.use("",userRouter);

app.use("", productRouter);

app.get("/ping", ping)