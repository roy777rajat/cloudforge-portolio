const ANALYTICS_API_URL = 'https://zztynrwa31.execute-api.eu-west-1.amazonaws.com';

// ON/OFF flag for analytics tracking
export const ANALYTICS_ENABLED = true; // Set to false to disable tracking

// Cache for IP and country info
let ipCountryCache: { ip: string; country: string } | null = null;

// Fetch IP and Country information
const fetchIpCountry = async (): Promise<{ ip: string; country: string }> => {
  if (ipCountryCache) return ipCountryCache;
  
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    ipCountryCache = {
      ip: data.ip || 'unknown',
      country: data.country_name || 'unknown',
    };
    return ipCountryCache;
  } catch (error) {
    console.log('Could not fetch IP/Country', error);
    return { ip: 'unknown', country: 'unknown' };
  }
};

// Generate or retrieve visitor ID from localStorage
export const generateVisitorId = (): string => {
  try {
    const existingId = localStorage.getItem('visitor_id');
    if (existingId) return existingId;

    const newId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem('visitor_id', newId);
    return newId;
  } catch (error) {
    console.log('Analytics: Could not access localStorage', error);
    return `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  }
};

// Generate or retrieve session ID from sessionStorage
export const generateSessionId = (): string => {
  try {
    const existingId = sessionStorage.getItem('session_id');
    if (existingId) return existingId;

    const newId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    sessionStorage.setItem('session_id', newId);
    return newId;
  } catch (error) {
    console.log('Analytics: Could not access sessionStorage', error);
    return `sess_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  }
};

// Main tracking function
export const trackEvent = async (
  eventType: 'page_view' | 'session_start' | 'session_end' | 'heartbeat' | 'resume_download' | 'contact_submit',
  additionalData?: Record<string, any>
): Promise<void> => {
  // Check if analytics is enabled
  if (!ANALYTICS_ENABLED) {
    console.log('Analytics disabled, skipping:', eventType);
    return;
  }

  try {
    const { ip, country } = await fetchIpCountry();
    
    const payload = {
      event_type: eventType,
      visitor_id: generateVisitorId(),
      session_id: generateSessionId(),
      ts: new Date().toISOString(),
      path: window.location.pathname + window.location.hash,
      referrer: document.referrer || '',
      user_agent: navigator.userAgent,
      ip,
      country,
      ...additionalData,
    };

    await fetch(ANALYTICS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Analytics tracked:', eventType, payload);
  } catch (error) {
    console.log('Analytics tracking error:', error);
    // Silently fail - don't break the app
  }
};

// Helper functions for specific events
export const trackPageView = () => trackEvent('page_view');
export const trackSessionStart = () => trackEvent('session_start');
export const trackSessionEnd = () => trackEvent('session_end');
export const trackHeartbeat = () => trackEvent('heartbeat');
export const trackResumeDownload = () => trackEvent('resume_download');
export const trackContactSubmit = () => trackEvent('contact_submit');
