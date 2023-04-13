const capitalize = (string) => {
  const upStr =string.charAt(0).toUpperCase() + string.slice(1);
  return upStr;
}

module.exports = capitalize