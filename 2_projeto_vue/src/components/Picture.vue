<template>
    <!--sintaxe com v-bind resumido com :-->
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            avatar: "/Img/avatar.png",
            descricao: "Jhon Santos"
        }
    }
}
</script>
