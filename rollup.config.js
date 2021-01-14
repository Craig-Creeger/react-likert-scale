import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

// Needed to import CSS and convert it to Javascript
import postcss from 'rollup-plugin-postcss';

// Needed to import the dependency packages (md5, classnames)
import commonjs from '@rollup/plugin-commonjs';

export default {
	// core input options
	input: './src/likert.js',
	output: [
		{
			name: 'react-likert-scale',
			file: 'dist/likert.umd.js',
			format: 'umd',
			globals: {
				react: 'React'
			}
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
