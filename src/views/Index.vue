<template>
<div class="index">
    <header>
        <input type="text" placeholder="请输入搜索内容" @focus="goSearch">
    </header>
    <main>
        <div class="banner">
            <Banner />
        </div>
        <div class="list">
            <template v-for="(item,index) in initData">
                <ListItem :key="index" :item="item" />
                <button @click="ADD_CAR_DATA(item)" :key="item.id">加入购物车</button>
            </template>
        </div>
    </main>
    <footer>
        <MyFooter />
    </footer>
</div>
</template>

<script>
import Banner from '@/components/Banner';
import {
    mapActions
} from "vuex";
import {
    mapState
} from "vuex";
import {
    mapMutations
} from "vuex";

export default {
    components: {
        Banner,
    },
    methods: {
        ...mapActions(["GET_INIT_DATA"]),
        ...mapMutations(["ADD_CAR_DATA"]),
        goSearch() {
            this.$router.push("/search")
        }
    },
    created() {
        this.$http.get("/api/list").then(result => {
            this.GET_INIT_DATA(result.data)
            console.log(result.data)
        })
    },
    computed: {
        ...mapState(["initData"])
    }
}
</script>

<style lang="scss">
.index {
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

        input {
            width: 250px;
            height: 36px;
            border: none;
            border-radius: 15px;
            padding-left: 15px;
        }
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
