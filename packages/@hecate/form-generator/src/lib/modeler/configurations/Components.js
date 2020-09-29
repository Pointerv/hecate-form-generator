import definitions from './Schemas';

// 输入型组件 【左面板】
const inputComponents = [
    {
        // 组件自定义配置
        configs: {
            title: definitions.TEXT_FIELD.schema.title,
            icon: 'mdi-form-textbox',
            name: 'TextField',
            document: 'https://vuetifyjs.com/zh-Hans/components/text-fields/',
            schema: definitions.TEXT_FIELD.index,
        },
    },
    {
        configs: {
            title: definitions.TEXT_AREA.schema.title,
            icon: 'mdi-form-textarea',
            name: 'TextArea',
            document: 'https://vuetifyjs.com/zh-Hans/components/textarea/',
            schema: definitions.TEXT_AREA.index,
        },
    },
];

// 选择型组件 【左面板】
const selectComponents = [
    {
        configs: {
            title: definitions.SINGLE_SELECT.schema.title,
            icon: 'mdi-form-dropdown',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
            schema: definitions.SINGLE_SELECT.index,
        },
    },
    {
        configs: {
            title: definitions.MULTIPLE_SELECT.schema.title,
            icon: 'mdi-form-dropdown',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
            schema: definitions.MULTIPLE_SELECT.index,
        },
    },
    {
        configs: {
            title: definitions.CASCADE_SELECT.schema.title,
            icon: 'mdi-file-tree-outline',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selects/',
            schema: definitions.CASCADE_SELECT.index,
        },
    },
    {
        configs: {
            title: definitions.RADIO.schema.title,
            icon: 'mdi-checkbox-marked-circle',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selection-controls/',
            schema: definitions.RADIO.index,
        },
    },
    {
        configs: {
            title: definitions.CHECKBOX.schema.title,
            icon: 'mdi-checkbox-marked',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selection-controls/',
            schema: definitions.CHECKBOX.index,
        },
    },
    {
        configs: {
            title: definitions.SWITCH.schema.title,
            icon: 'mdi-toggle-switch',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/selection-controls/',
            schema: definitions.SWITCH.index,
        },
    },
    {
        configs: {
            title: definitions.TIME_PICKER.schema.title,
            icon: 'mdi-clock-outline',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/time-pickers/',
            schema: definitions.TIME_PICKER.index,
        },
    },
    {
        configs: {
            title: definitions.DATE_PICKER.schema.title,
            icon: 'mdi-calendar',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/date-pickers/',
            schema: definitions.DATE_PICKER.index,
        },
    },
    {
        configs: {
            title: definitions.COLOR_PICKER.schema.title,
            icon: 'mdi-calendar',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/color-pickers/',
            schema: definitions.COLOR_PICKER.index,
        },
    },
    {
        configs: {
            title: definitions.FILE_INPUT.schema.title,
            icon: 'mdi-calendar',
            name: 'Select',
            document: 'https://vuetifyjs.com/zh-Hans/components/file-inputs/',
            schema: definitions.FILE_INPUT.index,
        },
    },
];

// 布局型组件 【左面板】
const layoutComponents = [
    {
        title: '行容器',
        configs: {
            layout: 'rowFormItem',
            tagIcon: 'mdi-view-column-outline',

            layoutTree: true,
            document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes',
        },
        type: 'default',
        justify: 'start',
        align: 'top',
    },
    {
        title: '按钮',
        configs: {
            showtitle: true,
            changeTag: true,
            titleWidth: null,
            tag: 'el-button',
            tagIcon: 'mdi-gesture-tap-button',
            span: 24,
            layout: 'columnLayoutItem',
            document: 'https://element.eleme.cn/#/zh-CN/component/button',
        },
        slot: {
            default: '主要按钮',
        },
        type: 'primary',
        icon: 'el-icon-search',
        round: false,
        size: 'medium',
        plain: false,
        circle: false,
        disabled: false,
    },
];

const leftPanelComponents = [
    {
        title: '输入型组件',
        list: inputComponents,
    },
    {
        title: '选择型组件',
        list: selectComponents,
    },
    {
        title: '布局型组件',
        list: layoutComponents,
    },
];

export { leftPanelComponents };
