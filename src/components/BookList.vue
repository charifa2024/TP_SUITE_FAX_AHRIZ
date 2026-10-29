<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: { BookCard },
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  emits: ['toggle-favori', 'supprimer']
}
</script>

<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-favori="$emit('toggle-favori', $event)"
    >
      <template #actions>
        <button @click="$emit('supprimer', book.id)">Supprimer</button>
      </template>
    </BookCard>
  </div>
</template>
