import {computed, ref} from 'vue'
import {ElectronUtils, WidgetData, WidgetDataRepository, WidgetParams} from "@widget-js/core";

type UseWidgetOption = {
    onDataLoaded?: <T extends WidgetData>(data: T) => void,
    debugParams?: WidgetParams
}

export function useWidget<T extends WidgetData>(type: { new(name: string, id?: string): T; }, option?: UseWidgetOption) {
    //从url地址获取组件参数
    let widgetParams: WidgetParams;

    if (ElectronUtils.getAPI() == null && option?.debugParams != null) {
        //如果没在Electron上运行，生成测试的参数
        widgetParams = option?.debugParams
    } else {
        widgetParams = WidgetParams.fromCurrentLocation();
    }
    //组件默认数据
    const defaultData = new type(widgetParams.name!);
    defaultData.id = widgetParams.id!;
    const widgetData = ref(defaultData);
    //加载已保存的组件数据
    WidgetDataRepository.find<T>(widgetParams.name!, widgetParams.id!, type).then((data) => {
        if (data) {
            widgetData.value = data
            option?.onDataLoaded?.(data);
        }
    })

    const sizeStyle = computed(() => {
        return {
            width: widgetParams.widthPx ? `${widgetParams.widthPx}px` : `${(widgetParams.width ?? 2) * 100}px`,
            height: widgetParams.heightPx ? `${widgetParams.heightPx}px` : `${(widgetParams.height ?? 2) * 100}px`,
        }
    })

    return {widgetParams, widgetData, sizeStyle}
}
