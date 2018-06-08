<template>
    <div class="nav">
        <a class="home" href="#/">天健金管</a>
        <div class="more" @click="showDrawer">more</div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {},
    components: {},
    computed: {},
    methods: {
        showDrawer() {
            this.$createActionSheet({
                title: '测试路由跳转',
                data: [
                    {
                        content: '首页',
                        index: '/',
                        class: 'cube-foo'
                    },
                    {
                        content: '币种',
                        index: 'currency',
                        class: 'cube-foo'
                    },
                    {
                        content: '节假日',
                        index: 'holiday',
                        class: 'cube-foo'
                    }
                ],
                onSelect: (item, index) => {
                    this.$router.push(item.index)
                }
            }).show()
        }
    }
}
</script>
<style lang='less' scoped>
.nav {
    position: fixed;
    z-index: 10;
    width: 375px;
    height: 44px;
    background-color: #fff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.08);
    .home{
        display: inline-block;
        height: 44px;
        line-height: 44px;
        // position: absolute;
        // left: 8px;
        font-size: 18px;
        &:hover {
            cursor: pointer;
        }
    }
    .more{
        display: inline-block;
        height: 44px;
        line-height: 44px;
        position: absolute;
        right: 8px;
        font-size: 14px;
    }
}
</style>