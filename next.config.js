// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true
});
module.exports = {
    webpack: config => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                {
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]'
                    }
                },
                'babel-loader',
                'styled-jsx-css-loader'
            ]
        });

        return config;
    }
};
