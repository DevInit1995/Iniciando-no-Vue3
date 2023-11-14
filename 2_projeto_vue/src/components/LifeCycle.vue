<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: 'LifeCicle',
    data() {
        return {
            nome: 'Ainda não sei',
        }
    },
    created() {
       setTimeout(() => {
        this.nome = 'Jhon Santos'
       }, 1000);
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Jhon Jhon'
        }, 2000);
    }
}
</script>
