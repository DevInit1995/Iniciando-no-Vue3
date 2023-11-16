<template>
    <div>
        <PrimeiroComponente/>
        <p>O dado do app é: {{ testando }}</p>
        <LifeCycle/>
        <Pessoas/>
    </div>
</template>

<script>
    import PrimeiroComponente from './components/PrimeiroComponente.vue'
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoas from './components/Pessoas.vue'

        export default {
            name: 'App',
            components: {
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