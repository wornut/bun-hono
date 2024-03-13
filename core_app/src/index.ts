import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { mwHandleError } from "@/mws/error_handler";
import nowRoute from "@/handlers/rand";

const app = new Hono();

app.get("/health-check", (c) => {
	return c.text("imok!");
});

app.use("*", secureHeaders());

app.route("/rand", nowRoute);

app.onError(mwHandleError);

export default app;
