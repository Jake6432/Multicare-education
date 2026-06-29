/**
 * MultiCare Learning — Capsule Data File
 * ─────────────────────────────────────────────────────────────
 * Edit this file to update capsule content without touching the
 * main HTML template. Each object in the array is one capsule.
 *
 * FIELDS:
 *   t        — Capsule title (shown in the card and modal header)
 *   d        — Short description (shown under the title)
 *   time     — Duration label e.g. "8 min"
 *   chips    — Array of topic tags shown as pills
 *   cat      — Category: "core" | "invest" | "life" | "sponsor"
 *   gb       — true if this is a Group Benefits capsule
 *   video    — Embed URL for the video (HeyGen, YouTube, Vimeo, Loom)
 *              Leave as "" if no video yet — shows "Coming soon"
 *   summary  — Array of 4 key takeaway strings (shown below the video)
 *              Leave as [] if not yet written
 *   milestone— true to show a star ★ instead of the capsule number
 *
 * HOW TO ADD A NEW CAPSULE:
 *   Copy an existing object, paste it at the right position,
 *   update the fields, save the file, upload to GitHub.
 *
 * HOW TO ADD A VIDEO:
 *   Paste the embed URL into the "video" field.
 *   HeyGen:  https://app.heygen.com/embeds/YOUR_VIDEO_ID
 *   YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
 *   Vimeo:   https://player.vimeo.com/video/YOUR_VIDEO_ID
 *   Loom:    https://www.loom.com/embed/YOUR_VIDEO_ID
 * ─────────────────────────────────────────────────────────────
 */

const CAPSULES = [

  // ════════════════════════════════════════════════════════
  // CORE — 6 capsules (indices 0–5)
  // ════════════════════════════════════════════════════════

  {
    t: "Understanding Your Retirement Savings Plans",
    d: "The ABCs of Accumulation and Decumulation — what your group plan includes, how money goes in, and how it becomes retirement income when you need it.",
    time: "8 min",
    chips: ["Plan basics", "How it works", "First login"],
    cat: "core",
    gb: false,
    video: "https://app.heygen.com/embeds/8c6fd3f949624cfcae1525da08e69ed5",
    summary: [
      "The STEPS tool on the Manulife member website helps you calculate how much you need to save for retirement, model different scenarios, and track your progress — the exercise takes about 10–15 minutes and can be revisited any time.",
      "Most Canadians need approximately 70% of their pre-retirement income in retirement, factoring in government benefits like CPP/QPP and OAS alongside your group plan savings.",
      "You can personalize your retirement projection by adjusting your retirement age, including or excluding government benefits, and adding outside savings such as RRSPs, non-registered investments, or other assets.",
      "Always click Save & Exit when finishing the STEPS exercise to preserve your data — and revisit the tool whenever your income, savings, or retirement plans change."
    ]
  },

  {
    t: "ABCs of RRSP, RPP, LIRA and TFSA — your savings alphabet",
    d: "What each account type is, how they're taxed, when money can move between them, and which one to prioritize at different stages of your career.",
    time: "8 min",
    chips: ["RRSP", "RPP", "LIRA", "TFSA"],
    cat: "core",
    gb: false,
    video: "",
    summary: [
      "An RRSP (Registered Retirement Savings Plan) lets you contribute pre-tax dollars and defer tax until withdrawal — making it most valuable when your income today is higher than it will be in retirement.",
      "A TFSA (Tax-Free Savings Account) uses after-tax dollars but all growth and withdrawals are completely tax-free — ideal when you expect your income to be higher in retirement, or for flexible short-term savings.",
      "An RPP (Registered Pension Plan) is your employer-sponsored group plan — contributions are often matched by your employer, making it the highest-priority account to maximize first.",
      "A LIRA (Locked-In Retirement Account) holds pension money from a former employer's plan — funds are locked in until retirement age and cannot be withdrawn early except in limited hardship circumstances."
    ]
  },

  {
    t: "Why you need to save NOW — the cost of waiting",
    d: "Real numbers showing what starting at 25 vs 35 vs 45 actually costs over a career. Compound growth explained in plain language — and the one change that makes the biggest difference.",
    time: "7 min",
    chips: ["Compound growth", "Start early", "Real examples"],
    cat: "core",
    gb: false,
    video: "",
    summary: [
      "Starting to save at 25 instead of 35 can more than double your retirement balance — even if you contribute the exact same monthly amount — because of the compounding effect of investment returns over time.",
      "Compound growth means you earn returns not just on your original contributions, but on all the returns you've already accumulated — this effect grows exponentially the longer your money is invested.",
      "Even small increases to your contribution rate early in your career have an outsized impact: adding just $50 per month at age 25 can be worth tens of thousands of dollars more by retirement than the same increase made at 45.",
      "The single most powerful action you can take today is to start contributing — or increase your contribution rate — even by a small amount. Time in the market is the most valuable asset you have."
    ]
  },

  {
    t: "Employer matching — the free money you might be missing",
    d: "How the MultiCare match works, what the vesting schedule means, and how to make sure you're capturing every dollar. One of the most important actions any member can take.",
    time: "8 min",
    chips: ["Employer match", "Vesting", "Free money"],
    cat: "core",
    gb: false,
    video: "",
    summary: [
      "Your employer contributes additional money to your retirement plan when you contribute — this is a direct addition to your compensation that you only receive if you participate in the plan.",
      "To capture the full employer match you must contribute at least the minimum threshold specified in your plan — contributing less means leaving part of your compensation on the table.",
      "Vesting refers to how long you must stay with the employer before the matched contributions fully belong to you — understanding your vesting schedule is important if you are considering a job change.",
      "Employer matching is the highest guaranteed return available on any investment — prioritizing it above all other savings vehicles is almost always the right financial decision."
    ]
  },

  {
    t: "Naming your beneficiary — why it matters more than you think",
    d: "What happens to your plan if you haven't named a beneficiary, how to update it after a life change, and the common mistakes that create problems for families.",
    time: "7 min",
    chips: ["Beneficiary", "Estate planning", "How to update"],
    cat: "core",
    gb: false,
    video: "",
    summary: [
      "If you die without a named beneficiary on your retirement plan, your funds go through your estate — this can mean months of delays, probate fees, and your family receiving less than intended.",
      "A named beneficiary receives your plan proceeds directly, outside your will and usually within weeks — it is one of the simplest and most impactful estate planning steps you can take.",
      "Life changes like marriage, divorce, the birth of a child, or the death of a named beneficiary all require you to review and update your beneficiary designation — it does not update automatically.",
      "Log in to your Manulife account to check and update your beneficiary at any time — it takes less than five minutes and should be reviewed at least once a year or after any major life event."
    ]
  },

  {
    t: "Using the STEPS tool — are you on track?",
    d: "A MultiCare-guided walkthrough of the Manulife STEPS retirement calculator. Set your income goal, run different retirement age scenarios, and save your results.",
    time: "9 min",
    chips: ["STEPS tool", "Retirement goal", "Scenarios"],
    cat: "core",
    gb: false,
    video: "",
    summary: [
      "The STEPS tool is available on your Manulife member website and helps you set a retirement income goal, estimate what your savings will produce, and identify any gap between where you are and where you need to be.",
      "You can include or exclude government benefits like CPP/QPP and OAS to model different retirement income scenarios — running both versions gives you a clearer picture of how dependent your retirement is on government programs.",
      "The tool allows you to adjust your retirement age, contribution rate, and outside savings to see the impact of different decisions — experimenting with these variables is one of the most valuable exercises you can do.",
      "Always click Save and Exit at the end of your STEPS session to preserve your data — your results will be waiting for you next time you log in, and you can update them whenever your situation changes."
    ]
  },

  // ════════════════════════════════════════════════════════
  // INVESTMENTS — 5 capsules (indices 6–10)
  // ════════════════════════════════════════════════════════

  {
    t: "Understanding your investment options — funds without the jargon",
    d: "Conservative vs balanced vs growth. What a target-date fund does automatically. How to read a fund fact sheet in under 2 minutes and why fees matter over a 30-year career.",
    time: "9 min",
    chips: ["Fund options", "Target-date", "MER & fees"],
    cat: "invest",
    gb: false,
    video: "",
    summary: [
      "Your plan offers a range of funds from conservative (lower risk, lower return potential) to aggressive growth (higher risk, higher return potential) — the right mix depends on your age, timeline, and comfort with volatility.",
      "A target-date fund automatically shifts your investments from growth-oriented to more conservative as you approach your retirement year — it is a simple, low-maintenance option for members who prefer not to manage their own asset mix.",
      "The Management Expense Ratio (MER) is the annual fee deducted from your fund — even a difference of 0.5% in MER can cost tens of thousands of dollars over a 30-year investment horizon, so comparing fees matters.",
      "A fund fact sheet tells you a fund's objective, historical performance, risk rating, and MER — reviewing it takes under two minutes and gives you everything you need to make an informed fund choice."
    ]
  },

  {
    t: "What's my risk tolerance? Finding the right investment mix",
    d: "Walk through the Manulife investor profile questionnaire. What conservative, moderate and aggressive actually means for your balance over time, and how your age affects the right mix.",
    time: "8 min",
    chips: ["Risk profile", "Asset mix", "Investor questionnaire"],
    cat: "invest",
    gb: false,
    video: "",
    summary: [
      "Risk tolerance is your personal comfort level with seeing your investment balance fluctuate — someone with high risk tolerance can stay calm when markets drop, while someone with low tolerance may feel significant stress.",
      "Your investment time horizon is as important as your comfort level — a 30-year-old with a long runway can generally afford more volatility than someone five years from retirement, because they have time to recover from market downturns.",
      "The Manulife investor profile questionnaire helps match your personality and goals to an appropriate asset mix — it takes about 10 minutes and is available directly on your member website.",
      "Your risk profile should be reviewed every few years or after a major life change — as you approach retirement, gradually shifting toward a more conservative mix helps protect the savings you have already accumulated."
    ]
  },

  {
    t: "Market volatility — why you shouldn't panic when markets drop",
    d: "Historical data showing why long-term investors who stay invested outperform those who try to time the market. What dollar-cost averaging does for you automatically.",
    time: "8 min",
    chips: ["Market drops", "Stay invested", "Long-term thinking"],
    cat: "invest",
    gb: false,
    video: "",
    summary: [
      "Every market decline in history has eventually been followed by a recovery — investors who stayed invested through downturns consistently ended up better off than those who sold and waited on the sidelines.",
      "Trying to time the market — selling when it drops and buying when it recovers — almost always backfires, because the best recovery days often happen immediately after the worst days, and missing just a handful of them significantly reduces your long-term return.",
      "Dollar-cost averaging means your regular payroll contributions automatically buy more fund units when prices are low and fewer when prices are high — this naturally reduces your average cost over time without any action required from you.",
      "When markets drop, the most important thing to do is nothing — reviewing your asset mix to ensure it still matches your risk tolerance is appropriate, but selling out of fear locks in losses that may have recovered within months."
    ]
  },

  {
    t: "CPP strategy — when should I start taking it?",
    d: "You can take CPP as early as 60 or as late as 70. The difference in lifetime income can be significant. A plain-language walkthrough of the math and how to decide what's right for you.",
    time: "9 min",
    chips: ["CPP timing", "Early vs late", "OAS strategy"],
    cat: "invest",
    gb: false,
    video: "",
    summary: [
      "You can begin receiving Canada Pension Plan (CPP) benefits as early as age 60 or as late as age 70 — taking it early reduces your monthly payment permanently, while delaying increases it permanently.",
      "For every month before age 65 that you take CPP, your payment is reduced by 0.6% — taking it at 60 results in a payment that is 36% lower than if you had waited until 65.",
      "For every month after age 65 that you delay CPP, your payment increases by 0.7% — waiting until 70 results in a payment that is 42% higher than at 65, and this higher amount continues for the rest of your life.",
      "The breakeven point for delaying CPP is typically around age 82 — if you expect to live past that age and have other income to bridge the gap, delaying CPP is usually the stronger financial decision."
    ]
  },

  {
    t: "Your income options at retirement — RRIF, annuity or lump sum?",
    d: "What do you actually do with your plan balance when you retire? The three main options explained side by side, with the key questions to ask before you decide.",
    time: "10 min",
    chips: ["Decumulation", "RRIF", "Annuity"],
    cat: "invest",
    gb: false,
    milestone: true,
    video: "",
    summary: [
      "At retirement your group plan balance can be converted into a Registered Retirement Income Fund (RRIF), used to purchase an annuity, or taken as a lump sum — each option has different tax, flexibility, and longevity implications.",
      "A RRIF allows your savings to remain invested and you withdraw a minimum amount each year — it offers flexibility and continued growth potential but requires you to manage withdrawals carefully to avoid outliving your money.",
      "An annuity converts your lump sum into a guaranteed monthly income for life — it eliminates the risk of outliving your savings but offers no flexibility once purchased and provides no inheritance if you die early.",
      "The right choice depends on your health, other income sources, risk tolerance, and whether leaving money to your estate matters to you — speaking with your MultiCare advisor before making this decision is strongly recommended."
    ]
  },

  // ════════════════════════════════════════════════════════
  // LIFE EVENTS — 4 capsules (indices 11–14)
  // ════════════════════════════════════════════════════════

  {
    t: "New to the plan? Your first 5 steps",
    d: "A fast-paced checklist for new employees. Log in to Manulife, set your contribution rate, name your beneficiary, choose your funds, and run STEPS — all in under an hour.",
    time: "7 min",
    chips: ["New member", "Onboarding", "Quick wins"],
    cat: "life",
    gb: false,
    video: "",
    summary: [
      "Your first priority is logging into your Manulife member account — go to manulife.ca, set up your Manulife ID using your personal email, and confirm your plan details are showing correctly.",
      "Set your contribution rate as soon as possible — at minimum, contribute enough to capture your full employer match, as this is the single highest-return action available to you as a new plan member.",
      "Name your beneficiary within your first week — this takes five minutes on the Manulife website and ensures your savings go directly to your chosen person if something happens to you.",
      "Choose your investment funds by completing the investor profile questionnaire on your Manulife member site — if you are unsure, a balanced or target-date fund is a sensible default while you learn more about your options."
    ]
  },

  {
    t: "Getting married or starting a family — updating your plan",
    d: "How a major life event affects your beneficiary, contribution strategy, and insurance coverage. What to update, when to update it, and what happens if you don't.",
    time: "8 min",
    chips: ["Life change", "Beneficiary update", "Family planning"],
    cat: "life",
    gb: true,
    video: "",
    summary: [
      "Marriage, common-law status, the birth or adoption of a child, and divorce are all life events that require you to review and update your retirement plan — in most cases your plan does not update automatically.",
      "Updating your beneficiary designation is the most urgent step after a major life event — failing to update it means your savings could go to a former spouse or an outdated contact rather than your intended recipient.",
      "Starting a family is a good time to review your contribution rate — increasing savings when income is lower or expenses are higher feels difficult, but even small increases now have significant long-term impact due to compound growth.",
      "Your group benefits coverage — including life insurance, disability, and health and dental — may also need to be updated after a family change. Contact your plan administrator or MultiCare advisor to confirm what adjustments are available."
    ]
  },

  {
    t: "Changing jobs — what happens to your pension?",
    d: "What a LIRA is and when your money goes into one. Portability rules, vesting timelines, and the decisions you need to make when you leave an employer.",
    time: "8 min",
    chips: ["LIRA", "Job change", "Portability"],
    cat: "life",
    gb: false,
    video: "",
    summary: [
      "When you leave an employer before retirement, the vested portion of your group pension can typically be transferred into a Locked-In Retirement Account (LIRA) — this preserves the tax-sheltered growth of your savings until retirement.",
      "Vesting determines how much of the employer-contributed portion you are entitled to keep — if you leave before you are fully vested, you may only receive your own contributions plus growth, not the full employer match.",
      "You generally have a window of 60 to 90 days after leaving an employer to choose what to do with your pension balance — options typically include transferring to a LIRA, transferring to a new employer's plan, or in some cases taking cash (with immediate tax consequences).",
      "Before leaving a job, always request a statement of your pension entitlement from your plan administrator — this tells you exactly what you are entitled to and what your options are, so you can make an informed decision."
    ]
  },

  {
    t: "Five years from retirement — your pre-retirement checklist",
    d: "What decisions to make in the final stretch: when to take CPP, how to de-risk your portfolio, decumulation options, and how to estimate your actual monthly retirement income.",
    time: "10 min",
    chips: ["Pre-retirement", "De-risking", "Income estimate"],
    cat: "life",
    gb: false,
    video: "",
    summary: [
      "The five years before retirement are the most critical planning window — the decisions you make during this period about CPP timing, asset allocation, and income structure will shape your financial security for decades.",
      "Begin gradually shifting your investment mix toward more conservative funds — protecting the savings you have accumulated becomes more important than maximizing growth when you are close to needing the money.",
      "Use the Manulife STEPS tool to model your expected retirement income from all sources: your group plan, CPP/QPP, OAS, and any personal savings — identify any shortfall while you still have time to address it.",
      "Book a meeting with your MultiCare advisor at least two years before your target retirement date — decisions about CPP timing, pension conversion, and income structure are complex and benefit significantly from professional guidance."
    ]
  },

  // ════════════════════════════════════════════════════════
  // PLAN SPONSORS — 3 capsules (indices 15–17)
  // ════════════════════════════════════════════════════════

  {
    t: "Your total compensation — it's more than your salary",
    d: "Breaks down the full value of being a plan member: employer pension match, group life insurance, disability coverage, health and dental. Puts a real dollar figure on the total package.",
    time: "8 min",
    chips: ["Total rewards", "Compensation value", "Benefits"],
    cat: "sponsor",
    gb: false,
    milestone: true,
    video: "",
    summary: [
      "Your total compensation includes far more than your base salary — employer pension matching, group life insurance, disability coverage, and health and dental benefits together can add 20 to 30 percent to the value of your overall package.",
      "Employer pension matching is the most financially significant non-salary benefit for most plan members — a 5% match on a $70,000 salary represents $3,500 per year in additional compensation that only flows to you if you participate.",
      "Group life and disability insurance through your employer plan is typically provided at group rates far below what you would pay individually — replacing it independently would cost significantly more and may require medical underwriting.",
      "Understanding the full dollar value of your total compensation helps you make better career decisions, negotiate more confidently, and appreciate the true return on your participation in the group plan."
    ]
  },

  {
    t: "Group benefits 101 — health, dental and what's covered",
    d: "How to use your group benefits, what the plan covers, how to submit a claim, and the connection between benefits coverage and long-term financial wellness.",
    time: "9 min",
    chips: ["Health & dental", "Claims", "Coverage"],
    cat: "sponsor",
    gb: true,
    video: "",
    summary: [
      "Your group health and dental benefits cover a range of expenses including prescription drugs, dental cleanings and procedures, vision care, paramedical services such as physiotherapy and massage, and in some plans mental health support.",
      "To submit a claim, keep your receipts and submit them through your insurer's online portal or app — most claims are processed within 5 to 10 business days and reimbursed directly to your bank account.",
      "Many members leave benefit dollars unused each year simply because they are unaware of what is covered — reviewing your benefits booklet or calling your plan administrator takes less than an hour and can save you hundreds of dollars annually.",
      "Your group benefits protect your long-term financial plan by reducing out-of-pocket health costs that could otherwise force you to withdraw from your retirement savings prematurely — they are a critical part of your overall financial wellness."
    ]
  },

  {
    t: "Financial wellness at work — budgeting, debt and everyday money",
    d: "Emergency funds, managing debt alongside saving, and the wellness resources available through your plan. Because retirement saving works best when your day-to-day finances are stable.",
    time: "9 min",
    chips: ["Budgeting", "Debt management", "EAP & wellness"],
    cat: "sponsor",
    gb: true,
    video: "",
    summary: [
      "A healthy financial foundation starts with an emergency fund of three to six months of living expenses — without one, an unexpected expense forces you to either take on high-interest debt or withdraw from your retirement savings.",
      "Carrying high-interest debt such as credit card balances while also saving for retirement creates a financial drag — in most cases, aggressively paying down debt above 7% interest before maximizing discretionary savings is the stronger strategy.",
      "Your Employee Assistance Program (EAP), available through your group benefits, often includes free access to financial counselling, mental health support, and legal advice — these services are confidential and available at no additional cost to you.",
      "Financial wellness and retirement saving are not separate goals — stabilizing your day-to-day finances reduces the risk of derailing your long-term plan and makes it easier to maintain consistent contributions through every stage of your career."
    ]
  }

]; // end CAPSULES
