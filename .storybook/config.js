import { configure } from '@storybook/react';

configure(
  require.context('../src', true, /\.stories\.(tsx?|mdx)$/),
  // require.context('../src', true, /\.stories.jsx$/),
  module,
);
