function makeGetRequest(url,method) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else  {
            xhr = new window.ActiveXObject("Microsoft.XMLHTTP")
        }
            
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200){
                    reject(xhr.responceText)
                }
            
                const body = JSON.parse(xhr.responseText)
                resolve(body)
    
            }
        };
        xhr.onerror = function(err){
            reject(err)
        }
        xhr.open(method, url);
        xhr.send();

    })
}

function makePostRequest(url,method,data) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else  {
            xhr = new window.ActiveXObject("Microsoft.XMLHTTP")
        }
            
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200){
                    reject(xhr.responceText)
                }
            
                const body = JSON.parse(xhr.responseText)
                resolve(body)
    
            }
        };
        xhr.onerror = function(err){
            reject(err)
        }
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        console.dir(data)
        console.log(JSON.stringify(data))
        xhr.send(JSON.stringify(data));

    })
}

Vue.component('alert-window', {
    props: {
        isVisible: false,
        wait: 9000,
    },
    computed:{
        showEr(){
            return this.$store.state.error != null && this.$store.state.error != "";
        },
        error: {
            get(){
                return this.$store.state.error;
            },
            set(error){
                return this.$store.commit('SET_ERROR',error);
            }
        },
    },
    methods: {
        showError(error) {
            console.dir(error);
            this.$store.dispatch('addError',error.message);
            setTimeout(() => this.clear(), this.wait);
        },
        clear() {
            this.$store.dispatch('addError',null);
        }

    },
    mounted() { //приложение монтируется
    },
    template: `
        <transition name="fade">
            <div class="allertMessage" v-if="showEr">Ошибка: {{ error }}</div>
        </transition>
    `
})

const logPage = Vue.component('log-page', {
    template:` 
        <div>
            <div  v-for="logitem in listLogs">
                <div >{{ logitem.date }}</div>  <div >{{ logitem.data }}</div>  
            </div>
        </div>
    `,
    data: () => ({
        logs: [],
    }),
    computed: {
        listLogs() {
            //return this.$store.getters.getLogs;
            return this.$store.state.logs;
        },
        
    },
    mounted() { //приложение монтируется
        this.$store.dispatch('listLogs');
    }
})

const gamePage = Vue.component('game-page', {
    template:` 
        <div> 
            <alert-window ref="notification" ></alert-window>
            <p>Введите 4-х значное число</p>
            <button class="start-button" v-if="robotNumber" @click="robotGenerate">Загадать новое число</button>
            <button class="start-button" v-else @click="robotGenerate">Начать игру</button>
            <form v-if="robotNumber" class="gamer-form" @submit.prevent="compareNumbers">
                
                Введите число: <input class="gamer-variant" name="humanNumber" v-model="humanNumber"> <!--@input debounce-->
                <input type="Submit" value="Отправить"/>
            </form>
            <div>
            <h2>Текущий результат</h2>
                <ul class="game-result">
                    <li>
                        Попытка: {{ attempts }}
                    </li>
                    <li >
                        Быки: {{ bulls }}
                    </li>
                    <li  >
                        Коров: {{ cows }}
                    </li>
                </ul>
            </div> 
        </div>
    `,
    data: () => ({
        name: "Быки и коровы",
        humanNumber: "",
        robotNumber: "",
        attempts: 0,
        cows: 0,
        bulls: 0,
        // results: []
    }),
    methods: {
        compareNumbers(e) {
            e.preventDefault();
            this.attempts++;
            this.bulls = 0;
            this.cows = 0;
            let excludePosition = [];
            let validation = this.validationNumber(this.humanNumber);
            if (validation) {
                let humanArray = this.humanNumber.split('');
                this.robotNumber.split('').forEach((el,index) => {
                    if (el == humanArray[index]) {
                        this.bulls++;
                        excludePosition.push(index);
                    }else if (humanArray.includes(el)) {
                        this.cows++;
                    }
                })
                this.writeLog({
                    attempt: this.attempts,
                    robotNumber: this.robotNumber,
                    humanNumber: this.humanNumber,
                    cows: this.cows,
                    bulls: this.bulls,
                    winner: this.bulls==4 ? "gamer" : "robot"});
            }

        },
        validationNumber(number) {
            isNumber = false;
            if (number.length != 4) {
                this.$refs.notification.showError({message:"Введите 4х значное число"}); //??? life cicle ???
                return false;
            } else if ((typeof number == 'string' || typeof number == 'number') && !isNaN(number - 0) && number !== '') {
                return true;
            } else {
                this.$refs.notification.showError({message:"Введите 4х значное число"}); //??? life cicle ???
                return false;
            }
        },
        writeLog(results) {
            var now = new Date();
            this.$store.dispatch({
                type: 'addItemToLog',
                logItem: {
                    date: now.toUTCString(), 
                    data: `
                        Попытка: ${results.attempt}\n
                        robotNumber: ${results.robotNumber}\n
                        humanNumber: ${results.humanNumber}\n
                        cows: ${results.cows}\n
                        bulls: ${results.bulls}\n
                        winner: ${results.winner}\n\n
                    `
                }});
            // console.log(this.results[this.results.length-1]);
        },
        robotGenerate() {
            let val =  Math.floor (Math.random() * 9999) + "";
            if (val.length == 1) {
                val = "000" + val;
            }else if (val.length == 2) {
                val = "00" + val;
            }else if (val.length == 3) {
                val = "0" + val;
            }
            this.robotNumber = val;
            this.attempts = 0;
            this.cows = 0;
            this.bulls = 0;
        }
    },
    computed: {
        upperCaseName() {
            return this.name.toUpperCase()
        }
    },
    mounted() {

    }
});

const routes = [
    {
        name: 'home',
        path: "/",
        component: gamePage
    },
    {
        name: 'log',
        path: "/log",
        component: logPage
    }
];

const router = new VueRouter({
    mode: `history`, //убирает /#/ в адресе в браузере
    routes
})

const store = new Vuex.Store({
    state: {
        logs: [],
        error: null
    },
    getters: {
        getLogs(state) {
            return state.logs;
        },
        getError(state) {
            return state.error;
        }
    },
    mutations: {
        SET_LOGS(state, logs){
            state.logs = logs;
        },
        ADD_LOG_ITEM(state, logItem){
            state.logs.push(logItem);
        },
        SET_ERROR(state, error){
            state.error = error;
        },
    },
    actions: {
        addError(context,error) {
            console.log(error)
            context.commit('SET_ERROR', error);
        },
        async listLogs(context) {//callback
            try{
                const logs = await makeGetRequest(`/api/log`, 'GET') //async makeGetRequest  `${API_URL}catalog.json`
                context.commit('SET_LOGS', logs);
            }catch(e){
                console.error(e)
                this.$refs.notification.showError({message:"Сервер недоступен"});
            }

        },
        async addItemToLog(context,logItem) {
            try{
                    context.commit('ADD_LOG_ITEM', logItem.logItem)
                    logItems = await makePostRequest(`/api/log`, 'POST' , logItem.logItem) //async makeGetRequest  `${API_URL}catalog.json`
                    console.dir(logItems)
            }catch(e){
                console.error(e)
                this.$refs.notification.showError({message:"Сервер недоступен"});
            }
        }
    },
});

const app = new Vue({
    el: "#app",
    router,
    store,
    data: {
        name: "Быки и коровы",
        humanNumber: "",
        robotNumber: "",
        attempts: 0,
        cows: 0,
        bulls: 0,
        results: []
    },
    methods: {
    },
    computed: {
        logs: {
            get() {
                return this.$store.state.logs;
            },
            set(addLogItem) {
                return this.$store.commit('ADD_LOG_ITEM',addLogItem);
            }
        }
    },
    mounted() {

    }
});