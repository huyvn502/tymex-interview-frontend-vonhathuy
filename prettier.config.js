module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "none",
  semi: true,
  parser: "typescript",
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
  ],
};
