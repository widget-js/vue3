import TitleBar from '@/components/dialog/WidgetDialogTitleBar.vue';

export default {
    title: '通用组件/TitleBar',
    component: TitleBar,
    argTypes: {
    },
};

export const Default = (args: any) => ({
    components: {TitleBar},
    setup() {
        return {args};
    },
    template: '<title-bar v-bind="args"></title-bar>',
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


