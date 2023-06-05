export const createTimeStamp = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  };

  return date.toLocaleString('en-US', options).replace(',', '');
}
