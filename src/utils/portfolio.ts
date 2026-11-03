import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';

/**
 * Validates email structure.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Returns formatted time string in Karachi, Pakistan (Asia/Karachi, UTC+5).
 */
export function getKarachiTimeString(date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date);
  } catch {
    // Fallback if Intl timeZone fails
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const karachiDate = new Date(utc + 3600000 * 5);
    return karachiDate.toLocaleTimeString();
  }
}

/**
 * Filters services by category or returns all combined.
 */
export function getServicesByCategory(category: 'all' | 'graphic-design' | 'video-editing'): ServiceItem[] {
  if (category === 'graphic-design') {
    return PORTFOLIO_DATA.graphicDesignServices;
  }
  if (category === 'video-editing') {
    return PORTFOLIO_DATA.videoEditingServices;
  }
  return [...PORTFOLIO_DATA.graphicDesignServices, ...PORTFOLIO_DATA.videoEditingServices];
}

/**
 * Creates mailto URL with pre-filled subject and body.
 */
export function createMailtoLink(subject: string = '', body: string = ''): string {
  const email = PORTFOLIO_DATA.profile.email;
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}
