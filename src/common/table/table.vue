<template>
  <div id="tables">
    <table class="table table-bordered table-striped text-center" cellspacing="0">
      <thead>
          <tr >
              <th v-for="(i,index) in tabletitle" :key='index'>{{i}}</th>
          </tr>
      </thead>
      <tbody >
        <tr v-for ="(i,indexi) in tablecontents" :key='indexi'>
          <td >{{i.state}}</td>
          <td v-for="(s,indexs) in i.value" :key='indexs'>{{s}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tables',
  props: {
    tabletitle: {
      type: Array,
      default () {
        return ['项目(次)', '今日', '昨日', '本周', '上周', '本月', '上月', '总量']
      }
    },
    tablecontents: {
      type: Array,
      default () {
        return ([{
          key: '报备',
          value: ['30', '40', '50']
        },
        {
          key: '报备',
          value: ['30', '40', '50']
        }])
      }
    }
  }
}
</script>

<style scoped>
#tables{
  width: 100%
}
#tables .table{
  width: 100%
}
#tables .table td{
  height: 30px;
}
#tables .table thead tr{
  height: 40px;
  background: #f9f9f9;
}
</style>
