const PROXY_CONFIG = [
  {
    context: ["/api"],
    // target: "http://localhost:8080/",
    // target: "https://betha-v2.onrender.com/",
    secure: true,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;

// "start": "ng serve --proxy-config proxy.conf.js"
