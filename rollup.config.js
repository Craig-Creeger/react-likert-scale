import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	// core input options
	external: ['react'],
	input: './src/likert.js',
	output: {
		name: 'Likert'
	},
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
