declare const button: {
    readonly compact: {
        readonly size: {
            readonly value: "{sizing.7}";
            readonly type: "sizing";
            readonly description: "Sets size for iconButton ('compact' variant)";
        };
        readonly padding: {
            readonly value: "{spacing.0} {spacing.4} {spacing.0} {spacing.4}";
            readonly type: "spacing";
            readonly description: "Sets horizontal/vertical padding for 'compact' textButton";
        };
    };
    readonly normal: {
        readonly size: {
            readonly value: "{sizing.9}";
            readonly type: "sizing";
            readonly description: "Sets size for iconButtons";
        };
        readonly padding: {
            readonly value: "{spacing.0} {spacing.6} {spacing.0} {spacing.6}";
            readonly type: "spacing";
            readonly description: "Sets horizontal/vertical padding for 'normal' textButton";
        };
    };
};
export default button;
