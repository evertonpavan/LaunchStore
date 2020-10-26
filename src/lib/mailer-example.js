const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "87fdcdaf9ff049",
      pass: "cde951791e748b"
    }
})
