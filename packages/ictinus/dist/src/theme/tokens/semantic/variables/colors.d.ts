declare const colors: {
    readonly backgroundColor: {
        readonly default: {
            readonly value: "{colors.neutral.1}";
            readonly type: "color";
            readonly description: "default backgroundColor variant";
        };
        readonly transparent: {
            readonly value: "{colors.transparent.1}";
            readonly type: "color";
            readonly description: "transparent backgroundColor variant";
        };
        readonly alt: {
            readonly value: "{colors.neutral.2}";
            readonly type: "color";
            readonly description: "alt backgroundColor variant";
        };
        readonly inverted: {
            readonly value: "{colors.neutral.6}";
            readonly type: "color";
            readonly description: "invertedBackgroundColor default variant";
        };
        readonly invertedAlt: {
            readonly value: "{colors.neutral.5}";
            readonly type: "color";
            readonly description: "invertedBackgroundColor, alt variant";
        };
    };
    readonly backdrop: {
        readonly default: {
            readonly value: "{colors.transparent.5}";
            readonly type: "color";
            readonly description: "backdrop shade";
        };
    };
    readonly palette: {
        readonly error: {
            readonly muted: {
                readonly type: "color";
                readonly value: "{colors.red.1}";
            };
            readonly base: {
                readonly type: "color";
                readonly value: "{colors.red.2}";
            };
            readonly contrast: {
                readonly type: "color";
                readonly value: "{colors.red.3}";
            };
        };
        readonly warning: {
            readonly muted: {
                readonly type: "color";
                readonly value: "{colors.orange.1}";
            };
            readonly base: {
                readonly type: "color";
                readonly value: "{colors.orange.2}";
            };
            readonly contrast: {
                readonly type: "color";
                readonly value: "{colors.orange.3}";
            };
        };
        readonly primary: {
            readonly muted: {
                readonly type: "color";
                readonly value: "{colors.blue.5}";
            };
            readonly base: {
                readonly type: "color";
                readonly value: "{colors.blue.6}";
            };
            readonly contrast: {
                readonly type: "color";
                readonly value: "{colors.blue.7}";
            };
        };
        readonly secondary: {
            readonly muted: {
                readonly type: "color";
                readonly value: "{colors.transparent.2}";
            };
            readonly base: {
                readonly type: "color";
                readonly value: "{colors.transparent.3}";
            };
            readonly contrast: {
                readonly type: "color";
                readonly value: "{colors.transparent.4}";
            };
        };
        readonly success: {
            readonly muted: {
                readonly type: "color";
                readonly value: "{colors.teal.1}";
            };
            readonly base: {
                readonly type: "color";
                readonly value: "{colors.teal.2}";
            };
            readonly contrast: {
                readonly type: "color";
                readonly value: "{colors.teal.3}";
            };
        };
        readonly tertiary: {
            readonly muted: {
                readonly value: "{colors.transparent.2}";
                readonly type: "color";
            };
            readonly base: {
                readonly value: "{colors.transparent.1}";
                readonly type: "color";
            };
            readonly contrast: {
                readonly value: "{colors.transparent.3}";
                readonly type: "color";
            };
        };
        readonly upsell: {
            readonly muted: {
                readonly value: "{colors.purple.1}";
                readonly type: "color";
            };
            readonly base: {
                readonly value: "{colors.purple.2}";
                readonly type: "color";
            };
            readonly contrast: {
                readonly value: "{colors.purple.3}";
                readonly type: "color";
            };
        };
        readonly primaryAlt: {
            readonly muted: {
                readonly value: "{colors.blue.1}";
                readonly type: "color";
            };
            readonly base: {
                readonly value: "{colors.blue.2}";
                readonly type: "color";
            };
            readonly contrast: {
                readonly value: "{colors.blue.3}";
                readonly type: "color";
            };
        };
    };
    readonly textColor: {
        readonly default: {
            readonly primary: {
                readonly value: "{colors.neutral.6}";
                readonly type: "color";
                readonly description: "Sets color for primary text";
            };
            readonly secondary: {
                readonly value: "{colors.neutral.4}";
                readonly type: "color";
                readonly description: "Sets color for secondary text";
            };
            readonly error: {
                readonly value: "{colors.red.7}";
                readonly type: "color";
                readonly description: "Sets color for error text";
            };
            readonly active: {
                readonly value: "{colors.blue.7}";
                readonly type: "color";
                readonly description: "Sets color for active text";
            };
            readonly visited: {
                readonly value: "{colors.purple.7}";
                readonly type: "color";
                readonly description: "Sets color for visited text (link)";
            };
            readonly warning: {
                readonly value: "{colors.orange.7}";
                readonly type: "color";
                readonly description: "Sets color for warning text";
            };
            readonly success: {
                readonly value: "{colors.teal.7}";
                readonly type: "color";
                readonly description: "Sets color for success text";
            };
        };
        readonly inverted: {
            readonly visited: {
                readonly value: "{colors.purple.4}";
                readonly type: "color";
                readonly description: "Sets color for visited text (link)";
            };
            readonly primary: {
                readonly value: "{colors.neutral.1}";
                readonly type: "color";
                readonly description: "Sets color for inverted primary text";
            };
            readonly secondary: {
                readonly value: "{colors.neutral.3}";
                readonly type: "color";
                readonly description: "Sets color for inverted secondary text";
            };
            readonly error: {
                readonly value: "{colors.red.4}";
                readonly type: "color";
                readonly description: "Sets color for inverted error text";
            };
            readonly active: {
                readonly value: "{colors.blue.4}";
                readonly type: "color";
                readonly description: "Sets color for inverted active text";
            };
            readonly warning: {
                readonly value: "{colors.orange.4}";
                readonly type: "color";
            };
            readonly success: {
                readonly value: "{colors.teal.4}";
                readonly type: "color";
                readonly description: "Sets color for inverted success text";
            };
        };
    };
    readonly borderColor: {
        readonly decorative: {
            readonly transparent: {
                readonly value: "{colors.transparent.1}";
                readonly type: "color";
                readonly description: "transparent borderColor variant";
            };
            readonly default: {
                readonly value: "{colors.transparent.5}";
                readonly type: "color";
                readonly description: "Default decorative borderColor";
            };
            readonly inverted: {
                readonly value: "{colors.transparent.10}";
                readonly type: "color";
                readonly description: "Inverted decorative borderColor";
            };
        };
        readonly interactive: {
            readonly default: {
                readonly value: "{colors.blue.4}";
                readonly type: "color";
                readonly description: "Used in default component state";
            };
            readonly active: {
                readonly value: "{colors.blue.6}";
                readonly type: "color";
                readonly description: "Used in active component state";
            };
            readonly error: {
                readonly value: "{colors.red.5}";
                readonly type: "color";
                readonly description: "Sets borderColor for error";
            };
            readonly upsell: {
                readonly value: "{colors.purple.5}";
                readonly type: "color";
                readonly description: "Sets borderColor for upsell";
            };
            readonly warning: {
                readonly value: "{colors.orange.5}";
                readonly type: "color";
                readonly description: "Sets borderColor for warning";
            };
            readonly success: {
                readonly value: "{colors.teal.5}";
                readonly type: "color";
                readonly description: "Sets borderColor for success";
            };
            readonly focused: {
                readonly value: "{colors.purple.5}";
                readonly type: "color";
                readonly description: "Sets focused container borderColor for component";
            };
        };
    };
    readonly indicators: {
        readonly brand: {
            readonly value: "{colors.blue.5}";
            readonly type: "color";
        };
        readonly success: {
            readonly value: "{colors.teal.5}";
            readonly type: "color";
        };
        readonly pending: {
            readonly value: "{colors.purple.4}";
            readonly type: "color";
        };
        readonly warning: {
            readonly value: "{colors.orange.4}";
            readonly type: "color";
        };
        readonly error: {
            readonly value: "{colors.red.5}";
            readonly type: "color";
        };
        readonly inactive: {
            readonly value: "{colors.neutral.3}";
            readonly type: "color";
        };
    };
};
export default colors;
