import type { Meta, StoryObj } from '@storybook/svelte';

import Footer from '$lib/Footer.svelte';

const meta = {
	title: 'Lib/Footer',
	component: Footer,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {}
};
