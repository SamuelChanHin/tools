/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old subdomain homepage to new JSON formatter page
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "json-format.devexp.cc",
          },
        ],
        destination: "https://devexp.cc/json-formatter",
        permanent: true,
      },
      // Redirect old subdomain CSV page
      {
        source: "/csv-to-json",
        has: [
          {
            type: "host",
            value: "json-format.devexp.cc",
          },
        ],
        destination: "https://devexp.cc/csv-to-json",
        permanent: true,
      },
      // Redirect old subdomain Base64 page
      {
        source: "/base64",
        has: [
          {
            type: "host",
            value: "json-format.devexp.cc",
          },
        ],
        destination: "https://devexp.cc/base64",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
