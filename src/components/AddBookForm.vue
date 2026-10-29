<script>
function livreVide() {
  return {
    title: '',
    author: '',
    year: null,
    genre: '',
    isFav: false
  }
}

export default {
  name: 'AddBookForm',
  emits: ['ajouter'],
  data() {
    return {
      newBook: livreVide(),
      genres: ['Roman', 'Conte', 'Dystopie', 'Roman historique', 'Autobiographie', 'Informatique', 'Poésie', 'Science-fiction']
    }
  },
  computed: {
    formulaireValide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== ''
    }
  },
  methods: {
    ajouterLivre() {
      if (!this.formulaireValide) {
        return
      }
      this.$emit('ajouter', { ...this.newBook })
      this.newBook = livreVide()
      this.$refs.titreInput.focus()
    }
  },
  mounted() {
    this.$refs.titreInput.focus()
  }
}
</script>

<template>
  <form class="formulaire" @submit.prevent="ajouterLivre">
    <h2>Ajouter un livre</h2>
    <input ref="titreInput" type="text" v-model.trim="newBook.title" placeholder="Titre">
    <input type="text" v-model.trim="newBook.author" placeholder="Auteur">
    <input type="number" v-model.number="newBook.year" placeholder="Année">
    <select v-model="newBook.genre">
      <option value="">Genre</option>
      <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
    </select>
    <label>
      <input type="checkbox" v-model="newBook.isFav"> Favori
    </label>
    <button type="submit" :disabled="!formulaireValide">Ajouter</button>
  </form>
</template>
