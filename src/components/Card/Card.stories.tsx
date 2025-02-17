import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    component: Card,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
    args: {
        flipped: false,
        title: 'Title',
    },
}
