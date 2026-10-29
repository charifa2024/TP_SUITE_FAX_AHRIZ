<script>
export default {
  name: 'JobCard',
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="carte">
    <div class="carte-entete">
      <h3>{{ job.title }}</h3>
      <span class="badge">{{ job.type }}</span>
    </div>
    <p class="secondaire">{{ job.company }} · {{ job.location }}</p>
    <p>{{ job.salary }} DH / mois · {{ job.experience }} an(s) d'expérience</p>
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }" class="bouton">Voir les détails</router-link>
  </div>
</template>
