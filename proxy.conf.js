const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://betha-v2.onrender.com/",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
