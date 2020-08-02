module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    printWidth: 120,
    parser: "babel-eslint"
  },

  rules: {
    "vue/no-use-v-if-with-v-for": "off",
    "no-useless-escape": "off",
    "no-unused-vars": "off",
    "no-async-promise-executor": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
