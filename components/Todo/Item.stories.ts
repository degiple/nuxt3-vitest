// TodoItem.stories.ts

import TodoItem from './Item.vue'

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
  argTypes: {
    removeTodo: { action: 'removeTodo' }
  }
}

const Template = (args) => ({
  components: { TodoItem },
  setup() {
    return { args }
  },
  template: '<TodoItem v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  todo: {
    text: 'Sample Todo Item'
  }
}
