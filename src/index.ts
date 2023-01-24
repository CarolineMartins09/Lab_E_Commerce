import { app } from "./app";
import { productRouter } from "./routes/productRouter";
import { purchaseRouter } from "./routes/purchaseRouter";
import { userRouter } from "./routes/userRouter";

app.use("", userRouter);

app.use("",userRouter);

app.use("", productRouter);

app.use("", productRouter);

app.use("", purchaseRouter);

