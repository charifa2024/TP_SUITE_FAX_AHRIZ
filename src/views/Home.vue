<script>
import JobCard from '../components/JobCard.vue'
import { API_URL } from '../api'

export default {
  name: 'Home',
  components: { JobCard },
  data() {
    return {
      jobs: [],
      loading: true,
      erreur: ''
    }
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.jobs = data
        this.loading = false
      })
      .catch(err => {
        console.log(err)
        this.erreur = 'Impossible de charger les emplois. Vérifiez que json-server est lancé.'
        this.loading = false
      })
  }
}
</script>

<template>
  <div>
    <div class="titre-page">
      <h1>Offres d'emploi</h1>
      <router-link :to="{ name: 'AddJob' }" class="bouton">+ Ajouter un emploi</router-link>
    </div>

    <p v-if="loading">Chargement...</p>
    <p v-else-if="erreur" class="erreur">{{ erreur }}</p>
    <p v-else-if="jobs.length === 0">Aucune offre disponible.</p>
    <div v-else class="grille">
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>
