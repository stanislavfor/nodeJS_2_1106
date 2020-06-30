<template>
  <div class="records">
    <h2>Таблица рекордов</h2>
    <textarea rows="10" v-model="records"></textarea>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'Records',
  data() {
    return {
      records: '',
    }
  },
  mounted() {
    this.getRecords(); 
  },
  methods: {
    getRecords() {
        fetch('/api/log/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.text())
        .then(data => this.records = data)
    }
  }
}
</script>
<style scoped>
textarea {
  width: 100%;
}
</style>