<template>
  <div class="widget-fit-box" :style="{maxWidth:`${width}px`,maxHeight:`${height}px`}">
    <div :style="{transform:`scale(${scale})`}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "WidgetFitBox",
  props: {
    width: Number,
    height: Number,
    widgetHeight: Number,
    widgetWidth: Number,
  },
  computed: {
    scale() {
      if (this.width >= this.widgetWidth && this.height >= this.widgetHeight) {
        return 1;
      } else if (this.widgetWidth > this.width && this.widgetHeight < this.height) {
        return this.width / this.widgetWidth;
      } else if (this.widgetWidth < this.width && this.widgetHeight > this.height) {
        return this.height / this.widgetHeight;
      } else {
        //按长边缩放
        if (this.widgetWidth > this.widgetHeight) {
          return this.width / this.widgetWidth;
        } else {
          return this.height / this.widgetHeight;
        }
      }
    }
  }
}
</script>

<style scoped>
.widget-fit-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
