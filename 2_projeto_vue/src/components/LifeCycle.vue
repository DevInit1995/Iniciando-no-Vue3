<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: 'LifeCicle',
    data() {
        return {
            nome: 'Ainda não',
        }
    },
    created() {
       setTimeout(() => {
        this.nome = 'Jhon Santos'
       }, 1000);

       this.lifeCycle();
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Jhon Jhon'
        }, 8000);

        this.lifeCycle();
    },
    methods: {
        lifeCycle() {
            console.log("Executou");
        }
    }
}
</script>
