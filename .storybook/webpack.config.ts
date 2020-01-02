import { Configuration, Loader } from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

type BaseConfig = {
  config: Configuration,
  mode: 'DEVELOPMENT' | 'PRODUCTION',
};

const babelLoader: Loader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [
      require.resolve('@babel/preset-typescript'),
      require.resolve('@babel/preset-react'),
    ],
  },
};

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: babelLoader,
        include: path.resolve(__dirname, '../'),
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};

/**
 * Storybook will call this function during build process.
 * See link below for more details:
 * https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes
 */
export default async (baseConfig: BaseConfig): Promise<Configuration> =>
  merge(baseConfig.config, config);
