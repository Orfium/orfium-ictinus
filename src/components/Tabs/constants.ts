export const getItems = (hasCounter = false) => {
  return [
    {
      id: 'geller',
      label: 'Geller',
      ...(hasCounter ? { counter: 3 } : {}),
    },
    {
      id: 'bing',
      label: 'Bing',
      ...(hasCounter ? { counter: 8 } : {}),
    },
    {
      id: 'tribbiani',
      label: 'Tribbiani',
      ...(hasCounter ? { counter: 12 } : {}),
    },
    {
      id: 'green',
      label: 'Green',
      ...(hasCounter ? { counter: 4 } : {}),
    },
    {
      id: 'buffay',
      label: 'Buffay',
      ...(hasCounter ? { counter: 9 } : {}),
    },
  ];
};
