<template>
  <div class="cards" >
    <div class="left" :style="classstyle">
      {{title}}
    </div>
    <div class="right">
      <slot name="rightslot">默认</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: {
    title: {
      type: String,
      default: '主动报备'
    },
    classstyle: {
      type: Object,
      default () {
        return {
          background: '#E8A13C'
        }
      }
    }
  }
}
</script>

<style scoped>
.cards {
  width: 50%;
  border-radius: 5px;
  background: #ecedee;
  text-align: left;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
}
.cards .left {
  width: 50px;
  border-radius: 5px 0 0 5px;
  padding: 10px;
}
.right {
  color: #5c5d5e;
  padding: 10px;
  font-size: 12px;
  padding-right: 0
}
</style>
