const openProps = require("open-props");

module.exports = {
	plugins: [
		require("postcss-nesting"),
		require("autoprefixer"),
		require("postcss-jit-props")(openProps),
		require("cssnano"),
		require("postcss-preset-env"),
	],
};
