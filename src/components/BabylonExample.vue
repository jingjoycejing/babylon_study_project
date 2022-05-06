<script setup>
import { ref } from 'vue'
import { BasicScene } from '../BabylonExamples/BasicScene'

defineProps({
  msg: String
})

const count = ref(0)

function click() {
  const canvas = document.querySelector('canvas')
  new BasicScene(canvas)
  //console.log(this.msg) setup里面怎么获取
}


</script>

<template>
  <div> 
    <h3 @click="click">{{msg}}</h3>
    <canvas></canvas>
  </div>
</template>

<style scoped>
  h3 {
    margin: 40px 0 0 ;
    color: #42b983;
  }
  canvas {
    height: 70%;
    width: 70%;
  }
</style>
