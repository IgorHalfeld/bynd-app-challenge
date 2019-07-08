export const validateScannerOutput = data => (keysToCheck) => {
  if (!Array.isArray(keysToCheck)) {
    throw new Error('`keysToCheck` needs be an array');
  }
  return !keysToCheck.map(key => (key in data)).includes(false);
};
