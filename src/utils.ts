const generateRandomIntegerFromCrypto = (): number => +crypto.getRandomValues(new Uint32Array(1)).toString();


export {
  generateRandomIntegerFromCrypto
}