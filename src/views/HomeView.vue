<template>
  <div class="home">
    <h1>Home</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>loading ...</div>
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts'

import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  setup() {
    const { posts, load, error } = getPosts()
    load()

    return { posts, error }
  },
  components: {
    PostList,
  },
}
</script>
