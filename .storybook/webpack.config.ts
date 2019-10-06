import { Configuration, Loader } from 'webpack';
import merge from 'webpack-merge';

type BaseConfig = {
  config: Configuration,
  mode: 'DEVELOPMENT' | 'PRODUCTION',
};

const babelLoader: Loader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: ['@babel/react', '@babel/typescript'],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  },
};

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          babelLoader,
          require.resolve('react-docgen-typescript-loader'),
        ],
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
