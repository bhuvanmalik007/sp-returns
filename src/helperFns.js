export const roundToTwo = (num) => +`${Math.round(`${num}e+2`)}e-2`;

export const generateResults = (sortedSPReturns, range) =>
  sortedSPReturns
    .filter((obj) => obj.year >= range[0] && obj.year <= range[1])
    .reduce(
      (acc, obj) => ({
        cumulative: roundToTwo(acc.cumulative + Number(obj.totalReturn)),
        resultArray: [
          ...acc.resultArray,
          {
            ...obj,
            cumulative: roundToTwo(acc.cumulative + Number(obj.totalReturn)),
          },
        ],
      }),
      { resultArray: [], cumulative: 0 }
    ).resultArray;

export const sortAscending = (data, prop) =>
  data.sort((a, b) => a[prop] - b[prop]);
