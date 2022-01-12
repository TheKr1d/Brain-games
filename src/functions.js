export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const getPrimeNum = (num) => {
  let flug = true;

  for (let i = 2; (num / 2) > i; i += 1) {
    if (num % i === 0) {
      flug = false;
      break;
    }
  }
  return flug;
};

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
