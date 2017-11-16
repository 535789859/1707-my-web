<template lang="html">
  <div class="min">
    <ul>
      <li v-for="(good, index) in goods" :key="'good' + index">
        <img :src="good.goods_thumb" alt="">
        <p>{{ good.goods_name }}</p>
        <span>￥{{ good.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goods: []
    }
  },
  methods: {
    getGoods (catId) {
      let url = 'http://h6.duchengjiu.top/shop/api_goods.php'
      if (catId) {
        url += '?cat_id=' + catId
      }
      this.$http.get(url)
      .then(res => {
        this.goods = res.data.data
      })
    }
  },
  created () {
    this.getGoods()
  },
  watch: {
    $route (to, from) {
      const catId = to.params.id
      this.getGoods(catId)
    }
  }
}
</script>

<style lang="css">
  *{margin: 0;padding: 0;}
  .min{
    padding: 20px;
  }
  div{
    margin-top: 30px;
  }
  li{
    list-style: none;
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    border: 1px dashed #ff1f09;
    overflow: hidden;
    display: flex;
  }
  img{
    width: 100px;
    height: 100px;
    float: left;
  }
  p{
    flex: 1;
    float: left;
    margin-left: 30px;
    line-height: 100px;
  }
  span{
    color: red;
    float: right;
    height: 100px;
    width: 100px;
    line-height: 100px;
  }
</style>
