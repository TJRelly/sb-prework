function calculateMonthlyOrders(arrOfObj) {
  return arrOfObj.reduce((acc, curr) => {
    for(const key in curr) {
      acc += curr[key]
    }
    return acc
  }, 0)
}

