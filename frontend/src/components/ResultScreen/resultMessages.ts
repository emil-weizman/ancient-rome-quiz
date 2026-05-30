interface ResultMessage {
  emoji: string;
  title: string;
  quote: string;
  image: string;
  altText: string;
}

export const getResultMessage = (
  score: number,
  totalQuestions: number,
): ResultMessage => {
  const isPerfect = score === totalQuestions;
  const isGoodScore = score / totalQuestions >= 0.6;

  if (isPerfect) {
    return {
      emoji: '🕊️',
      title: 'Now We Are Free',
      quote: '"Win the crowd, and you will win your freedom."',
      image: '/nowWeAreFree.webp',
      altText: 'Freedom',
    };
  }

  if (isGoodScore) {
    return {
      emoji: '🏆',
      title: 'Ave! Victory!',
      quote: '"Well done, soldier of Rome. The Empire honors you."',
      image: '/pathToGlory.webp',
      altText: 'Victory',
    };
  }

  return {
    emoji: '⚔️',
    title: 'The Arena Awaits Again',
    quote: '"Death smiles at us all. All a man can do is smile back."',
    image: '/defeatedGladiator.webp',
    altText: 'Defeat',
  };
};
