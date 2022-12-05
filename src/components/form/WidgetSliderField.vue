<template>
  <el-form-item :label="props.title">
    <el-slider :show-input="showInput" :min="min" :max="max" v-model="valueModel"></el-slider>
  </el-form-item>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {ElFormItem,ElSlider} from "element-plus";
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/slider/style/css'

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  value: {
    type: Number,
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  showInput: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits(['update:value'])

const valueModel = computed({
  get: () => {
    return props.value
  },
  set: (value) => {
    emits('update:value', value)
  }
})


</script>

<style scoped>

</style>
