<template>
    <div>
        <cube-slide :data="items" class="slide" />
    </div>
</template>

<script>
export default {
    data() {
        return { items: [
            {
                url: 'http://www.didichuxing.com/',
                image:
            'http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
            },
            {
                url: 'http://www.didichuxing.com/',
                image:
            'http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
            },
            {
                url: 'http://www.didichuxing.com/',
                image:
            'http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
            }
        ]}
    },
    created() {
        alert(1)
    },
    components: {},
    computed: {},
    methods: {}
}
</script>
<style lang='less' scoped>
  .slide {
    width: 375px;
    height: 150px;
    overflow: hidden;
  }
</style>