declare const state: {
    readonly borderRadius: {
        readonly hover: {
            readonly value: "{borderRadius.7}";
            readonly type: "borderRadius";
            readonly description: "Sets border radius for circular hover shape";
        };
    };
    readonly backgroundColor: {
        readonly hover: {
            readonly value: "{colors.transparent.2}";
            readonly type: "color";
            readonly description: "Sets transparent overlay for interactive icon on hover";
        };
    };
    readonly loading: {
        readonly gradient: {
            readonly value: "{colors.gradient.1}";
            readonly type: "color";
            readonly description: "Alt loading state gradient";
        };
    };
};
export default state;
