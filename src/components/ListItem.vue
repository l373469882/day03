<template>
<dl>
    <dt>
        <img :src="item.url" alt="">
    </dt>
    <dd>
        <p> {{item.title}} </p>
        <p> {{item.price}} </p>
    </dd>
</dl>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
dl {
    display: flex;
    margin: 5px;
}
</style>
