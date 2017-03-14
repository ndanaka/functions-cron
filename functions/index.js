var functions = require('firebase-functions');

exports.hourly_job =
  functions.pubsub.topic('hourly-tick').onPublish((event) => {
    console.log("This job is ran every hour!")
  });
