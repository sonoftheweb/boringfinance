export const getExpectedBudget = (
    total: number,
    current: number,
    expectedPercent: number
) => {
    const expectedAmount = (total * expectedPercent) / 100;
    const currentPercentage = (current / expectedAmount) * 100 || 0;

    return { expectedAmount, currentPercentage };
};
