<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'



export default {
  // `setup` is a special hook dedicated for the Composition API.
  setup() {
    const isLoading = ref(true)

    // expose the ref to the template
    return {
      isLoading,
    }
  },

}
</script>
