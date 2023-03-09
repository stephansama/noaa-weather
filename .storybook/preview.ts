import type { Preview } from '@storybook/svelte';

import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/scss/bootstrap.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
		backgrounds: { default: 'light' }
	}
};

export default preview;
