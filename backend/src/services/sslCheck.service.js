const tls = require("tls");

function checkSslCertificate(hostname) {
  return new Promise((resolve) => {
    const socket = tls.connect(
      {
        host: hostname,
        port: 443,
        servername: hostname,
        rejectUnauthorized: false,
        timeout: 5000
      },
      () => {
        const cert = socket.getPeerCertificate();

        if (!cert || Object.keys(cert).length === 0) {
          socket.end();
          return resolve({
            sslStatus: "Invalid",
            sslValid: false
          });
        }

        const now = new Date();
        const validTo = cert.valid_to ? new Date(cert.valid_to) : null;
        const expired = validTo ? validTo < now : true;

        socket.end();

        return resolve({
          sslStatus: expired ? "Expired" : "Valid",
          sslValid: !expired
        });
      }
    );

    socket.on("error", () => {
      resolve({
        sslStatus: "Invalid",
        sslValid: false
      });
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve({
        sslStatus: "Invalid",
        sslValid: false
      });
    });
  });
}

module.exports = { checkSslCertificate };