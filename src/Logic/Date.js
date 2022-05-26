const today = new Date();
const aDayAgo = () => new Date(today.getTime() - 24 * 60 * 60 * 1000);

const dateFormatter = (date) => date.toISOString().split('T')[0];
const uptoNow = dateFormatter(aDayAgo());

export { uptoNow, dateFormatter };
