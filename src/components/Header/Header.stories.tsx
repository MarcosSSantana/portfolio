import type { Meta, StoryObj } from '@storybook/react-vite'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Nome que será exibido no cabeçalho',
      control: { type: 'text' },
    },
    email: {
      description: 'Email que será exibido com ícone de envelope',
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    name: 'João Silva',
    email: 'joao.silva@email.com',
  },
}
