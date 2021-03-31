module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-at-rules-variables"),
    require("postcss-each-variables"),
    require("postcss-each"),
    require("tailwindcss"),
    require("postcss-nested"),
    //require("postcss-custom-properties"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer")
  ]
};
