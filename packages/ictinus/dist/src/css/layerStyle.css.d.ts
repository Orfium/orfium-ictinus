import { StyleRule } from '@vanilla-extract/css';
import { layerName } from './layers.css';
export declare const layerStyle: (layer: (typeof layerName)[keyof typeof layerName], rule: StyleRule, debugId?: string) => string;
