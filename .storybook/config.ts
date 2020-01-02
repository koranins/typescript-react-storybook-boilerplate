import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    showRoots: true,
  },
});

configure(
  require.context('../src', true, /\.stories\.(tsx?|mdx)$/),
  module,
);
