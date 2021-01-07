export const color = (dataLabel: string) => {
  if (dataLabel === 'hidden') {
    return '#00008B';
  }
  if (dataLabel === 'claimed') {
    return '#FFA500';
  }
  if (dataLabel === 'amt') {
    return '#FF0000';
  }

  return '';
};
