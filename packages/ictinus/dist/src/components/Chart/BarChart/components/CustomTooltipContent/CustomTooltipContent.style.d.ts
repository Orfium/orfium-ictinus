import { Theme } from 'theme';
export declare const tooltipStyle: () => (theme: Theme) => {
    fontSize: string;
    padding: string;
    margin: string;
    color: string;
    background: string;
    opacity: string;
    borderRadius: string;
    minWidth: string;
    whiteSpace: "nowrap";
};
export declare const tooltipHrStyle: () => (theme: Theme) => {
    margin: string;
    height: string;
    borderWidth: number;
    backgroundColor: string;
    opacity: string;
};
export declare const tooltipUlStyle: () => () => {
    padding: string;
    margin: string;
};
export declare const tooltipLiStyle: () => (theme: Theme) => {
    listStyleType: string;
    color: string;
    width: string;
    display: string;
    justifyContent: string;
    height: string;
    padding: string;
    'div:last-child': {
        marginLeft: string;
        span: {
            marginLeft: string;
        };
    };
};
