import {BroadcastApi, BroadcastEvent} from "@widget-js/core";
import {onMounted, onUnmounted} from "vue";


export function useAppBroadcast(callback: (event: BroadcastEvent) => void) {

    onMounted(() => {
        BroadcastApi.registerBroadcast((event: BroadcastEvent) => {
            callback(event);
        })
    });
    onUnmounted(() => {
        BroadcastApi.unregisterBroadcast();
    })

}
