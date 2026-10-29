<script>
function emploiVide() {
  return {
    title: '',
    company: '',
    location: '',
    type: 'CDI',
    salary: null,
    experience: 0,
    createdAt: new Date().toISOString().slice(0, 10),
    description: ''
  }
}

export default {
  name: 'JobForm',
  props: {
    job: {
      type: Object,
      default: null
    },
    texteBouton: {
      type: String,
      default: 'Enregistrer'
    }
  },
  emits: ['valider'],
  data() {
    return {
      form: this.job ? { ...this.job } : emploiVide(),
      types: ['CDI', 'CDD', 'Stage', 'Freelance'],
      erreur: ''
    }
  },
  computed: {
    formulaireValide() {
      return this.form.title.trim() !== ''
        && this.form.company.trim() !== ''
        && this.form.description.trim() !== ''
        && this.form.salary !== null && this.form.salary !== '' && this.form.salary >= 0
        && this.form.experience !== null && this.form.experience !== '' && this.form.experience >= 0
        && this.form.createdAt !== ''
    }
  },
  methods: {
    soumettre() {
      if (!this.formulaireValide) {
        this.erreur = 'Veuillez remplir correctement tous les champs obligatoires.'
        return
      }
      this.erreur = ''
      this.$emit('valider', { ...this.form })
    }
  }
}
</script>

<template>
  <form class="formulaire" @submit.prevent="soumettre">
    <label>Titre *
      <input type="text" v-model.trim="form.title">
    </label>
    <label>Entreprise *
      <input type="text" v-model.trim="form.company">
    </label>
    <label>Ville
      <input type="text" v-model.trim="form.location">
    </label>
    <label>Type de contrat
      <select v-model="form.type">
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </label>
    <label>Salaire (DH / mois) *
      <input type="number" min="0" v-model.number="form.salary">
    </label>
    <label>Années d'expérience *
      <input type="number" min="0" v-model.number="form.experience">
    </label>
    <label>Date de création *
      <input type="date" v-model="form.createdAt">
    </label>
    <label>Description *
      <textarea rows="5" v-model.trim="form.description"></textarea>
    </label>
    <p v-if="erreur" class="erreur">{{ erreur }}</p>
    <button type="submit" class="bouton" :disabled="!formulaireValide">{{ texteBouton }}</button>
  </form>
</template>
