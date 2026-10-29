<script>
import JobForm from '../components/JobForm.vue'
import { API_URL } from '../api'

export default {
  name: 'AddJob',
  components: { JobForm },
  methods: {
    ajouter(job) {
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      })
        .then(response => response.json())
        .then(data => this.$router.push({ name: 'JobDetails', params: { id: data.id } }))
        .catch(err => console.log(err))
    }
  }
}
</script>

<template>
  <div>
    <router-link to="/">← Retour aux offres</router-link>
    <h1>Ajouter un emploi</h1>
    <JobForm texte-bouton="Ajouter" @valider="ajouter" />
  </div>
</template>
