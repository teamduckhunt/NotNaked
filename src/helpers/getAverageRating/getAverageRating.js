const getAverageRating = ({ ratings }) => {
  let avgRatingSum = 0;
  let numOfRating = 0;
  for (let i = 1; i <= 5; i += 1) {
    avgRatingSum += +ratings[i] * i;
    numOfRating += +ratings[i];
  }
  return avgRatingSum / numOfRating;
};

export default getAverageRating;
