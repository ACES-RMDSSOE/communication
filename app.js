const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

mg.messages
  .create("mail.aces-rmdssoe.tech", {
    from: "ACES RMDSSOE <postmaster@mail.aces-rmdssoe.tech>",
    to: ["hello@mail.aces-rmdssoe.tech"],
    template: "aces certificate download notification",
    "h:X-Mailgun-Variables": { recipient_fname: "%recipient_fname%" },
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error
