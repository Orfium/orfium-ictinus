export declare const queriesKeys: readonly ["des1920", "des1440", "des1366", "des1200", "tab1024", "tab970", "tab750", "mob480", "mob320"];
export declare const queriesSizes: Record<(typeof queriesKeys)[number], number>;
export declare const useBreakpoints: () => Record<"des1920" | "des1440" | "des1366" | "des1200" | "tab1024" | "tab970" | "tab750" | "mob480" | "mob320", boolean>;
export default useBreakpoints;
