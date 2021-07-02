// Some util functions around schema manipulation to reduce size of the Property component

const schemaUtils = {};

export default schemaUtils;

const objectToArray = (obj) => Object.keys(obj || {}).map((key) => ({ ...obj[key], key }));

const getDeepKey = (obj, key) => {
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
        if ([null, undefined].includes(obj)) break;
        obj = obj[keys[i]];
    }
    return obj;
};

schemaUtils.prepareFullSchema = (schema, value) => {
    // 做一个对象拷贝
    const fullSchema = JSON.parse(JSON.stringify(schema));

    if (fullSchema.pattern) fullSchema.patternRegexp = new RegExp(fullSchema.pattern);

    // 以下部分应该是对Schema的空值进行相关的处理
    // if (!fullSchema.type && fullSchema.properties) fullSchema.type = 'object';
    // TODO:以下if内容可以删除，目前没有用到这个逻辑
    if (Array.isArray(fullSchema.type)) {
        fullSchema.nullable = fullSchema.type.includes('null');
        fullSchema.type = fullSchema.type.find((t) => t !== 'null');
        if (fullSchema.nullable && fullSchema.enum) fullSchema.enum = fullSchema.enum.filter((v) => v !== null);
    }
    if (fullSchema.type !== 'object') return fullSchema;

    // Properties as array for easier loops
    fullSchema.properties = JSON.parse(JSON.stringify(objectToArray(fullSchema.properties)));
    fullSchema.required = fullSchema.required || [];
    fullSchema.dependencies = fullSchema.dependencies || {};

    // Extend schema based on satisfied dependencies
    if (fullSchema.dependencies) {
        Object.keys(fullSchema.dependencies).forEach((depKey) => {
            const dep = fullSchema.dependencies[depKey];
            // cases where dependency does not apply
            if (!value) return;
            const val = getDeepKey(value, depKey);
            if ([null, undefined, false].includes(val)) return;
            if (Array.isArray(val) && val.length === 0) return;
            if (typeof val === 'object' && Object.keys(val).length === 0) return;
            // dependency applies
            fullSchema.required = fullSchema.required.concat(dep.required || []);
            fullSchema.properties = fullSchema.properties.concat(objectToArray(dep.properties));
            // fullSchema.extraProperties = []
            if (dep.oneOf) fullSchema.oneOf = (fullSchema.oneOf || []).concat(dep.oneOf);
            if (dep.allOf) fullSchema.allOf = (fullSchema.allOf || []).concat(dep.allOf);
        });
    }
    return fullSchema;
};
