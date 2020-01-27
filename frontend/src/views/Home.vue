<template>
  <div class="home">
    <router-link to="/addMemory"><b-button>Add Memory</b-button></router-link>
    <memories-table class="mt-3" :items="memories" />
  </div>
</template>

<script>
// @ is an alias to /src
import MemoriesTable from '@/components/MemoriesTable.vue'

export default {
  name: 'home',
  components: {
    MemoriesTable
  },
  created () {
    this.$store.dispatch('memories/setMemories')
  },
  computed: {
    memories () {
      return this.$store.state.memories.memories
    }
  }
}
</script>
