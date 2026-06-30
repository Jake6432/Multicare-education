/**
 * MultiCare Learning — Analytics Event Tracking
 * ─────────────────────────────────────────────────────────────
 * Every event is automatically tagged with:
 *   - client_id      → from client-config.js (which site/subdomain)
 *   - company_name   → from localStorage (which employer the member
 *                       typed in on the welcome screen)
 *
 * On the GENERAL site, every client shares one URL, so company_name
 * is the field you filter by in GA4 / Plausible / Looker Studio to
 * see one company's activity at a time.
 *
 * On CLIENT-SPECIFIC subdomains (Phase 4), client_id already
 * separates the data, and company_name still records the exact
 * employer name the member typed, as a safety net / sanity check.
 *
 * DASHBOARD SETUP (do this once in GA4):
 *   1. Go to Admin → Custom Definitions → Custom Dimensions
 *   2. Add: client_id     (Event scope, parameter: client_id)
 *   3. Add: company_name  (Event scope, parameter: company_name)
 *   4. Add: capsule_title (Event scope, parameter: capsule_title)
 *   5. Add: category      (Event scope, parameter: category)
 *   After ~24 hours these appear as filterable dimensions in
 *   GA4 reports and in Looker Studio.
 *
 * HOW TO FILTER BY COMPANY IN GA4:
 *   Reports → Engagement → Events → add a filter:
 *   company_name exactly matches "Acme Corp"
 *
 * HOW TO SEE ALL COMPANIES AT A GLANCE:
 *   Reports → Engagement → Events → add company_name as a
 *   secondary dimension. You'll see a breakdown table of every
 *   company name members have typed in, with event counts per row.
 *
 * EVENTS TRACKED:
 *   member_registered   capsule_opened       capsule_completed
 *   video_started       quiz_attempted       quiz_passed
 *   badge_earned        trophy_earned        category_filtered
 *   sponsor_view_opened
 *
 * QUARTERLY REPORT (Phase 5):
 *   In Looker Studio, connect GA4, filter by company_name = "Acme Corp",
 *   and pull capsule_opened + capsule_completed counts per
 *   capsule_title. That becomes your per-sponsor report —
 *   no separate subdomain required.
 * ─────────────────────────────────────────────────────────────
 */

const Analytics = (() => {

  // ── Identity lookups ──────────────────────────────────────

  // client_id — which site/subdomain (from client-config.js)
  function getClientId() {
    return (typeof CLIENT_CONFIG !== 'undefined' && CLIENT_CONFIG.clientId)
      ? CLIENT_CONFIG.clientId
      : 'unknown';
  }

  // company_name — which employer the member typed on the welcome screen
  // Stored permanently in localStorage under 'multicare_member_company'
  function getCompanyName() {
    try {
      return localStorage.getItem('multicare_member_company') || 'not_provided';
    } catch (e) {
      return 'not_provided';
    }
  }

  // ── Senders ───────────────────────────────────────────────

  function toGA4(eventName, params = {}) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, {
        client_id:    getClientId(),
        company_name: getCompanyName(),
        ...params
      });
    }
  }

  function toPlausible(eventName, props = {}) {
    if (typeof plausible === 'function') {
      plausible(eventName, {
        props: {
          client_id:    getClientId(),
          company_name: getCompanyName(),
          ...props
        }
      });
    }
  }

  function track(eventName, params = {}) {
    toGA4(eventName, params);
    toPlausible(eventName, params);
    // Dev logging — visible in browser console on localhost only
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      console.log('[Analytics]', getClientId(), '/', getCompanyName(), '→', eventName, params);
    }
  }

  // ── Public API ────────────────────────────────────────────
  return {

    // Fired once, the moment a member completes the welcome screen
    memberRegistered(companyTyped) {
      track('member_registered', {
        company_name: companyTyped || getCompanyName()
      });
    },

    capsuleOpened(index, title, category) {
      track('capsule_opened', {
        capsule_index: index,
        capsule_title: title,
        category
      });
    },

    capsuleCompleted(index, title, category) {
      track('capsule_completed', {
        capsule_index: index,
        capsule_title: title,
        category
      });
    },

    videoStarted(index, title) {
      track('video_started', {
        capsule_index: index,
        capsule_title: title
      });
    },

    quizAttempted(index, questionIndex, correct) {
      track('quiz_attempted', {
        capsule_index:  index,
        question_index: questionIndex,
        correct
      });
    },

    quizPassed(index, title) {
      track('quiz_passed', {
        capsule_index: index,
        capsule_title: title
      });
    },

    badgeEarned(badgeId, badgeLabel) {
      track('badge_earned', {
        badge_id:    badgeId,
        badge_label: badgeLabel
      });
    },

    trophyEarned() {
      track('trophy_earned', { label: 'MultiCare Champion' });
    },

    categoryFiltered(category) {
      track('category_filtered', { category });
    },

    sponsorViewOpened() {
      track('sponsor_view_opened', {});
    }

  };

})();
