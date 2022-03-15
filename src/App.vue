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
        <v-main v-if="route === 'authenticated'">
          <router-link to='/'>献立</router-link>
          <router-link to='/shoppinglist'>買い物リスト</router-link>
          <router-view/>
          <h2>Hello {{user?.username}}!</h2>
          <button @click="signOut">Sign Out</button>
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
      //
    }
  },
})
</script>
