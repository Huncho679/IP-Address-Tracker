function validDomain(inputString) {
  // Define the regular expression pattern for a valid website format
  var pattern =
    /^[a-zA-Z0-9_-]+\.(com|gov|net|org|edu|int|mil|[a-zA-Z]{2,}|us|uk|ca|au|de|jp|app|blog|guru|io|design|tech|nyc|london|paris|tokyo|arpa|aero|museum|coop)$/;

  // Use test() method to check if the input string matches the pattern
  return pattern.test(inputString);
}

export { validDomain };
