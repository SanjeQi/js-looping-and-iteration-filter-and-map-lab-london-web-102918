function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {
      return driver.revenue > revenue;
    })
  }
   function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function(obj) {
      return obj.name;
    })
  }
   function exactMatch(drivers, obj) {
    return drivers.filter(function(driver) {
      return driver[ Object.keys(obj)[0] ] === Object.values(obj)[0];
    })
  }
   function exactMatchToList(drivers, obj) {
    return exactMatch(drivers, obj).map(function(match) {
      return match.name;
    })
  }