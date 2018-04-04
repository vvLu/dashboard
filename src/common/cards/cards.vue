<template>
  <div class="cards" :class="classstyle">
      <div class="left">
        <div class="one">
          {{title1}}
          <slot class name="zidingy"></slot>
        </div>
        <div class="two">{{titlenum}}</div>
        <div class="three">{{title2}}</div>
      </div>
      <div class="right"><img :src="iconimg"/></div>
    </div>
</template>

<script>
import img from '@/assets/images/all.png'
export default {
  name: 'cards',
  props: {
    title1: {
      type: String,
      default: ''
    },
    titlenum: {
      type: Number,
      default: null
    },
    title2: {
      type: String,
      default: ''
    },
    classstyle: {
      type: String,
      default: 'cardone'
    },
    iconimg: {
      type: String,
      default: img
    }
  }
}
</script>

<style scoped>
.cards{
  width: 50%;
  border-radius: 5px;
  background: #5197F7;
  text-align: left;
  color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #5197F7;
  margin-bottom: 10px;
  display: flex;
  align-items: center
}
.cards .two{
  font-weight: bold;
  font-size: 16px;
  padding-left: 16px
}
.cardone{
  background: #ccc;
  box-shadow: 0px 0px 5px #ccc;
}
.left{
  width: 80%;
  font-size: 12px
}
.right img{
  display: block;
  width: 60%;
  height: 60%;
}
</style>
