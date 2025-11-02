import { useEffect, useRef } from 'react';
import {
  trackSessionStart,
  trackSessionEnd,
  trackPageView,
  trackHeartbeat,
} from '@/lib/analytics';

export const useAnalytics = () => {
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasTrackedSession = useRef(false);

  useEffect(() => {
    // Track session start only once
    if (!hasTrackedSession.current) {
      trackSessionStart();
      hasTrackedSession.current = true;
    }

    // Track initial page view
    trackPageView();

    // Setup heartbeat every 12 hours (43200000 milliseconds)
    heartbeatIntervalRef.current = setInterval(() => {
      trackHeartbeat();
    }, 43200000);

    // Track session end on unmount/page unload
    const handleUnload = () => {
      trackSessionEnd();
    };

    window.addEventListener('beforeunload', handleUnload);

    // Cleanup
    return () => {
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
      window.removeEventListener('beforeunload', handleUnload);
      trackSessionEnd();
    };
  }, []);

  // Track page view when hash changes (for single page sections)
  useEffect(() => {
    const handleHashChange = () => {
      trackPageView();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
};
