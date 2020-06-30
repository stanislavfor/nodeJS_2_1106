<template>
  <div>
    <header>
        <div class="logo">Быки и коровы</div>
        <div class="cart">
            <button class="btn-cart" @click="showLog = !showLog" >Логи</button>
            <keep-alive>
            <Log ref="log" v-show="showLog"/>
            </keep-alive>
        </div>
    </header>
    <main>
        <GameBody  />
    </main>    
  </div>
</template>
<script>
import Log from '../containers/Log.vue'
import GameBody from '../containers/GameBody.vue'

export default {
    components: { GameBody, Log },
     data() {
        return {
            showLog: false
        }
    },
     methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        },      
        post(url, item) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            }).then(d => d.json());
        }
     }
}
</script>