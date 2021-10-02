const app = Vue.createApp({
    data(){
        return{
            firstName:'John',
            secondName:'Doe',
            email:'brad.gibson@example.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/75.jpg',
        }
    },
    methods:{
        async getUser(){
            const response = await fetch('https://randomuser.me/api')
            const {results} = await response.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.secondName= results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')