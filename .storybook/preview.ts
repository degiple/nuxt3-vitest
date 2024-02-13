import type { Preview } from '@storybook/vue3'
import { withVuetifyTheme } from './withVuetifyTheme.decorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [withVuetifyTheme]
}

export default preview
