const REFERENCE_LENGTH = 36;
const REFERENCE_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const getPaymentReference = () => {
  let result = '';
  for (let i = REFERENCE_LENGTH; i > 0; i -= 1) {
    result += REFERENCE_CHARS[Math.floor(Math.random() * REFERENCE_CHARS.length)];
  }
  return result;
};
