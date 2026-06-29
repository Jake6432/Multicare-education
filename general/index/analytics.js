/**
 * MultiCare Learning — Analytics Event Tracking
 * ─────────────────────────────────────────────────────────────
 * Tracks meaningful capsule activity — not just page views.
 * Works with GA4 and/or Plausible depending on client-config.js
 *
 * EVENTS TRACKED:
 *   capsule_opened      — member opened a capsule modal
 *   capsule_completed   — member passed quiz and marked complete
 *   video_started       — member clicked play on a capsule video
 *   quiz_attempted      — member answered a quiz question
 *   quiz_passed         — member passed all questions in a capsule
 *   badge_earned        — member earned a category badge
 *   trophy_earned       — member earned the champion trophy
 *   category_filtered   — member clicked a category tab
 *   sponsor_view_opened — sponsor accessed the sponsor view
 *
 * HOW TO READ THE DATA (Phase 3 dashboard):
 *   In GA4: Reports → Events → filter by event name
 *   In Plausible: Goals section shows all custom events
 *
 * QUARTERLY REPORT INPUT:
 *   Pull capsule_opened and capsule_completed counts per
 *   capsule_title to generate the sponsor report in Phase 5.
 * ─────────────────────────────────────────────────────────────
 */

const Analytics = (() => {

  // ── Internal: send to GA4 ─────────────────────────────────
  function toGA4(eventName, params = {}) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // ── Internal: send to Plausible ───────────────────────────
  function toPlausible(eventName, props = {}) {
    if (typeof plausible === 'function') {
      plausible(eventName, { props });
    }
  }

  // ── Internal: send to both if configured ──────────────────
  function track(eventName, params = {}) {
    toGA4(eventName, params);
    toPlausible(eventName, params);
    // Console log in dev — remove or comment out in production
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      console.log('[Analytics]', eventName, params);
    }
  }

  // ── Public tracking methods ───────────────────────────────
  return {

    capsuleOpened(capsuleIndex, capsuleTitle, category) {
      track('capsule_opened', {
        capsule_index: capsuleIndex,
        capsule_title: capsuleTitle,
        category:      category
      });
    },

    capsuleCompleted(capsuleIndex, capsuleTitle, category) {
      track('capsule_completed', {
        capsule_index: capsuleIndex,
        capsule_title: capsuleTitle,
        category:      category
      });
    },

    videoStarted(capsuleIndex, capsuleTitle) {
      track('video_started', {
        capsule_index: capsuleIndex,
        capsule_title: capsuleTitle
      });
    },

    quizAttempted(capsuleIndex, questionIndex, correct) {
      track('quiz_attempted', {
        capsule_index:  capsuleIndex,
        question_index: questionIndex,
        correct:        correct
      });
    },

    quizPassed(capsuleIndex, capsuleTitle) {
      track('quiz_passed', {
        capsule_index: capsuleIndex,
        capsule_title: capsuleTitle
      });
    },

    badgeEarned(badgeId, badgeLabel) {
      track('badge_earned', {
        badge_id:    badgeId,
        badge_label: badgeLabel
      });
    },

    trophyEarned() {
      track('trophy_earned', {
        label: 'MultiCare Champion'
      });
    },

    categoryFiltered(category) {
      track('category_filtered', {
        category: category
      });
    },

    sponsorViewOpened() {
      track('sponsor_view_opened', {});
    }

  };

})();
