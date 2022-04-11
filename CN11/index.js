const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const app = require("express")();

Sentry.init({
  dsn: "https://c30e1a64fa1b41069c6e440bc712c8ad@o1199131.ingest.sentry.io/6321621",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const rejectPromise = () =>
  new Promise((resolve, reject) => {
    reject("Rejected due to some xyz exception");
  });

app.get("/", (req, res) => {
  const currentDate = new Date();
  res.send(`${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`);
});

app.get("/trigger-sentry", async (req, res) => {
  try {
    await rejectPromise();
    res.send("request successfull");
  } catch (error) {
    Sentry.captureException(error);
    res.send("something went wrong");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
