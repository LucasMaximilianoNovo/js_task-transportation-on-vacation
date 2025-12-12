/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const totalRent = rentalCost * days;
  const discounted20RentalCost = totalRent - 20;
  const discounted50RentalCost = totalRent - 50;

  if (days < 3) {
    return totalRent;
  }

  if (days < 7) {
    return discounted20RentalCost;
  }

  return discounted50RentalCost;
}

module.exports = calculateRentalCost;
