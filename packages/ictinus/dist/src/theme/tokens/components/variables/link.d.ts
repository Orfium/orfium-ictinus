declare const link: {
    readonly block: {
        readonly '1': {
            readonly value: "{sem.typography.normal.label01}";
            readonly type: "typography";
            readonly description: "Sets text for block link ('large' variant)";
        };
        readonly '2': {
            readonly value: "{sem.typography.normal.label02}";
            readonly type: "typography";
            readonly description: "Sets text for block link ('medium' variant)";
        };
        readonly '3': {
            readonly value: "{sem.typography.normal.label03}";
            readonly type: "typography";
            readonly description: "Sets text for block link ('small' variant)";
        };
    };
    readonly inline: {
        readonly '1': {
            readonly value: {
                readonly fontFamily: "{fontFamily.roboto}";
                readonly fontWeight: "{fontWeight.medium}";
                readonly fontSize: "{fontSize.4}";
                readonly lineHeight: "{lineHeight.5}";
                readonly letterSpacing: "{letterSpacing.1}";
                readonly textDecoration: "{textDecoration.link}";
            };
            readonly type: "typography";
            readonly description: "Sets text for inline link ('large' variant)";
        };
        readonly '2': {
            readonly value: {
                readonly textDecoration: "{textDecoration.link}";
                readonly fontFamily: "{fontFamily.roboto}";
                readonly fontWeight: "{fontWeight.medium}";
                readonly fontSize: "{fontSize.3}";
                readonly lineHeight: "{lineHeight.4}";
                readonly letterSpacing: "{letterSpacing.2}";
            };
            readonly type: "typography";
            readonly description: "Sets text for inline link ('medium' variant)";
        };
        readonly '3': {
            readonly value: {
                readonly fontFamily: "{fontFamily.roboto}";
                readonly fontWeight: "{fontWeight.medium}";
                readonly fontSize: "{fontSize.2}";
                readonly lineHeight: "{lineHeight.3}";
                readonly letterSpacing: "{letterSpacing.2}";
                readonly textDecoration: "{textDecoration.link}";
            };
            readonly type: "typography";
            readonly description: "Sets text for inline link ('small' variant)";
        };
    };
};
export default link;
