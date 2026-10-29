<template>
  <div>
    <BookCardSetup
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <template #actions>
        <router-link :to="`/livre/${book.id}`">Voir détails</router-link>
      </template>
    </BookCardSetup>
  </div>
</template>

<script>
import BookCardSetup from './BookCardSetup.vue'

export default {
  name: 'BookList',
  components: { BookCardSetup },
  props: {
    books: { type: Array, required: true }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>
