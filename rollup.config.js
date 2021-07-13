
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript';
import bundleScss from 'rollup-plugin-bundle-scss';
export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'es/index.js',
            format: 'esm'
        },
        plugins: [
            uglify(),
            typescript(),
        ]
    },

    {
        input: 'src/index.ts',
        output: {
            name: 'vhUnit',
            file: 'umd/index.js',
            format: 'umd'
        },
        plugins: [
            uglify(),
            typescript(),
        ]
    },
    {
        input: 'src/scss.ts',
        output: {
            file: 'es/scss.js',
            format: 'es'
        },
        plugins: [
            typescript(),
            bundleScss({
                output: '../style/index.scss'
            }),
        ]
    },

]