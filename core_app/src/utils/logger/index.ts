export function customLog(msg: string, ...rest: string[]) {
	if (process.env.LOGGER !== "on") return;

	console.log(msg, ...rest);
}
