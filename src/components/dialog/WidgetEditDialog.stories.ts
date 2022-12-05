import WidgetEditDialog from '@/components/dialog/WidgetEditDialog.vue';

export default {
    title: '通用组件/WidgetEditDialog',
    component: WidgetEditDialog,
    argTypes: {
    },
};

export const Default = (args: any) => ({
    components: {WidgetEditDialog},
    setup() {
        return {args};
    },
    template: '<widget-edit-dialog v-bind="args"></widget-edit-dialog>',
});

Default.parameters = {
    design: [
        {
            name: "蓝湖",
            type: "link",
            url: "https://share.lanhuapp.com/#/invite?sid=X0xtlll",
        }
    ],
}


