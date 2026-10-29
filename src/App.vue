<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

const initialBooks = [
  { id: 1, title: "L'Étranger", author: 'Albert Camus', year: 1942, genre: 'Roman', isFav: true },
  { id: 2, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943, genre: 'Conte', isFav: false },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopie', isFav: true },
  { id: 4, title: 'Les Misérables', author: 'Victor Hugo', year: 1862, genre: 'Roman historique', isFav: false },
  { id: 5, title: 'Le Pain nu', author: 'Mohamed Choukri', year: 1973, genre: 'Autobiographie', isFav: true },
  { id: 6, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Informatique', isFav: false }
]

export default {
  name: 'App',
  components: { AddBookForm, BookList },
  data() {
    return {
      books: [],
      loading: true
    }
  },
  computed: {
    nombreFavoris() {
      return this.books.filter(book => book.isFav).length
    }
  },
  methods: {
    ajouterLivre(livre) {
      const nouvelId = this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) + 1 : 1
      this.books.push({ ...livre, id: nouvelId })
    },
    supprimerLivre(id) {
      this.books = this.books.filter(book => book.id !== id)
    },
    toggleFavori(id) {
      const book = this.books.find(book => book.id === id)
      if (book) {
        book.isFav = !book.isFav
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  }
}
</script>

<template>
  <h1>Catalogue de livres</h1>
  <AddBookForm @ajouter="ajouterLivre" />
  <p class="chargement" v-show="loading">Chargement des livres...</p>
  <p v-show="!loading">{{ nombreFavoris }} livre(s) favori(s)</p>
  <BookList :books="books" @toggle-favori="toggleFavori" @supprimer="supprimerLivre" />
</template>
