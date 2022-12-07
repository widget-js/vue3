import WidgetEditDialog from "./WidgetEditDialog.vue";

export default {
    title: 'Dialog/WidgetEditDialog',
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


