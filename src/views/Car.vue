<template>
<div class="car">
    <header>购物车</header>
    <main>
        <ul>
            <li v-for="(item,index) in carData" :key="index">
                <input type="checkbox" v-model="item.checked">
                <img :src="item.url" alt="">
                单价：{{item.price}}
                <button @click="REDUCE_CAR_DATA(item.id)">-</button>
                数量：{{item.count}}
                <button @click="item.count++">+</button>
            </li>
        </ul>
        全选：<input type="checkbox" v-model="allChck">
        总价：{{price}}
    </main>
    <footer>
        <MyFooter />
    </footer>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
import {
    mapGetters
} from "vuex";
import {
    mapMutations
} from "vuex";

export default {
    computed: {
        ...mapState(["carData"]),
        ...mapGetters(["price"]),
        allChck: {
            get() {
                return this.carData.every(item => item.checked)
            },
            set(val) {
                this.carData.forEach(item => item.checked = val)
            }
        }
    },
    methods: {
        ...mapMutations(["REDUCE_CAR_DATA"])
    }
}
</script>

<style lang="scss">
.car {
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
