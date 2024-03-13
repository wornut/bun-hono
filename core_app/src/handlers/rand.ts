import { customLog } from "@/utils/logger";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
	customLog("info:: ", Date.now().toString());

	return c.json({ now: Date.now() });
});

export default app;
