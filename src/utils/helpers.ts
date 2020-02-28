/** A function that generates a unique id by making a value randomly based on time also */
export const generateUniqueID = () => '_' + (Date.now() + Math.random()).toString(36).substr(2, 9);
