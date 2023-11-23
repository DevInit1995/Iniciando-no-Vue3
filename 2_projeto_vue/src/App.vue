<template>
    <div>
        <Header />
        <PrimeiroComponente/>
        <p class="paragrafo-pai">O dado do app é: {{ testando }}</p>
        <LifeCycle/>
        <Pessoas/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import PrimeiroComponente from './components/PrimeiroComponente.vue'
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoas from './components/Pessoas.vue'

        export default {
            name: 'App',
            components: {
                Header,
                PrimeiroComponente,
                LifeCycle,
                Pessoas
            },
            data() {
                return {
                    testando: "Teste",
                }
            }
        }
</script>

<style>
    body {
        background-color: #333;
        color: #FFF;
    }

    a {
        color: red;
    }

    .teste {
        background-color: #000;
    }
</style>