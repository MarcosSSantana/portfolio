import type { Meta, StoryObj } from '@storybook/react-vite'

import InfoCard from './InfoCard'

const meta: Meta<typeof InfoCard> = {
  title: 'Components/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Título que será exibido no cabeçalho do card',
      control: { type: 'text' },
    },
    year: {
      description: 'Ano que será exibido abaixo do título',
      control: { type: 'text' },
    },
    desc: {
      description: 'Descrição que será exibida no corpo do card',
      control: { type: 'text' },
    },
    index: {
      description: 'Índice para controlar a animação de entrada',
      control: { type: 'number' },
    },
  },
}

export default meta
type Story = StoryObj<typeof InfoCard>

export const Default: Story = {
  args: {
    title: 'Desenvolvedor Full Stack',
    year: '2023',
    desc: 'Desenvolvimento de aplicações web modernas utilizando React, Node.js e TypeScript.',
    index: 0,
  },
}
