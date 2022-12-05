<template>
  <el-row justify="space-evenly" align="middle" class="title-bar">
    <div class="title">{{ title }}</div>
    <div class="actions">
      <el-button type="danger" circle size="small" @click="onCloseClick">
        <span class="icon mgc_close_line"/>
      </el-button>
    </div>
  </el-row>
</template>

<script lang="ts">

import {ElButton, ElRow} from "element-plus";
import {defineComponent} from "vue";
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/row/style/css'
export default defineComponent(
    {
      components: {ElButton, ElRow},
      props: {
        title: {
          type: String
        }
      },
      methods: {
        onCloseClick() {
          window.close()
        }
      }
    }
)</script>

<style scoped lang="scss">
@import "@/scss/theme.scss";

.title-bar {
  height: 42px;
  background: linear-gradient(180deg, #409EFF 0%, #409EFF 100%);
  box-shadow: inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25);
  border-radius: $border-radius-base $border-radius-base 0 0;
  -webkit-app-region: drag;

  .title {
    font-size: 1rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .actions {
    position: absolute;
    right: 1rem;
    -webkit-app-region: no-drag;
  }

  .icon::before {
    color: white;
  }
}

.close {
  width: 16px;
  height: 16px;
  opacity: 1;
}
</style>
