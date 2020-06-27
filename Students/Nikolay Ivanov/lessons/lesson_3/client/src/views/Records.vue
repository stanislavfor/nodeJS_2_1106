<template>
  <div class="records">
    <h1>This is an Records page</h1>
  </div>
</template>

<script>
export default {
  name: 'Records',
  mounted() {
   
    this.sendToServer();
  },
  methods: {
    sendToServer() {
        console.log('sendToServer');
        let item = 'test';
        fetch('/api/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text: item})
        })
        .then(data => console.log(data))
    }
  }
}
</script>