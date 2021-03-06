<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.flat"
                label="Flat : 移除阴影"
                tooltip="移除组件的阴影。"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideDetails]"
                label="Hide Details : 隐藏细节区域"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.inset"
                label="Inset : 扩展"
                tooltip="扩展 v-switch 开关以包含缩略图"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.loading"
                label="Loading : 加载状态"
                tooltip="显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.multiple"
                label="Multiple : 多选"
                tooltip="将预期模型更改为数组"
            ></h-panel-switch>

            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ValidateOnBlur]"
                label="Validate On Blur : 延迟验证"
                tooltip="延迟验证直到失去焦点的事件被触发"
            ></h-panel-switch>
            <h-panel-text-field
                v-model="properties[constants.tags.FalseValue]"
                label="False Value : 设置假值"
                tooltip="设置Switch关闭时的值"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.TrueValue]"
                label="True Value : 设置真值"
                tooltip="设置Switch开启时的值"
            ></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="icon" header="图标">
            <h-panel-icon
                v-model="properties[constants.tags.AppendIcon]"
                label="Append Icon"
                tooltip="在组件上附加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependIcon]"
                label="Prepend Icon"
                tooltip="在组件前添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.OffIcon]"
                label="Off Icon"
                tooltip="未被勾选时使用的图标"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.OnIcon]"
                label="On Icon"
                tooltip="被勾选时使用的图标"
            ></h-panel-icon>
            <h-panel-text-field
                v-model="properties.indeterminate"
                label="Indeterminate : 不确定状态"
                tooltip="为复选框设置不确定状态"
            ></h-panel-text-field>
            <h-panel-icon
                v-model="properties[constants.tags.IndeterminateIcon]"
                label="Indeterminate Icon"
                tooltip="处于不确定状态时使用的图标"
                :disabled="!properties.indeterminate"
            ></h-panel-icon>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-switch
                v-model="properties[constants.tags.PersistentHint]"
                label="Persistent Hint : 强制显示提示"
                tooltip="强制提示总是可见的"
            ></h-panel-switch>
            <h-panel-text-field v-model="properties.hint" label="Hint : 提示文本"></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="color" header="色彩">
            <h-panel-color
                v-model="properties[constants.tags.BackgroundColor]"
                label="Background Color : 背景颜色"
                tooltip="输入框背景颜色"
            ></h-panel-color>
            <h-panel-color
                v-model="properties.color"
                label="Color : 颜色"
                tooltip="将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表"
            ></h-panel-color>
            <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"> </h-panel-switch>
            <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { HExpansionPanel } from '../layouts';
import { HPanelColor, HPanelIcon, HPanelSwitch, HPanelTextField } from '../controls';

import { constants } from '../../../lib/modeler/configurations';

export default {
    name: 'HSwitchPanel',
    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelIcon,
        HPanelSwitch,
        HPanelTextField,
    },

    props: {
        element: {
            type: Object,
            default: () => {},
        },
    },

    data: () => ({
        constants,
        dataObject: {},
    }),

    computed: {
        properties() {
            return this.dataObject[this.constants.annotations.xprops];
        },
    },

    watch: {
        element: {
            handler(newValue, oldValue) {
                this.dataObject = newValue;
            },
            immediate: true,
        },
    },
};
</script>
