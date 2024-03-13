import { Type as T, type Static } from "@sinclair/typebox";
import { Value as V } from "@sinclair/typebox/value";

const appEnvSchema = T.Object({
	PORT: T.RegExp(/\d{1,5}/),
	LOGGER: T.Union([T.Literal("on"), T.Literal("off")]),
});

export type AppEnvs = Static<typeof appEnvSchema>;

(() => {
	try {
		const err = V.Errors(appEnvSchema, process.env).First();
		if (err) throw err;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();
