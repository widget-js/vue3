import {Channel, ElectronApi} from "@widget-js/core";
import {onMounted, onUnmounted} from "vue";

export function useIpcListener(channel: Channel, callback: (...args) => void) {

    onMounted(async () => {
        await ElectronApi.addIpcListener(channel, (...args) => {
            callback(args);
        });
    });
    onUnmounted(async () => {
        await ElectronApi.removeIpcListener(channel);
    });

}
