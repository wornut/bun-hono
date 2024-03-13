import { Type as T, type Static } from "@sinclair/typebox";
import { Value as V } from "@sinclair/typebox/value";

const appEnvSchema = T.Object({
	PORT: T.RegExp(/\d{1,5}/),
	LOGGER: T.Union([T.Literal("on"), T.Literal("off")]),
});

export type AppEnvs = Static<typeof appEnvSchema>;

(() => {
	try {
		V.Decode(appEnvSchema, process.env);
	} catch (err) {
		console.error(err);
	}
})();
