import {App, Plugin} from "vue";
import WidgetBaseDialog from "@/components/dialog/WidgetBaseDialog.vue";
import WidgetDialogTitleBar from "@/components/dialog/WidgetDialogTitleBar.vue";
import WidgetEditDialog from "@/components/dialog/WidgetEditDialog.vue";

import WidgetColorField from "@/components/form/WidgetColorField.vue";
import WidgetCheckboxField from "@/components/form/WidgetCheckboxField.vue";
import WidgetTimeRangeField from "@/components/form/WidgetTimeRangeField.vue";
import WidgetSliderField from "@/components/form/WidgetSliderField.vue";

export * from '@/model/WidgetConfigOption'
export * from '@/composition/use-widget'

const WidgetJsPlugin: Plugin = {
    install(app: App) {
        app.component('WidgetEditDialog', WidgetEditDialog);
        app.component('WidgetColorField', WidgetColorField);
        app.component('WidgetDialogTitleBar', WidgetDialogTitleBar);
        app.component('WidgetBaseDialog', WidgetBaseDialog);
        app.component('WidgetCheckboxField', WidgetCheckboxField);
        app.component('WidgetSliderField', WidgetSliderField);
        app.component('WidgetTimeRangeField', WidgetTimeRangeField);
    },
};
export {
    WidgetBaseDialog,
    WidgetEditDialog,
    WidgetCheckboxField,
    WidgetColorField,
    WidgetDialogTitleBar,
    WidgetTimeRangeField,
    WidgetJsPlugin
}