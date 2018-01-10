<template>
  <div class="container" v-if="itemData[0] !== '精品名' && itemData[0] !== '' && itemData[1] !== ''">
    <span class="name">{{itemData[0]}}</span>
    <div>
      <span class="price">{{itemData[1]}}</span>
      <button @click="minus"> - </button>
      <span class="num">{{num}}</span>
      <button @click="plus" class="plus"> + </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'item',
  data () {
    return {
      num: 0
    }
  },
  props: {
    itemData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    plus () {
      this.num ++
    },
    minus () {
      if (this.num === 0) {
        return
      }
      this.num --
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 1rem;
  border-bottom: .05rem solid #ddd;
}
button {
  border: none;
  width: 3rem;
  height: 2rem;
  border-radius: .4rem;
  background: #f45c4e;
  color: #fff;
  font-size: 1rem;
  outline: none;
}
.container {
  display: flex;
  justify-content: space-between;
  user-select: none;
}
.plus {
  background: #50a7ba;
}
.price {
  margin-right: 3rem;
}
.num {
  margin: 0 1rem;
  font-weight: bold;
}
</style>
