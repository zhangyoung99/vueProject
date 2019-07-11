function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [90, 20, 68, 45, 66, 10];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
