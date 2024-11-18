import Hapi from "@hapi/hapi";

async function init() {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.events.on('log', (event, tags) => {
    if (tags.error) {
      console.error('Error:', event.data);
    }
  });

  try {
    await server.start();
    console.log("Server running on %s", server.info.uri);
  } catch (err) {
    server.log(['error'], err);
  }
}


init();
