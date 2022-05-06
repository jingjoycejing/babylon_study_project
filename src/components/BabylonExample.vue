<script setup>
import { onMounted, ref } from 'vue'
//import { BasicScene } from '././BasicSceneBabylonExamples/BasicScene'
import { StandardMaterials } from '../BabylonExamples/StandardMaterials'

defineProps({
  msg: String
})

const count = ref(0)

onMounted(()=>{
  const canvas = document.querySelector('canvas')
  new StandardMaterials(canvas)
  //console.log(this.msg) setup里面怎么获取
})


</script>

<template>
  <div> 
    <h3 >{{msg}}</h3>
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
