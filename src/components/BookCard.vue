<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
      validator(book) {
        return typeof book.title === 'string' && book.title.trim() !== ''
      }
    }
  },
  emits: ['toggle-favori'],
  data() {
    return {
      detailsVisibles: false
    }
  }
}
</script>

<template>
  <div class="book" :class="{ favori: book.isFav }">
    <h2>{{ book.title }}</h2>
    <p>{{ book.author }} - {{ book.year }}</p>
    <span v-if="book.isFav" class="badge-favori">Favori</span>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <div>
      <button @click="$emit('toggle-favori', book.id)">Favori</button>
      <button @click="detailsVisibles = !detailsVisibles">Détails</button>
    </div>
    <p v-show="detailsVisibles">{{ book.genre }}</p>
  </div>
</template>
