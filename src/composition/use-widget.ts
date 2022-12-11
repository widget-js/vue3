import {computed, ref} from 'vue'
import {ElectronUtils, WidgetData, WidgetDataRepository, WidgetParams} from "@widget-js/core";

interface UseWidgetOption<T extends WidgetData> {
    onDataLoaded?: (data: T) => void,
    debugParams?: WidgetParams,
    defaultData?: T,
    /**
     * 预览模式下显示的数据
     */
    previewData?: T,
    /**
     * 是否忽略组件id，只通过组件名获取数据
     */
    loadDataByWidgetName?: boolean;
}

export function useWidget<T extends WidgetData>(type: { new(name: string, id?: string): T; }, option?: UseWidgetOption<T>) {
    //从url地址获取组件参数
    let widgetParams: WidgetParams;

    if (ElectronUtils.getAPI() == null && option?.debugParams != null) {
        //如果没在Electron上运行，生成测试的参数
        widgetParams = option?.debugParams
        widgetParams.widthPx = (widgetParams.width ?? 2) * 100;
        widgetParams.heightPx = (widgetParams.height ?? 2) * 100;
    } else {
        widgetParams = WidgetParams.fromCurrentLocation();
    }
    //组件默认数据
    let widgetData = ref();
    if (option?.defaultData) {
        widgetData = ref(option?.defaultData);
    } else {
        const defaultData = new type(widgetParams.name!);
        widgetData = ref(defaultData);
    }
    widgetData.value.id = widgetParams.id!;

    //加载已保存的组件数据
    if (widgetParams.preview && option?.previewData) {
        widgetData.value = option?.previewData;
    } else {
        if (option?.loadDataByWidgetName) {
            WidgetDataRepository.findByName<T>(widgetParams.name!, type).then((data) => {
                if (data) {
                    widgetData.value = data
                    option?.onDataLoaded?.(data);
                }
            });
        } else {
            WidgetDataRepository.find<T>(widgetParams.name!, widgetParams.id!, type).then((data) => {
                if (data) {
                    widgetData.value = data
                    option?.onDataLoaded?.(data);
                }
            });
        }
    }


    const sizeStyle = computed(() => {
        return {
            width: `${widgetParams.widthPx}px`,
            height: `${widgetParams.heightPx}px`,
        }
    });

    return {widgetParams, widgetData, sizeStyle}
}
