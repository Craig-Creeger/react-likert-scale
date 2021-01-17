// Converts latest ES2015+ code to your target level of Javascript
import babel from '@rollup/plugin-babel';

// Needed to import CSS and convert it to Javascript
import postcss from 'rollup-plugin-postcss';

// Needed to import the dependency packages (md5, classnames)
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// This will minify the output.
import {terser} from 'rollup-plugin-terser';

export default {
	// core input options
	input: './src/likert.js',
	output: [
		{
			file: 'dist/likert.es.js',
			format: 'es',
			globals: {
				react: 'React'
			},
			plugins: [terser()]
		}
	],
	external: ['react'],
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		}),
		postcss({
			plugins: []
		}),
		resolve(),
		commonjs()
	]
};
