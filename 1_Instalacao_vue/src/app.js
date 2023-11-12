// data retorna dados la para o frontEnd da aplicação
const MyNameApp = {
    data(){
        return{
            name: "Jhon",
            age: 28,
            input_name: "",
            input_age: 0
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);
            console.log(this.input_age);

            this.name = this.input_name;
            this.age = this.input_age;
        }
    }
}
//parei aula 3
Vue.createApp(MyNameApp).mount("#app");