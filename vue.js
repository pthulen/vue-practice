const app = Vue.createApp({
    data(){
        return {
            text: "Hello Vue",
            music: [ 
                { band: "Phoenix", song:"Listomania"}, 
                { band: "The Black Keys", song: "Gold on the ceiling"}, 
                { band: "The Killers", song: "Shot at the night"} 
            ],
        }
    }
})

app.mount('#app');