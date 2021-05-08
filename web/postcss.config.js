module.exports = {
  "plugins": [
    "postcss-color-mod-function",
    "postcss-custom-properties",
    "postcss-easy-import",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": true
        }
      }
    ]
  ]
}

