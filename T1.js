const strLen = (string) => {
  if (string.length < 1 || string.length > 10) {
    console.log("String length must be 1-10 characters.");
  }
  return string.length;
}

module.exports = strLen