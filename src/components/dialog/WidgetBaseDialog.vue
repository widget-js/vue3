<template>
  <el-container direction="vertical" class="dialog">
    <widget-dialog-title-bar :title="title"></widget-dialog-title-bar>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </el-container>
</template>

<script lang="ts">

import DialogTitleBar from "@/components/dialog/WidgetDialogTitleBar.vue";
import WidgetDialogTitleBar from "@/components/dialog/WidgetDialogTitleBar.vue";
import {defineComponent} from "vue";

export default defineComponent({
      components: {WidgetDialogTitleBar, DialogTitleBar},
      name: "WidgetBaseDialog",
      props: {
        title: {
          type: String,
        },
      }
    }
)

</script>

<style scoped lang="scss">
@import "@/scss/theme.scss";

.main {
  padding: 1rem;
}

.wrapper {
  padding: 16px;
}

.el-divider--horizontal {
  margin: 12px 0;
}

.footer {
  padding-right: 1rem;
}

.dialog {
  @include browser-window;

}
</style>
