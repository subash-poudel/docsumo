export const getRandomColor = (transparancy: number = 0.3) => {
  const colors = [
    `rgba(255, 0, 0, ${transparancy})`,
    `rgba(0, 255, 0, ${transparancy})`,
    `rgba(0, 0, 255, ${transparancy})`,
    `rgba(255, 255, 0, ${transparancy})`,
    `rgba(255, 0, 255, ${transparancy})`,
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
