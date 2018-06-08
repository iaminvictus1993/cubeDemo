<template>
    <div>
        <Header></Header>
        <div class="main">
            <router-view>
            </router-view>
        </div>

    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'HelloWorld',
    data() {
        return {

        }
    },
    components: {
        Header
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style <style lang="less">
.main {
  position: relative;
  top: 44px;
  background-color: #f5f8fa;
  padding-top: 20px;
}
</style>

