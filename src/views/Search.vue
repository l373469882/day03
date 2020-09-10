<template>
<div class="ipt">
    <div class="inp">
        <input type="text" placeholder="请搜索内容" @input="submit" v-model="val">
    </div>
    <div class="list">
        <ListItem v-for="(item,index) in arr" :key="index" :item="item" />
    </div>
    <div class="footer">
        <MyFooter />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            val: "",
            arr: []
        }
    },
    created() {
        this.$http.get(`/api/filter?val=${this.val}`).then(result => {
            this.arr = result.data
        })
    },
    methods: {
        submit() {
            this.$http.get(`/api/filter?val=${this.val}`).then(result => {
                this.arr = result.data
            })
        }
    }
}
</script>

<style lang="scss">
.ipt {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .list {
        flex: 1;
        overflow: auto;
    }

    .footer {
        height: 46px;
        background: orange;
    }
}

.inp {
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
</style>
