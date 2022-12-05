<template>
  <el-container direction="vertical" class="widget-edit-dialog">
    <widget-dialog-title-bar :title="title"></widget-dialog-title-bar>
    <el-row justify="center">
      <div class="wrapper">
        <slot name="widget"></slot>
      </div>
    </el-row>

    <div class="main">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组件设置" v-if="option.custom" name="custom">
          <slot name="form"></slot>
        </el-tab-pane>
        <el-tab-pane label="背景设置" name="background" v-if="option.isSupportBackgroundSetting()">
          <el-form>
            <widget-color-field v-if="option.backgroundColor" v-model:color="widgetData.backgroundColor"
                                title="背景颜色"/>
            <widget-slider-field v-if="option.borderRadius" v-model:value="widgetData.borderRadius" :max="50"
                                 style="margin-right: 1rem"
                                 title="背景圆角"/>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="文字设置" name="third" v-if="option.isSupportTextSetting()">文字</el-tab-pane>
      </el-tabs>
    </div>
    <slot name="footer">
      <el-divider/>
      <el-row justify="end" class="footer">
        <el-button @click="onCancelClick()">取消</el-button>
        <el-button type="primary" @click="onConfirmClick">
          保存
        </el-button>
      </el-row>
    </slot>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import WidgetColorField from "@/components/form/WidgetColorField.vue";
import {WidgetData} from "@widget-js/core";
import WidgetDialogTitleBar from "@/components/dialog/WidgetDialogTitleBar.vue";
import WidgetSliderField from "@/components/form/WidgetSliderField.vue";
import {WidgetConfigOption} from "@/model/WidgetConfigOption";
import {ElButton, ElContainer, ElRow, ElTabPane, ElTabs,ElForm} from "element-plus";
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/form/style/css'
export default defineComponent({
      name: "WidgetEditDialog",
      components: {WidgetSliderField, ElRow, ElButton, ElContainer,ElForm, ElTabPane,ElTabs, WidgetDialogTitleBar, WidgetColorField},
      setup: (props) => {
        const activeName = ref('custom');
        const backgroundColor = ref("white")
        const borderRadius = ref(22)
        if (!props.option.custom) {
          if (props.option.isSupportBackgroundSetting()) {
            activeName.value = "background"
          }
        }
        return {activeName, backgroundColor, borderRadius}
      },
      props: {
        title: {
          type: String,
        },
        widgetData: {
          type: WidgetData,
          required: true
        },
        option: {
          type: WidgetConfigOption,
          default: new WidgetConfigOption()
        }
      },
      emits: ["confirm", "cancel"],
      methods: {
        onCancelClick() {
          this.$emit("cancel")
          window.close();
        },
        onConfirmClick() {
          this.$emit("confirm")
        }
      }
    }
);

</script>

<style scoped lang="scss">
@import "@/scss/theme.scss";

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.main {
  margin: 1rem;
}

.wrapper {
  padding: 16px;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.2));
}

.el-divider--horizontal {
  margin: 12px 0;
}

.footer {
  padding-right: 1rem;
}

.widget-edit-dialog {
  @include browser-window;
  background-color: white;
  padding-bottom: 1rem;
}
</style>
