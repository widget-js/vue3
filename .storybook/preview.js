import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import { app } from '@storybook/vue3';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'animate.css'
import 'mingcute_icon/font/Mingcute.css';
import * as jest from "jest-mock";
window.jest = jest;
app.use(ElementPlus);

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
    }
  },
}
