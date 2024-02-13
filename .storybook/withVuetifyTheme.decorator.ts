// import { VApp } from 'vuetify/components'
// import { Decorator, StoryContext } from '@storybook/vue3'

// export const withVuetifyTheme: Decorator = (story, context) => {
//   return {
//     components: { story, VApp },
//     // それぞれのstoryをv-appタグでラップ
//     template: `
//       <v-app>
//           <story/>
//       </v-app>
//     `
//   }
// }

import { app } from '@storybook/vue3'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Vuetifyのスタイル

// Vuetifyインスタンスを作成
const vuetify = createVuetify({
  components,
  directives
  // ここにVuetifyのオプションを追加
})

// StorybookのアプリケーションインスタンスにVuetifyを適用
app.use(vuetify)

export const withVuetifyTheme = (story, context) => {
  const wrapped = story(context)
  return {
    ...wrapped,
    vuetify,
    template: '<v-app><story/></v-app>'
  }
}
