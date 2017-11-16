<template>
  <div>
    <div class="nav">
      <router-link :to="'/' + cat.cat_id" v-for="(cat, index) in cats" :key="'cat' + index">{{ cat.cat_name }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        cats: []
      }
    },
    created () {
      this.$http.get('http://h6.duchengjiu.top/shop/api_cat.php')
        .then(res => {
          this.cats = res.data.data
        })
    }
  }
</script>

<style>
  .nav{
    padding: 20px;
    width: 97%;
    display: flex;
    height: 50px;
  }
  a{
    text-align: center;
    line-height: 40px;
    height: 40px;
    flex: 1;
    text-decoration: none;
    background-color: #ff4a14;
    color: wheat;
    margin-right: 5px;
    padding: 5px;
  }
</style>
