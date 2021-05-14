const cards = [];

new Array(18).fill("").forEach((_, index) => {
  cards.push({
    value: index + 1
  });
});

export default cards;
