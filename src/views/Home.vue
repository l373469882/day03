<template>
<div class="home">
    <header>个人中心</header>
    <main></main>
    <footer>
        <MyFooter />
    </footer>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        height: 46px;
        background: orange;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    main {
        flex: 1;
        overflow: auto;
    }

    footer {
        height: 46px;
        background: orange;
    }
}
</style>
