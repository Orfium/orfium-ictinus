declare const field: {
    readonly addOn: {
        readonly height: {
            readonly normal: {
                readonly value: "{sizing.13}";
                readonly type: "sizing";
                readonly description: "Sets fixed height for _block addOn (normal variant)";
            };
            readonly compact: {
                readonly value: "{sizing.7}";
                readonly type: "sizing";
                readonly description: "Sets fixed height for _block addOn (compact variant)";
            };
        };
        readonly padding: {
            readonly normal: {
                readonly value: "{spacing.0} {spacing.5} {spacing.0} {spacing.4}";
                readonly type: "spacing";
                readonly description: "Sets horizontal/vertical padding for 'normal' field--addOn";
            };
            readonly compact: {
                readonly value: "{spacing.0} {spacing.4} {spacing.0} {spacing.3}";
                readonly type: "spacing";
                readonly description: "Sets horizontal/vertical padding for 'compact' field--addOn";
            };
            readonly textArea: {
                readonly value: "{spacing.6} {spacing.5} {spacing.6} {spacing.5}";
                readonly type: "spacing";
                readonly description: "Sets horizontal/vertical padding for text area";
            };
        };
    };
    readonly container: {
        readonly normal: {
            readonly value: "{sizing.13}";
            readonly type: "sizing";
            readonly description: "Sets fixed height for field content container";
        };
        readonly compact: {
            readonly value: "{sizing.7}";
            readonly type: "sizing";
            readonly description: "Sets fixed height for compact field content container";
        };
    };
    readonly minWidth: {
        readonly small: {
            readonly normal: {
                readonly value: "140px";
                readonly type: "sizing";
                readonly description: "Sets 'small' minimum width for base field (normal size)";
            };
            readonly compact: {
                readonly value: "70px";
                readonly type: "sizing";
                readonly description: "Sets 'small' minimum width for base field (compact size)";
            };
        };
        readonly large: {
            readonly normal: {
                readonly value: "240px";
                readonly type: "sizing";
                readonly description: "Sets 'large' minimum width for base field (normal size)";
            };
        };
        readonly medium: {
            readonly normal: {
                readonly value: "160px";
                readonly type: "sizing";
                readonly description: "Sets 'medium' minimum width for base field (normal size)";
            };
            readonly compact: {
                readonly value: "90px";
                readonly type: "sizing";
                readonly description: "Sets 'medium' minimum width for base field (compact size)";
            };
        };
        readonly extraLarge: {
            readonly normal: {
                readonly value: "260px";
                readonly type: "sizing";
                readonly description: "Sets 'large' minimum width for base field (normal size)";
            };
        };
    };
    readonly content: {
        readonly padding: {
            readonly value: "{spacing.0} {spacing.0} {spacing.0} {spacing.5}";
            readonly type: "spacing";
            readonly description: "Sets horizontal/vertical padding for field content";
        };
    };
};
export default field;
