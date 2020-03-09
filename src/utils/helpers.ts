/** A function that generates a unique id by making a value randomly based on time also */
export const generateUniqueID = () => '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);

/** A function that takes two strings to generate a test data id by combining them if both exist */
export const generateTestDataId = (defaultId: string, customId?: string) =>
  customId ? `${defaultId}-${customId}` : defaultId;
