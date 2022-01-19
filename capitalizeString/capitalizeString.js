const capitalizeString = (string) => {
  if (string[0] === string[0].toUpperCase()) {
    return string;
  }

  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

module.exports = capitalizeString;