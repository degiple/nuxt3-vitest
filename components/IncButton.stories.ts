// IncButton.stories.ts
import IncButton from './IncButton.vue'

export default {
  title: 'Components/IncButton',
  component: IncButton
}

const Template = (args) => ({
  components: { IncButton },
  setup() {
    return { args }
  },
  template: '<IncButton v-bind="args" />'
})

export const Default = Template.bind({})
