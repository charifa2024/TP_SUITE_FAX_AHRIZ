<script>
import { API_URL } from '../api'

export default {
  name: 'JobDetails',
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
    supprimer() {
      if (!confirm(`Voulez-vous vraiment supprimer l'offre « ${this.job.title} » ?`)) {
        return
      }
      fetch(`${API_URL}/${this.id}`, { method: 'DELETE' })
        .then(() => this.$router.push({ name: 'Home' }))
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
    <router-link to="/">← Retour aux offres</router-link>

    <p v-if="erreur" class="erreur">{{ erreur }}</p>
    <p v-else-if="!job">Chargement...</p>
    <div v-else class="carte details">
      <div class="carte-entete">
        <h1>{{ job.title }}</h1>
        <span class="badge">{{ job.type }}</span>
      </div>
      <p class="secondaire">{{ job.company }} · {{ job.location }}</p>
      <p><strong>Salaire :</strong> {{ job.salary }} DH / mois</p>
      <p><strong>Expérience :</strong> {{ job.experience }} an(s)</p>
      <p><strong>Date de création :</strong> {{ job.createdAt }}</p>
      <p><strong>Description :</strong></p>
      <p>{{ job.description }}</p>
      <div class="boutons">
        <router-link :to="{ name: 'EditJob', params: { id: job.id } }" class="bouton">Modifier</router-link>
        <button class="bouton danger" @click="supprimer">Supprimer</button>
      </div>
    </div>
  </div>
</template>
