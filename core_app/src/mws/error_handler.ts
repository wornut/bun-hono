import { type ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";

export const mwHandleError: ErrorHandler = async (err, c) => {
	if (err instanceof HTTPException) {
		const res = err.getResponse();
		const message = await res.text().catch(() => null);
		return c.json(
			{
				message,
				status: res.status,
			},
			{
				statusText: res.statusText,
				status: res.status,
			},
		);
	}

	return c.json({ message: "something wrong!" }, 500);
};
