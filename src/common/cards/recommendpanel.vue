<template>
  <div class="panels" >
      <div class="top" >
        {{title}}
      </div>
      <div class="bottom">
        <slot name="bottom">默认</slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cards',
  props: {
    title: {
      type: String,
      default: '名词说明'
    }
  }
}
</script>

<style scoped>
.panels{
  width: 50%;
  background: #fff;
  text-align: left;
  color: #fff;
  margin-bottom: 10px;
  border: 1px solid #E3E4E5;
  border-radius: 3px;
}
.panels .top{
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #727E96;
  font-size: 12px;
  border-radius: 3px 3px 0 0;
}
.bottom{
  color: #616263;
  padding: 5px;
}
</style>
