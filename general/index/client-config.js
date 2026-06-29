/**
 * MultiCare Learning — Client Configuration File
 * ─────────────────────────────────────────────────────────────
 * Edit this file to customise the site for a specific client.
 * Every value here overrides the default MultiCare branding.
 *
 * HOW TO CREATE A NEW CLIENT VERSION:
 *   1. Copy this file and rename it: client-config-[clientname].js
 *   2. Update the values below
 *   3. Reference it in index.html instead of the default config
 *   4. Deploy to the client's subdomain or folder
 *
 * SUBDOMAIN STRATEGY (Phase 4):
 *   general.multicarelearning.ca  → uses default config
 *   acme.multicarelearning.ca     → uses client-config-acme.js
 *   globex.multicarelearning.ca   → uses client-config-globex.js
 * ─────────────────────────────────────────────────────────────
 */

const CLIENT_CONFIG = {

  // ── Identity ──────────────────────────────────────────────
  clientName:       "MultiCare Learning",          // Shown in nav and footer
  clientShortName:  "MultiCare",                   // Used in shorter contexts
  planAdminName:    "MultiCare Advisory",          // Shown as the plan administrator
  logoText:         "M",                           // Letter shown in the logo mark

  // ── Contact details ───────────────────────────────────────
  contactEmail:     "advice@multicaregrs.com",
  contactPhone:     "1-888-357-1179",
  contactLabel:     "Reach out to your MultiCare advisor",

  // ── Hero section ──────────────────────────────────────────
  heroEyebrow:      "Your savings journey",
  heroHeadline:     "18 short capsules.<br>One <em>confident</em> retirement.",
  heroLede:         "Everything in your retirement and benefits program, explained in plain language — under 10 minutes at a time, on any device, whenever it suits you.",

  // ── Capsule visibility ────────────────────────────────────
  // Set to true to show only specific categories for this client.
  // Set all to true to show everything (default).
  showCategories: {
    core:    true,
    invest:  true,
    life:    true,
    sponsor: true
  },

  // ── Sponsor password ──────────────────────────────────────
  // SHA-256 hash of the sponsor access code.
  // Default password: MultiCare2025!
  // To change: generate a new SHA-256 hash at sha256.online
  // and paste it here.
  sponsorPasswordHash: "20b14f90a5f6687cdf875786e91223084d49a42b608f031193efd873d4344e3e",

  // ── Analytics ─────────────────────────────────────────────
  // Paste your GA4 measurement ID here to enable Google Analytics.
  // Leave blank to disable. Format: "G-XXXXXXXXXX"
  ga4MeasurementId: "",

  // Paste your Plausible domain here to enable Plausible Analytics.
  // Leave blank to disable. Format: "multicarelearning.ca"
  plausibleDomain: "",

  // ── Colours (optional overrides) ─────────────────────────
  // Leave blank to use MultiCare default navy/teal palette.
  // Provide hex values without the # symbol.
  brandNavy: "",   // e.g. "1B3A6B"
  brandTeal: "",   // e.g. "00848A"
  brandGold: "",   // e.g. "F9A825"

  // ── Manulife member site URL ──────────────────────────────
  // Used in call-to-action buttons throughout the site.
  memberPortalUrl:  "https://www.manulife.ca",
  memberPortalLabel: "Log in to Manulife"

};
