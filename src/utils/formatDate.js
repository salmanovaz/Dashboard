/**
 * Azerbaijani month names for locale-aware date formatting.
 */
const AZ_MONTHS = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
  'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
];

/**
 * Formats an ISO 8601 date string into a human-readable Azerbaijani format.
 *
 * @param {string} isoString - ISO date string
 * @returns {string} e.g. "26 Aprel 2026, 14:35"
 */
export function formatDate(isoString) {
  if (!isoString) return '';

  const date = new Date(isoString);
  const day = date.getDate();
  const month = AZ_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day} ${month} ${year}, ${hours}:${minutes}`;
}
