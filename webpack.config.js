const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

// const ESLintPlugin = require('eslint-webpack-plugin')
// require('dotenv').config();

// module.exports = {
//   mode: 'development',
//   entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
//   output: {
//     filename: 'static/js/main.[contenthash:6].js',
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?ts$|\.tsx?$/, // Sẽ sử dụng babel-loader cho những file .js
//         exclude: /node_modules/, // Loại trừ thư mục node_modules
//         use: ["babel-loader"]
//       },
//       {
//         test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   },
//   // Chứa các plugins sẽ cài đặt trong tương lai
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'public', 'index.html'),
//       filename: 'index.html'
//     }),
//     // new ESLintPlugin({
//     //   extensions: ['.tsx', '.ts', '.js', '.jsx']
//     // })
//   ],
//   devServer: {
//     hot: true, // enable Hot Module Replacement, kiểu như reload nhanh
//     port: 3000, // Chạy port 3000 khi dev
//     historyApiFallback: true, // Phải set true nếu không khi bạn dùng lazyload module React thì sẽ gặp lỗi không load được file.
//     // Cấu hình phục vụ file html trong public
//     static: {
//       directory: path.resolve(__dirname, 'public', 'index.html'),
//       serveIndex: true,
//       watch: true // khi thay đổi content trong index.html thì cũng sẽ reload
//     }
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js'],
//   },
// };

/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isAnalyze = Boolean(env?.analyze);

  const config = {
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      // alias: {
      //   '@pages': path.resolve(__dirname, './src/pages')
      // }
    },
    entry: ['./src/index.js'],
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isProduction ? 'static/media/[name].[contenthash:6].[ext]' : '[path][name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isProduction ? 'static/fonts/[name].[ext]' : '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    output: {
      filename: 'static/js/main.[contenthash:6].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public', 'index.html'),
        serveIndex: true,
        watch: true
      }
    },
    devtool: isProduction ? false : 'source-map',
    plugins: [
      new Dotenv(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            filter: (name) => {
              return !name.endsWith('index.html');
            }
          }
        ]
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html'
      })
    ]
  };

  if (isProduction) {
    config.plugins = [
      ...config.plugins,
      new webpack.ProgressPlugin(),
      new CompressionPlugin({
        test: /\.(css|js)$/,
        algorithm: 'brotliCompress'
      }),
      new CleanWebpackPlugin()
    ];
    if (isAnalyze) {
      config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];
    }
    config.optimization = {
      minimizer: [
        `...`,
        new CssMinimizerPlugin()
      ]
    };
  }

  return config;
};