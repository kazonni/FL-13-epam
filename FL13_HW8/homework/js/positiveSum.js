let positiveSum = (arr) => arr.reduce((sum, i) => i > 0 ? sum + i : sum, 0);

positiveSum([2, 4, 6, 8]);