import { ClassValue } from 'clsx';
import { default as React, AllHTMLAttributes, ElementType } from 'react';
type HTMLProperties<T = HTMLElement> = Omit<AllHTMLAttributes<T>, 'as' | 'className' | 'color' | 'height' | 'width' | 'size'>;
export declare const Box: React.ForwardRefExoticComponent<{
    alignItems?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch" | {
        xs?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        md?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        lg?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        xl?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
    };
    alignSelf?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch" | {
        xs?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        md?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        lg?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
        xl?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch";
    };
    justifyContent?: "center" | "unset" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | {
        xs?: "center" | "unset" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";
        md?: "center" | "unset" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";
        lg?: "center" | "unset" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";
        xl?: "center" | "unset" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";
    };
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | {
        xs?: "wrap" | "nowrap" | "wrap-reverse";
        md?: "wrap" | "nowrap" | "wrap-reverse";
        lg?: "wrap" | "nowrap" | "wrap-reverse";
        xl?: "wrap" | "nowrap" | "wrap-reverse";
    };
    display?: "grid" | "none" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid" | "contents" | {
        xs?: "grid" | "none" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid" | "contents";
        md?: "grid" | "none" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid" | "contents";
        lg?: "grid" | "none" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid" | "contents";
        xl?: "grid" | "none" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid" | "contents";
    };
    flex?: "none" | "1" | "initial" | "auto" | {
        xs?: "none" | "1" | "initial" | "auto";
        md?: "none" | "1" | "initial" | "auto";
        lg?: "none" | "1" | "initial" | "auto";
        xl?: "none" | "1" | "initial" | "auto";
    };
    width?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    height?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    minWidth?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    minHeight?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | {
        xs?: "row" | "column" | "row-reverse" | "column-reverse";
        md?: "row" | "column" | "row-reverse" | "column-reverse";
        lg?: "row" | "column" | "row-reverse" | "column-reverse";
        xl?: "row" | "column" | "row-reverse" | "column-reverse";
    };
    position?: "absolute" | "fixed" | "relative" | "sticky" | {
        xs?: "absolute" | "fixed" | "relative" | "sticky";
        md?: "absolute" | "fixed" | "relative" | "sticky";
        lg?: "absolute" | "fixed" | "relative" | "sticky";
        xl?: "absolute" | "fixed" | "relative" | "sticky";
    };
    borderWidth?: "1" | "2" | "3" | {
        xs?: "1" | "2" | "3";
        md?: "1" | "2" | "3";
        lg?: "1" | "2" | "3";
        xl?: "1" | "2" | "3";
    };
    borderColor?: "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | {
        xs?: "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell";
        md?: "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell";
        lg?: "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell";
        xl?: "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell";
    };
    borderStyle?: "dashed" | "solid" | {
        xs?: "dashed" | "solid";
        md?: "dashed" | "solid";
        lg?: "dashed" | "solid";
        xl?: "dashed" | "solid";
    };
    borderRadius?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | {
        xs?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
        md?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
        lg?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
        xl?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
    };
    gap?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    gridGap?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    margin?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    marginBottom?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    marginLeft?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    marginRight?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    marginTop?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    padding?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    paddingBottom?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    paddingLeft?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    paddingRight?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    paddingTop?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    w?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    h?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full" | {
        xs?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        md?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        lg?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
        xl?: "screen" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "full";
    };
    p?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    pt?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    pb?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    pl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    pr?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    px?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    py?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    m?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    mt?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    mb?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    ml?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    mr?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    mx?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
    my?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12" | {
        xs?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        md?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        lg?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
        xl?: "none" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "sm" | "md" | "lg" | "xs" | "xl" | "2xs" | "2xl" | "3xl" | "4xl" | "11" | "12";
    };
} & {
    cursor?: "default" | "pointer" | "not-allowed";
    userSelect?: "all" | "none";
    touchAction?: "none" | "manipulation";
    fontFamily?: "mono" | "sans";
    fontSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
    fontWeight?: "bold" | "regular" | "medium";
    lineHeight?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
    letterSpacing?: "0" | "1" | "2" | "3";
    isolation?: "isolate";
    objectFit?: "contain" | "cover";
    pointerEvents?: "none";
    textTransform?: "uppercase" | "capitalize" | "lowercase";
    visibility?: "hidden" | "visible";
    whiteSpace?: "pre" | "inherit" | "normal" | "initial" | "nowrap" | "pre-wrap" | "pre-line";
    wordBreak?: "break-word";
    wordWrap?: "inherit" | "normal" | "initial" | "break-word";
    boxShadow?: "0" | "1" | "2" | "3" | "4" | "5";
    transitionProperty?: "all" | "none" | "default" | "colors" | "opacity" | "transform" | "shadow";
    transitionTimingFunction?: "ease" | "linear" | "in" | "out" | "inOut";
    transitionDuration?: "150ms" | "200ms";
    zIndex?: "0" | "10" | "20" | "auto" | "30" | "40" | "50" | "100" | "75";
} & {
    backgroundColor?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt" | {
        base?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        active?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        focus?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        hover?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
    };
    borderColor?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | {
        base?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        active?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        focus?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        hover?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
    };
    color?: "success" | "warning" | "error" | "primary" | "secondary" | "active" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "visited" | "inverted.success" | "inverted.warning" | "inverted.error" | "inverted.primary" | "inverted.secondary" | "inverted.active" | "inverted.visited" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | {
        base?: "success" | "warning" | "error" | "primary" | "secondary" | "active" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "visited" | "inverted.success" | "inverted.warning" | "inverted.error" | "inverted.primary" | "inverted.secondary" | "inverted.active" | "inverted.visited" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        active?: "success" | "warning" | "error" | "primary" | "secondary" | "active" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "visited" | "inverted.success" | "inverted.warning" | "inverted.error" | "inverted.primary" | "inverted.secondary" | "inverted.active" | "inverted.visited" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        focus?: "success" | "warning" | "error" | "primary" | "secondary" | "active" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "visited" | "inverted.success" | "inverted.warning" | "inverted.error" | "inverted.primary" | "inverted.secondary" | "inverted.active" | "inverted.visited" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        hover?: "success" | "warning" | "error" | "primary" | "secondary" | "active" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "visited" | "inverted.success" | "inverted.warning" | "inverted.error" | "inverted.primary" | "inverted.secondary" | "inverted.active" | "inverted.visited" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
    };
    outlineColor?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | {
        base?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        active?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        focus?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
        hover?: "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "decorative.transparent" | "decorative.default" | "decorative.inverted" | "interactive.default" | "interactive.success" | "interactive.warning" | "interactive.error" | "interactive.active" | "interactive.focused" | "interactive.upsell" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive";
    };
    bg?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt" | {
        base?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        active?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        focus?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
        hover?: "transparent" | "default" | "red.1" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "purple.1" | "purple.4" | "purple.5" | "purple.6" | "purple.7" | "purple.8" | "purple.9" | "purple.10" | "blue.1" | "blue.2" | "blue.3" | "blue.4" | "blue.5" | "blue.6" | "blue.7" | "blue.8" | "blue.9" | "blue.10" | "teal.1" | "teal.4" | "teal.5" | "teal.6" | "teal.7" | "teal.8" | "teal.9" | "teal.10" | "orange.1" | "orange.4" | "orange.5" | "orange.6" | "orange.7" | "orange.8" | "orange.9" | "orange.10" | "neutral.1" | "neutral.2" | "neutral.3" | "neutral.4" | "neutral.5" | "neutral.6" | "alt" | "inverted" | "invertedAlt" | "backdrop.default" | "palette.success.muted" | "palette.success.contrast" | "palette.warning.muted" | "palette.warning.contrast" | "palette.error.muted" | "palette.error.contrast" | "palette.primary.muted" | "palette.primary.contrast" | "palette.secondary.muted" | "palette.secondary.contrast" | "palette.tertiary.muted" | "palette.tertiary.contrast" | "palette.upsell.muted" | "palette.upsell.contrast" | "indicator.brand" | "indicator.success" | "indicator.pending" | "indicator.warning" | "indicator.error" | "indicator.inactive" | "palette.primary" | "palette.secondary" | "palette.tertiary" | "palette.error" | "palette.warning" | "palette.success" | "palette.upsell" | "palette.primary-alt" | "palette.primary-alt.muted" | "palette.primary-alt.contrast" | "backdrop.alt";
    };
} & HTMLProperties<HTMLElement> & {
    as?: ElementType;
    className?: ClassValue;
} & React.RefAttributes<HTMLElement>>;
export type BoxProps = Parameters<typeof Box>[0];
export {};
