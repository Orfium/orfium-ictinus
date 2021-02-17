// because scrollIntoView doesn't exist in jest
window.HTMLElement.prototype.scrollIntoView = function() {};
