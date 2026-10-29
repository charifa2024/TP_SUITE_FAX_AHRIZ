<script>
import JobForm from '../components/JobForm.vue'
import { API_URL } from '../api'

export default {
  name: 'EditJob',
  components: { JobForm },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      job: null,
      erreur: ''
    }
  },
  methods: {
    modifier(job) {
      fetch(`${API_URL}/${this.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      })
        .then(() => this.$router.push({ name: 'JobDetails', params: { id: this.id } }))
        .catch(err => console.log(err))
    }
  },
  mounted() {
    fetch(`${API_URL}/${this.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Emploi introuvable')
        }
        return response.json()
      })
      .then(data => {
        this.job = data
      })
      .catch(err => {
        console.log(err)
        this.erreur = "Cet emploi n'existe pas."
      })
  }
}
</script>

<template>
  <div>
    <router-link :to="{ name: 'JobDetails', params: { id } }">← Retour aux détails</router-link>
    <h1>Modifier l'emploi</h1>
    <p v-if="erreur" class="erreur">{{ erreur }}</p>
    <p v-else-if="!job">Chargement...</p>
    <JobForm v-else :job="job" texte-bouton="Enregistrer les modifications" @valider="modifier" />
  </div>
</template>
