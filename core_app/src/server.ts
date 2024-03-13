import app from ".";

export default {
	port: parseInt(process.env.PORT, 10),
	fetch: app.fetch,
};
