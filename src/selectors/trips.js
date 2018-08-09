export const getVisibleTrips = (trips, { text, sortBy, startDate, endDate }) => {
  return trips.filter((trip) => {
    const startDateMatch = typeof startDate !== 'number' || trip.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || trip.createdAt <= endDate;
    const textMatch = trip.country.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else {
      return 1;
    }
    //else if (sortBy === 'amount') {
    //   return a.amount < b.amount ? 1 : -1;
    // }
  });
};

