module.exports = {
  // Other webpack configurations...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
};
