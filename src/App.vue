<script setup lang='ts'>
  import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'
  import '@aws-amplify/ui-vue/styles.css'
  import Amplify from 'aws-amplify'
  import awsconfig from './aws-exports'

  Amplify.configure(awsconfig)

  const {route, user, signOut} = toRefs(useAuthenticator())
  const props = useAuthenticator()
</script>

<template>
    <v-app>
      <authenticator>

        <v-app-bar>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-app-bar-title>献立ヘルパー</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-logout" @click="signOut">Sign Out</v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          bottom
        >
          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main v-if="route === 'authenticated'">
          <router-view/>
          <h2>Hello {{user?.username}}!</h2>
        </v-main>

      </authenticator>
  </v-app>
</template>

<script lang='ts'>
import { defineComponent, toRefs } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
    return {
      drawer: false,
      items: [
        {
          title: '献立',
          icon: 'mdi-home',
          link: {name: 'MenuManagement'},
        },
        {
          title: 'レシピ',
          icon: 'mdi-home',
          link: {name: 'RecipeList'},
        },
        {
          title: '買い物リスト',
          icon: 'mdi-home',
          link: {name: 'ShoppingList'},
        }
      ]
    }
  },
})
</script>
