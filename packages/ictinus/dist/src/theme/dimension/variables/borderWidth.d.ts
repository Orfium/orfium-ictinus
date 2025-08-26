declare const borderWidth: {
    readonly default: {
        readonly value: "{borderWidth.1}";
        readonly type: "borderWidth";
        readonly description: "Sets 'default' border width for components";
    };
    readonly active: {
        readonly value: "{borderWidth.2}";
        readonly type: "borderWidth";
        readonly description: "Sets 'active' border width for components ";
    };
    readonly focused: {
        readonly value: "{borderWidth.3}";
        readonly type: "borderWidth";
        readonly description: "Sets focused container borderWidth for component";
    };
    readonly innerFocused: {
        readonly value: "{borderWidth.2}";
        readonly type: "borderWidth";
        readonly description: "Alternative borderWidth for nested focused elements";
    };
};
export default borderWidth;
