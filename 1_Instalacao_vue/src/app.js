// data retorna dados la para o frontEnd da aplicação
const MyNameApp = {
    data(){
        return{
            name: "Jhon",
            age: 28,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}
//parei aula 3
Vue.createApp(MyNameApp).mount("#app");