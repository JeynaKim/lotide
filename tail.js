const tail = function (arr) {
  const slicedArray = arr.slice(-1);
  return slicedArray[0]
};


module.exports = tail;