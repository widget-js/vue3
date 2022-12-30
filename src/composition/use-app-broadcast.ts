import {BroadcastApi, BroadcastEvent} from "@widget-js/core";
import {onMounted, onUnmounted} from "vue";

/**
 * 注册广播监听
 * @param typeFilter    广播事件类型
 * @param callback
 */
export function useAppBroadcast(typeFilter: string[], callback: (event: BroadcastEvent) => void) {

    onMounted(() => {
        BroadcastApi.registerBroadcast((event: BroadcastEvent) => {
            if (typeFilter.indexOf(event.type) > -1) {
                callback(event);
            }
        })
    });
    onUnmounted(() => {
        BroadcastApi.unregisterBroadcast();
    })

}
