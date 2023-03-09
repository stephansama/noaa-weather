import type { Meta, StoryObj } from '@storybook/svelte';

import Search from '$lib/Search.svelte';

const meta = {
	title: 'Lib/Search',
	component: Search,
	tags: ['autodocs'],
	argTypes: {
		placeholder: { type: 'string' }
	}
} satisfies Meta<Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Tmp'
	}
};
