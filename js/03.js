const app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Mate',
        accountant: 0
    },
    computed:{
        inverted(){
            return this.message.split('').reverse().join('');
        }
    }
})