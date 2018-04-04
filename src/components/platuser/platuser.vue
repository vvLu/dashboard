<template>
  <div id="platuser">
    <!-- 业务 -->
   <Title :title="titles" />
   <div class="contents">
    <div class="contentCard">
      <Cards :classstyle="cardone" :title1='cardtitle1' :titlenum="cardnum1" :iconimg="iconimg1"/>
      <Cards :classstyle="cardtwo" :titlenum="cardnum2" :title2="cardtitle3" :title1='cardtitle2'/>
    </div>
    <div class="contentCard">
      <Cards :classstyle="cardothree" :title1='cardtitle4' :titlenum="cardnum3" :title2='cardtitle5' :iconimg="iconimg2"/>
      <Cards :classstyle="cardofour" :title1='cardtitle6' :titlenum="cardnum4" :title2='cardtitle7' :iconimg="iconimg3"/>
    </div>
    <Cards :classstyle="cardofive"  :title1='cardtitle8' :titlenum="cardnum5" :title2='cardtitle9' :iconimg="iconimg4"/>
  </div>
  <!-- 流量 -->
  <Title :title="titles2" />
  <div class="contents">
    <div class="contentCard">
      <Cards :classstyle="cardone" :iconimg="iconimg1">
        <div slot="zidingy">
          今日<span class="boldfont">{{cardnuml1}}</span>人操作<span class="boldfont">{{cardnuml2}}</span>次
        </div>
      </Cards>
      <Cards :classstyle="cardtwo">
        <div slot="zidingy">
          本月<span class="boldfont">{{cardnuml3}}</span>人使用平台
        </div>
      </Cards>
    </div>
  </div>
  <!-- 用户 -->
  <Title :title="titles3" />
  <div class="contents">
    <div class="contentCard">
      <Cards :classstyle="cardone" :titlenum="cardnumy1" :title1='cardtitle1y' :iconimg="iconimg1"/>
      <Cards :classstyle="cardtwo" :titlenum="cardnumy2" :title2="cardtitle3y" :title1='cardtitle2y'/>
    </div>
    <div class="contentCardt">
      <Cards :classstyle="cardthry" :titlenum="cardnumy3" :title1='cardtitle4y' :iconimg="iconimg22"/>
      <Cards :classstyle="cardfoy" :titlenum="cardnumy4" :title2="cardtitle5y" :title1='cardtitle6y' :iconimg="iconimg32"/>
    </div>
  </div>
  </div>
</template>

<script>
import Title from '@/common/title.vue/title.vue'
import Cards from '@/common/cards/cards.vue'
import { getcard } from '@/api/platyewu.js'
import { getcardf } from '@/api/platflow.js'
import {zhuce} from '@/api/paltuser.js'
import img1 from '@/assets/images/heard.png'
import img2 from '@/assets/images/renchou.png'
import img3 from '@/assets/images/dinggou.png'
import img4 from '@/assets/images/chengjiao.png'
import img22 from '@/assets/images/guanzhu.png'
import img32 from '@/assets/images/quguan.png'
export default {
  name: 'platuser',
  components: {
    Title,
    Cards
  },
  data () {
    return {
      titles: '概览 - 平台业务',
      cardone: 'cardone',
      cardtwo: 'cardtwo',
      cardthr: 'cardthr',
      cardothree: 'cardothree',
      cardofour: 'cardofour',
      cardofive: 'cardofive',
      cardtitle1: '今日报备',
      cardnum1: 0,
      cardtitle2: '今日带看',
      cardtitle3: '',
      cardnum2: 0,
      cardtitle4: '今日认筹',
      cardnum3: 0,
      cardtitle5: '',
      cardtitle6: '今日订购',
      cardnum4: 0,
      cardtitle7: '',
      cardtitle8: '今日成交',
      cardnum5: 0,
      cardtitle9: '',
      iconimg1: img1,
      iconimg2: img2,
      iconimg3: img3,
      iconimg4: img4,
      iconimg22: img22,
      iconimg32: img32,
      titles2: '概览 - 平台流量',
      cardnuml1: 0,
      cardnuml2: 0,
      cardnuml3: 0,
      titles3: '概览 - 平台用户',
      cardnumy1: 0,
      cardnumy2: 0,
      cardnumy3: 0,
      cardnumy4: 0,
      cardtitle1y: '今日注册',
      cardtitle2y: '总注册人数',
      cardtitle3y: '',
      cardtitle4y: '总关注人数',
      cardtitle5y: '',
      cardtitle6y: '总取关人数',
      cardthry: 'cardthry',
      cardfoy: 'cardfoy'
    }
  },
  created () {
    this._getcard()
    this._getcardf()
    this._zhuce()
  },
  methods: {
    // card
    _getcard () {
      getcard().then((res) => {
        if (res.data.code === 0) {
          this.cardnum1 = res.data.data[0].value
          this.cardnum2 = res.data.data[1].value
          this.cardtitle3 = '带看率' + res.data.data[1].rate
          this.cardnum3 = res.data.data[2].value
          this.cardtitle5 = '认筹率' + res.data.data[2].rate
          this.cardnum4 = res.data.data[3].value
          this.cardtitle7 = '订购率' + res.data.data[3].rate
          this.cardnum5 = res.data.data[4].value
          this.cardtitle9 = '成交率' + res.data.data[4].rate
        }
      })
    },
    // 获取card数据
    _getcardf () {
      getcardf().then((res) => {
        if (res.data.code === 0) {
          this.cardnuml1 = res.data.data.today.flow
          this.cardnuml2 = res.data.data.today.count
          this.cardnuml3 = res.data.data.sum
        }
      })
    },
    // 获取注册数量
    _zhuce () {
      let that = this
      zhuce().then((res) => {
        if (res.data.code === 0) {
          that.cardnumy1 = res.data.data[0].today
          that.cardnumy2 = res.data.data[0].total
          that.cardtitle3y = '注册率' + res.data.data[0].rate
          that.cardnumy2 = res.data.data[0].total
          that.cardnumy4 = res.data.data[1].total
          that.cardnumy3 = res.data.data[2].total
          that.cardtitle5y = '取关率' + res.data.data[1].rate
        }
      })
    }
  }
}
</script>

<style scoped>
#platuser .contents{
  padding: 10px;
  background: #fff
}
.contentCard, .contentCardt{
  display: flex
}
.contentCard .one{
  margin-right: 10px
}
.contentCard .cardone{
  margin-right: 10px;
  background: #5197F7;
  box-shadow: 0px 0px 5px #5197F7;
}
.contentCard .cardtwo{
  background: #8793EC;
  box-shadow: 0px 0px 5px #8793EC;
}
.contentCard .cardothree{
  margin-right: 10px;
  background: #ED9A37;
  box-shadow: 0px 0px 5px #ED9A37;
}
.contentCard .cardofour{
  background: #E9577B;
  box-shadow: 0px 0px 5px #E9577B;
}
#platuser .cardofive{
  background: #60C9B5;
  box-shadow: 0px 0px 5px #60C9B5;
}
.content2{
  position: relative;
}
.content2 .title3,.content2 .title4{
  height: 40px;
  padding: 0 20px;
  background: #5196F7;
  line-height: 40px;
  position: absolute;
  left: 0;
  color: #fff
}
.content2 .title4{
  background: #ACA9F6;
  margin-top: 20px
}
.content2 .title5{
  background: #F1AB9C;
  margin-top: 20px
}
.chartstyle{
  margin-top: 40px;
  margin-bottom: 20px
}
#platyewu .titles{
  margin-top: 20px
}
.tablemargin{
  margin: 30px 0 15px 0
}
.boldfont{
  font-weight: bold;
  font-size: 17px;
  margin: 0 3px
}
.contentCardt .cardthry{
  margin-right: 10px;
  background: #B48FE9;
  box-shadow: 0px 0px 5px #B48FE9;
}
.contentCardt .cardfoy{
  background: #F1AB9C;
  box-shadow: 0px 0px 5px #F1AB9C;
}
#titles{
  margin-top: 20px
}
</style>
