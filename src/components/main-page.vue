<template>
  <div>
    <div class="content">
      <header>
        <button @click="getData" class="get-data">获取数据</button>
        <div>
          <span class="price">总价格: {{result}}</span>
          <button @click="getSum">计算</button>
        </div>
      </header>
      <c-item v-for="item in obj.content" :item-data="item">
      </c-item>
    </div>
  </div>
</template>

<script>
import cItem from './item'
export default {
  name: 'main-page',
  components: {
    cItem
  },
  data () {
    return {
      obj: {},
      result: 0
    }
  },
  methods: {
    getData () {
      this.$http.get('static/json/test.json')
        .then((response) => {
          this.obj = response.data
        })
    },
    getSum () {
      this.result = 0
      for (let item of this.$children) {
        if (item.num && item.num !== 0) {
          this.result += item.num * item.itemData[1]
        }
      }
    }
  }
}
</script>

<style scoped>
div, header {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
button {
  margin-top: 2rem;
  border: none;
  width: 5rem;
  height: 2rem;
  border-radius: .4rem;
  background: #50a7bb;
  color: #fff;
  font-size: 1rem;
  outline: none;
}
.price {
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.content {
  user-select: none;
  margin: 0 auto;
  width: 60%;
  text-align: left;
  line-height: 3rem;
}
</style>
