<template>
  <div id="titles">
    <div class="title" :style="titlestyle">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'titles',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titlestyle: {
      type: Object,
      default () {
        return {
          'background': '#505152'
        }
      }
    }
  }
}
</script>

<style scoped>
.title{
  background: #505152;
  color: #fff;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 5px 5px 0 0;
}
</style>
