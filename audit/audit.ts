/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Option {
  text: string;
  pts: number;
}

interface Question {
  section: string;
  icon: string;
  sectionIndex: number;
  question: string;
  options: Option[];
}

// 1. QUESTION DATA ARRAY
const QUESTIONS: Question[] = [
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'When someone Googles “[your trade] Melbourne” right now, where do you show up?',
      options: [
        { text: 'Top 3 results — paid ad or organic', pts: 3 },
        { text: 'Page 1, but not in the top 3', pts: 2 },
        { text: 'Page 2 or beyond', pts: 1 },
        { text: 'Honestly, I don’t know', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'What happens when someone visits your website after hours or on weekends?',
      options: [
        { text: 'They can book instantly or get an auto-response within minutes', pts: 3 },
        { text: 'They can fill out a form — I’ll follow up next business day', pts: 1 },
        { text: 'They see my number and can call — that’s it', pts: 1 },
        { text: 'I don’t really have a proper website', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'How many Google reviews do you have, and what’s your rating?',
      options: [
        { text: '50+ reviews at 4.8★ or higher', pts: 3 },
        { text: '20–49 reviews', pts: 2 },
        { text: '1–19 reviews', pts: 1 },
        { text: 'Fewer than 10, or below 4 stars', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'Are you running paid advertising right now?',
      options: [
        { text: 'Yes — active campaigns with tracked ROI', pts: 3 },
        { text: 'Yes, but I’m not really tracking results', pts: 1 },
        { text: 'No — I rely on referrals and organic', pts: 0 },
        { text: 'I tried it once — didn’t really work', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'How fast do you typically respond to a new enquiry or missed call?',
      options: [
        { text: 'Within 5 minutes — every time', pts: 3 },
        { text: 'Within the hour, most of the time', pts: 2 },
        { text: 'Same day when I get a chance', pts: 1 },
        { text: 'When I’m free — could be end of day or next morning', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'When you miss a call, what automatically happens?',
      options: [
        { text: 'An SMS fires within 2 minutes: “Just missed your call — how can I help?”', pts: 3 },
        { text: 'I call back when I see it — usually within a few hours', pts: 1 },
        { text: 'They leave a voicemail and I call back when I can', pts: 0 },
        { text: 'They probably just ring the next person on Google', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'Where do most of your jobs actually come from?',
      options: [
        { text: 'Multiple channels: Google Ads + SEO + referrals + social media', pts: 3 },
        { text: 'Two reliable sources (e.g. referrals + organic Google)', pts: 2 },
        { text: 'Mainly word-of-mouth and referrals', pts: 1 },
        { text: 'Hard to say — it’s pretty random', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'What percentage of your quotes turn into actual booked work?',
      options: [
        { text: '70% or more', pts: 3 },
        { text: '50–70%', pts: 2 },
        { text: '30–50%', pts: 1 },
        { text: 'Under 30%, or I don’t track this', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'After sending a quote, if you don’t hear back — what happens?',
      options: [
        { text: 'Automated sequence: SMS + email at 24h, 48h, and 72h', pts: 3 },
        { text: 'I personally follow up once or twice', pts: 2 },
        { text: 'I send the quote and wait', pts: 1 },
        { text: 'If they want the job, they’ll call', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'Do you know your average job value — and are you actively growing it?',
      options: [
        { text: 'Yes — I know it exactly and I’m working on increasing it', pts: 3 },
        { text: 'Rough idea, but not actively managing it', pts: 1 },
        { text: 'Not really sure what my average job is worth', pts: 0 }
      ]
    },
    {
      section: 'RETAIN & GROW',
      icon: 'refresh-cw',
      sectionIndex: 4,
      question: 'How do you collect Google reviews after a completed job?',
      options: [
        { text: 'Automated — a review request fires to every customer on completion', pts: 3 },
        { text: 'I ask manually when I remember', pts: 1 },
        { text: 'I rely on happy customers to leave one themselves', pts: 0 },
        { text: 'Reviews aren’t really a focus for me', pts: 0 }
      ]
    },
    {
      section: 'RETAIN & GROW',
      icon: 'refresh-cw',
      sectionIndex: 4,
      question: 'Do you have a structured referral system?',
      options: [
        { text: 'Yes — customers and trade partners have a clear incentive to refer', pts: 3 },
        { text: 'I ask happy customers to tell their mates', pts: 1 },
        { text: 'Referrals just happen naturally — no system', pts: 0 }
      ]
    },
    {
      section: 'TOP PRIORITY',
      icon: 'target',
      sectionIndex: 5,
      question: 'What is your top priority goal right now?',
      options: [
        { text: 'Be the first call when someone needs your service', pts: 0 },
        { text: 'Stop losing leads to competitors who respond faster', pts: 0 },
        { text: 'Turn one-time customers into repeat business', pts: 0 },
        { text: 'Charge what I’m worth without losing jobs', pts: 0 }
      ]
    }
  ];

document.addEventListener('DOMContentLoaded', () => {
  const GHL_WEBHOOK_URL = (import.meta as any).env?.VITE_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/placeholder_webhook_url";

  // 2. STATE VARIABLES
  interface Answer {
    score: number;
    sectionIndex: number;
  }
  let currentQ = 0;
  let selectedPoints: (number | null)[] = new Array(13).fill(null);
  let selectedIndices: (number | null)[] = new Array(13).fill(null);
  let answers: (Answer | null)[] = new Array(13).fill(null);
  let totalScore = 0;
  let detectedSuburb = '';
  let insightTimer: any = null;
  let advanceTimer: any = null;

  const microInsights: Record<number, { low: string; mid: string; high: string }> = {
    0: {
      low: "Most businesses in this position lose 70% of potential inbound clicks to competitors listed in the top three local results.",
      mid: "You are ahead of many, but top-three listings capture over 60% of all search volume, leaving only a fraction for lower rankings.",
      high: "Strong ranking. Businesses that secure top-three visibility consistently capture the highest volume of high-intent search inquiries before prospects scroll down."
    },
    1: {
      low: "This is the #1 reason websites fail to convert traffic, as prospects search for an immediate solution and quickly move to another business.",
      mid: "You are ahead of many, but a delay of several hours gives competitors a window to convert the customer first.",
      high: "Strong setup. Businesses that offer instant engagement see up to a 4x increase in conversion rates from after-hours traffic."
    },
    2: {
      low: "Most businesses in this position lose over half their local leads, as modern buyers look for substantial social proof to establish trust.",
      mid: "You are ahead of many, but the gap between good and great here is social proof density that outshines nearby competitors.",
      high: "Strong reputation. Businesses with a high volume of positive ratings convert prospects much easier and can command premium rates."
    },
    3: {
      low: "This is the #1 reason businesses waste capital on marketing. Untracked ad campaigns often lead to unprofitable acquisition costs.",
      mid: "You are ahead of many, but tracking ROI precisely is what prevents ad spend from becoming a costly guessing game.",
      high: "Strong precision. Businesses with tracked ROI can confidently scale their budgets because they know exactly how much profit each dollar generates."
    },
    4: {
      low: "This is the #1 reason enquiries go cold. Inbound leads are 21 times more likely to convert if contacted within five minutes.",
      mid: "You are ahead of many, but responding within minutes rather than an hour secures the customer before they contact a competitor.",
      high: "Strong speed. Businesses that consistently respond within five minutes win the vast majority of jobs they compete for."
    },
    5: {
      low: "Most businesses lose up to 62% of inbound calls to voicemail. Prospects rarely wait and will call the next competitor immediately.",
      mid: "You are ahead of many, but manual call-backs leave a gap where competitors can engage and win the prospect first.",
      high: "Strong response. Immediate automated text replies salvage missed calls, instantly starting a conversation and stopping the prospect from searching further."
    },
    6: {
      low: "This is the #1 reason businesses suffer from unpredictable booking cycles, as single-source models are highly vulnerable to market changes.",
      mid: "You are ahead of many, but relying on just two channels limits your growth and exposes you to algorithm or platform changes.",
      high: "Strong foundation. Diversified acquisition channels ensure consistent job flow and shield your pipeline from seasonal or market fluctuations."
    },
    7: {
      low: "Most businesses with low win rates lose thousands annually to unpaid estimating hours, highlighting a clear leak in their sales presentation.",
      mid: "You are ahead of many, but moving beyond a 50% conversion rate usually requires a structured follow-up system.",
      high: "Strong conversion. A win rate above 70% indicates high pricing confidence and exceptional alignment between your offer and the customer's expectations."
    },
    8: {
      low: "Most businesses lose 30% to 40% of their open quotes simply by never following up, leaving easy revenue on the table.",
      mid: "You are ahead of many, but consistent automated sequences ensure no prospect slips through the cracks during busy periods.",
      high: "Strong process. Multi-touch automated follow-ups recover an average of 25% of quotes that would otherwise go unanswered."
    },
    9: {
      low: "Most businesses struggle with profitability because they don't know this metric, making it impossible to optimize services for higher margins.",
      mid: "You are ahead of many, but actively optimizing package options or upsells is the fastest way to raise profit margins.",
      high: "Strong metrics. Managing average job value allows you to generate significantly more revenue from the exact same volume of bookings."
    },
    10: {
      low: "This is the #1 reason businesses lack reviews. Manual systems fail over time because the process relies on constant manual effort.",
      mid: "You are ahead of many, but automated requests on job completion yield three times more feedback with zero ongoing effort.",
      high: "Strong mechanism. Automated review collection builds a compounding marketing asset that continually drives organic customer acquisition."
    },
    11: {
      low: "Most businesses in this position miss out on high-value repeat work by failing to systematically incentivize their existing networks.",
      mid: "You are ahead of many, but a formal, structured incentive system produces up to double the referral volume of manual requests.",
      high: "Strong network effect. Having an incentivized referral system turns happy customers into an active sales force, lowering customer acquisition costs."
    }
  };

  async function fetchGeoLocation() {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      if (data && data.city) {
        detectedSuburb = data.city;
        const suburbInput = document.getElementById('suburb') as HTMLInputElement;
        if (suburbInput) {
          suburbInput.value = detectedSuburb;
        }
      }
    } catch (_) {}
  }
  fetchGeoLocation();

  function calculateScores() {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      if (answers[i]) {
        sum += answers[i]!.score;
      }
    }
    totalScore = sum;
    const leakPercentage = Math.round(((36 - totalScore) / 36) * 100);
    const estimatedMonthlyLeak = Math.round((leakPercentage / 100) * 15000);
    return { totalScore, leakPercentage, estimatedMonthlyLeak };
  }

  // 3. STATE MACHINE
  function showState(stateName: string) {
    // Use inline styles — bypasses all CSS class specificity issues
    ['intro', 'question', 'emailgate', 'email-gate', 'results'].forEach(id => {
      const el = document.getElementById(`state-${id}`);
      if (el) {
        el.classList.add('state-hidden');
        el.style.display = 'none';
        el.classList.remove('active');
      }
    });

    const target = document.getElementById(`state-${stateName}`);
    if (target) {
      target.classList.remove('state-hidden');
      target.style.display = 'block';
      target.style.visibility = 'visible';
      target.style.opacity = '1';
      console.log(`showState: showing #state-${stateName}`);
    } else {
      console.error(`showState: #state-${stateName} NOT FOUND in DOM`);
    }

    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }

  // 4. LEAK METER UPDATE
  function updateLeakMeter(score: number) {
    const leakPct = ((36 - score) / 36) * 100;
    const estLeak = Math.round((leakPct / 100) * 15000);
    const needleDeg = -90 + (leakPct / 100 * 180);
    
    // Update needles across pages
    ['gauge-needle', 'gauge-needle-gate', 'results-needle'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transformOrigin = '140px 120px';
        el.style.transform = `rotate(${needleDeg}deg)`;
      }
    });

    // Update mobile sliders
    ['mobile-needle-indicator', 'mobile-needle-indicator-gate'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.left = `${leakPct}%`;
    });
    
    // Update dollar displays
    [
      'leak-dollar', 
      'leak-dollar-gate', 
      'results-leak-amount', 
      'mobile-leak-dollar', 
      'mobile-leak-amount', 
      'mobile-leak-amount-gate'
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '$' + estLeak.toLocaleString();
    });
  }

  // 5. LEAK METER SVG BUILDER
  function buildLeakMeterHTML() {
    return `
      <div class="bg-white dark:bg-[#1C1C1A] border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-8 shadow-xs flex flex-col items-center">
        <div class="w-full flex justify-center">
          <svg width="260" height="155" viewBox="0 0 280 155" class="w-full overflow-visible">
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1A9080" />
                <stop offset="50%" stop-color="#C9A96E" />
                <stop offset="100%" stop-color="#E8622A" />
              </linearGradient>
            </defs>
            <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="#E8E5DF" stroke-width="18" stroke-linecap="round" class="dark:stroke-[#2E2E2C]" />
            <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="url(#gaugeGradient)" stroke-width="18" stroke-linecap="round" />
            <text x="25" y="145" fill="#1A9080" font-size="11" font-family="var(--font-sans)" font-weight="700" text-anchor="start">FULL REVENUE</text>
            <text x="255" y="145" fill="#E8622A" font-size="11" font-family="var(--font-sans)" font-weight="700" text-anchor="end">MAJOR LEAK</text>
            <!-- Needle -->
            <g id="gauge-needle" class="origin-[140px_120px]" style="transform: rotate(-90deg); transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);">
              <line x1="140" y1="120" x2="140" y2="20" stroke="#1C1C1A" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-[#F5F2EC]" />
              <circle cx="140" cy="120" r="6" fill="#1C1C1A" class="dark:fill-[#F5F2EC]" />
            </g>
          </svg>
        </div>

        <div class="text-center mt-5">
          <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold tracking-[2px] uppercase">ESTIMATED MONTHLY LEAK</span>
          <div id="leak-dollar" class="text-[#1C1C1A] dark:text-[#F5F2EC] font-display font-bold text-[36px] mt-1 leading-none">$0</div>
        </div>
      </div>
    `;
  }

  // 6. QUESTION RENDERER
  function renderQuestion(index: number) {
    console.log('renderQuestion → target el:', document.getElementById('state-question'), '| q:', QUESTIONS[index]);

    if (insightTimer) {
      clearTimeout(insightTimer);
      insightTimer = null;
    }
    if (advanceTimer) {
      clearTimeout(advanceTimer);
      advanceTimer = null;
    }

    if (!QUESTIONS || !QUESTIONS.length) {
      document.getElementById('state-question').innerHTML = 
        '<p style="color:red;padding:40px">ERROR: QUESTIONS array is empty or undefined</p>';
      return;
    }

    try {
      const q = QUESTIONS[index];
      const progressPct = Math.round((index / QUESTIONS.length) * 100);
      
      const optionsHTML = q.options.map((opt, i) => {
        const isSelected = selectedIndices[index] === i;
        const cardClass = isSelected 
          ? 'border-1.5 border-[#1A9080] bg-[rgba(26,144,128,0.08)] dark:bg-[rgba(26,144,128,0.15)] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option option-card selected' 
          : 'border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option option-card';
        
        const circleClass = isSelected 
          ? 'w-5 h-5 rounded-full bg-[#1A9080] flex items-center justify-center shrink-0 text-white radio-circle' 
          : 'w-5 h-5 rounded-full border-1.5 border-[#1C1C1A]/30 dark:border-white/30 flex items-center justify-center shrink-0 transition-all duration-150 radio-circle';
        
        const checkHTML = isSelected ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : '';

        return `
          <div class="${cardClass}" data-points="${3 - i}" data-index="${i}">
            <div class="${circleClass}">${checkHTML}</div>
            <span class="font-sans font-medium text-[15px] sm:text-[16px] text-[#1C1C1A] dark:text-[#F5F2EC]">${opt.text}</span>
          </div>
        `;
      }).join('');
      
      const stateQuestion = document.getElementById('state-question');
      if (stateQuestion) {
        stateQuestion.innerHTML = `
          <!-- Top Progress Bar -->
          <div class="w-full mb-12 flex flex-col">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <div class="flex items-center gap-2.5 text-[#1A9080] dark:text-[#22D3EE]">
                <i data-lucide="${q.icon}" class="w-5 h-5"></i>
                <span id="section-label" class="font-sans font-bold text-[13px] tracking-[1.5px] uppercase">${q.section}</span>
              </div>
              <span class="font-sans text-[14px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 font-medium" id="question-counter">
                Question <span class="font-bold text-[#1C1C1A] dark:text-[#F5F2EC]">${index + 1}</span> of ${QUESTIONS.length}
              </span>
            </div>
            <div class="w-full h-[6px] bg-[#E8E5DF] dark:bg-[#2E2E2C] rounded-full overflow-hidden">
              <div id="progress-bar-fill" class="h-full bg-[#1A9080] rounded-full transition-all duration-300" style="width: ${progressPct}%;"></div>
            </div>
          </div>
  
          <!-- 2-Column Responsive Grid -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
            <!-- Column 1 (Left 65%) -->
            <div class="md:col-span-8 flex flex-col relative min-h-[440px]">
              <div id="quiz-question-card" class="bg-white dark:bg-[#1C1C1A] border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 md:p-11 shadow-md relative flex flex-col justify-between min-h-[440px]">
                <div>
                  <div class="flex items-center gap-2 text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 mb-4">
                    <i data-lucide="${q.icon}" class="w-4 h-4"></i>
                    <span class="font-sans font-semibold text-[11px] tracking-[1px] uppercase">${q.section}</span>
                  </div>
                  
                  <h2 class="font-display font-bold text-[22px] md:text-[26px] text-[#1C1C1A] dark:text-[#F5F2EC] leading-tight mb-8 question-text">
                    ${q.question}
                  </h2>
  
                  <div id="answers-container" class="flex flex-col gap-3.5">
                    ${optionsHTML}
                  </div>
                  <!-- Container for micro-insight -->
                  <div id="micro-insight-wrapper" class="w-full"></div>
                </div>
  
                <!-- Actions Footer inside card -->
                <div class="flex items-center justify-between border-t border-[#E8E5DF] dark:border-[#2E2E2C] pt-6 mt-8">
                  <!-- Back Button -->
                  ${index > 0 
                    ? `<button id="back-btn" class="flex items-center gap-2 text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 hover:text-[#E8622A] font-sans font-semibold text-[15px] transition-colors cursor-pointer">
                         &larr; Back
                       </button>` 
                    : `<div></div>`
                  }
                  
                  <button id="next-btn" class="bg-[#1C1C1A] dark:bg-[#F5F2EC] hover:bg-[#E8622A] dark:hover:bg-[#E8622A] hover:text-white dark:hover:text-white text-[#F5F2EC] dark:text-[#1C1C1A] font-sans font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full transition-all duration-200 shadow-xs items-center gap-2 cursor-pointer" style="display: ${selectedPoints[index] !== null ? 'flex' : 'none'};">
                    <span>Next Question</span>
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Column 2 (Right 35% - Desktop Sticky Gauge) -->
            <div class="hidden md:block md:col-span-4 sticky top-[110px]">
              ${buildLeakMeterHTML()}
            </div>
          </div>
  
          <!-- Sticky Mini Leak Meter for Mobile Only -->
          <div class="md:hidden bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl px-5 py-4 sticky top-[72px] z-30 shadow-xs mt-6">
            <div class="flex justify-between items-center mb-2.5">
              <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold uppercase tracking-[1px]">Est. Monthly Leak:</span>
              <span id="mobile-leak-dollar" class="text-[#E8622A] font-display font-bold text-[22px] leading-none">$0</span>
            </div>
            <div class="relative w-full h-2 bg-[#E8E5DF] dark:bg-[#2E2E2C] rounded-full overflow-visible">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#1A9080] via-[#C9A96E] to-[#E8622A]"></div>
              <div id="mobile-needle-indicator" class="absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-white border-[3px] border-[#1C1C1A] rounded-full shadow-md transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)" style="left: 0%;"></div>
            </div>
          </div>
        `;
      }
      
      // Set active needle smoothly
      const cumulativeScore = selectedPoints.slice(0, index + 1).filter(p => p !== null).reduce((a, b) => a + b, 0);
      updateLeakMeter(cumulativeScore);
  
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
      
      // Attach selection handlers via event delegation
      const container = document.getElementById('answers-container');
      if (container) {
        container.addEventListener('click', function(e) {
          const option = (e.target as HTMLElement).closest('.answer-option');
          if (!option) return;
          
          container.querySelectorAll('.answer-option').forEach(el => {
            el.className = 'border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option option-card';
            const circle = el.querySelector('.radio-circle');
            if (circle) {
              circle.className = 'w-5 h-5 rounded-full border-1.5 border-[#1C1C1A]/30 dark:border-white/30 flex items-center justify-center shrink-0 transition-all duration-150 radio-circle';
              circle.innerHTML = '';
            }
          });
          
          option.className = 'border-1.5 border-[#1A9080] bg-[rgba(26,144,128,0.08)] dark:bg-[rgba(26,144,128,0.15)] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option option-card selected';
          const activeCircle = option.querySelector('.radio-circle');
          if (activeCircle) {
            activeCircle.className = 'w-5 h-5 rounded-full bg-[#1A9080] flex items-center justify-center shrink-0 text-white radio-circle';
            activeCircle.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-white"></i>';
          }
          
          const optIndex = parseInt(option.getAttribute('data-index') || '0', 10);
          const score = 3 - optIndex;
          const sectionIndex = QUESTIONS[currentQ].sectionIndex;

          answers[currentQ] = { score, sectionIndex };
          selectedPoints[currentQ] = score;
          selectedIndices[currentQ] = optIndex;
          
          saveSessionState();
  
          if (typeof (window as any).lucide !== 'undefined') {
            (window as any).lucide.createIcons();
          }
  
          const metrics = calculateScores();
          updateLeakMeter(metrics.totalScore);
          
          const nextBtn = document.getElementById('next-btn');
          if (nextBtn) nextBtn.style.display = 'flex';

          // Clear any active timers first
          if (insightTimer) {
            clearTimeout(insightTimer);
            insightTimer = null;
          }
          if (advanceTimer) {
            clearTimeout(advanceTimer);
            advanceTimer = null;
          }

          if (currentQ < 12) {
            const wrapper = document.getElementById('micro-insight-wrapper');
            if (wrapper) {
              wrapper.innerHTML = ''; // instantly clear any stale micro-insight
            }
            
            // 300ms delay before fade-in
            insightTimer = setTimeout(() => {
              const pts = score;
              let tier: 'low' | 'mid' | 'high' = 'mid';
              if (pts === 0) {
                tier = 'low';
              } else if (pts === 3) {
                tier = 'high';
              }
              const text = microInsights[currentQ][tier];
              if (wrapper) {
                wrapper.innerHTML = `
                  <div id="micro-insight" class="mt-5 border-l-[3px] border-[#1A9080] bg-[rgba(26,144,128,0.06)] dark:bg-[rgba(26,144,128,0.12)] p-[10px_14px] rounded-r-xl text-[13px] text-[#1C1C1A]/85 dark:text-[#F5F2EC]/85 font-sans leading-relaxed flex items-start gap-2.5 max-w-full animate-insight-slide-up">
                    <span class="text-[#1A9080] shrink-0">📊</span>
                    <span>${text}</span>
                  </div>
                `;
              }
            }, 300);

            // Stays visible for 1.4 seconds before auto-advancing, so 300ms + 1400ms = 1700ms total
            advanceTimer = setTimeout(() => {
              const isSectionEnd = [3, 6, 9].includes(currentQ);
              if (isSectionEnd) {
                showSectionTransition(currentQ + 1, function() {
                  currentQ++;
                  renderQuestion(currentQ);
                  showState('question');
                });
              } else {
                currentQ++;
                renderQuestion(currentQ);
                showState('question');
              }
            }, 1700);
          }
        });
      }
      
      // Attach Next button listener
      const nextBtn = document.getElementById('next-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          if (insightTimer) {
            clearTimeout(insightTimer);
            insightTimer = null;
          }
          if (advanceTimer) {
            clearTimeout(advanceTimer);
            advanceTimer = null;
          }
          const isLastQ = currentQ === 12;
          const isSectionEnd = [3, 6, 9].includes(currentQ);
          
          if (isLastQ) {
            currentQ++;
            saveSessionState();
            renderResults();
            showState('results');
          } else if (isSectionEnd) {
            showSectionTransition(currentQ + 1, function() {
              currentQ++;
              renderQuestion(currentQ);
              showState('question');
            });
          } else {
            currentQ++;
            renderQuestion(currentQ);
            showState('question');
          }
        });
      }
  
      // Attach Back button listener
      const backBtn = document.getElementById('back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', function() {
          if (insightTimer) {
            clearTimeout(insightTimer);
            insightTimer = null;
          }
          if (advanceTimer) {
            clearTimeout(advanceTimer);
            advanceTimer = null;
          }
          if (currentQ > 0) {
            currentQ--;
            renderQuestion(currentQ);
          }
        });
      }
    } catch (err: any) {
      console.error(err);
      const stateQuestion = document.getElementById('state-question');
      if (stateQuestion) {
        stateQuestion.innerHTML = `
          <div style="color:white;padding:40px;text-align:center;">
            <p>Quiz error: <span id="quiz-error-msg"></span></p>
          </div>
        `;
        const errMsgEl = document.getElementById('quiz-error-msg');
        if (errMsgEl) {
          errMsgEl.textContent = err.message;
        }
      }
    }
  }

  // 7. SECTION TRANSITION SCREEN
  function showSectionTransition(nextIndex: number, callback: () => void) {
    const nextQ = QUESTIONS[nextIndex];
    const sectionNum = nextIndex === 4 ? 2 : nextIndex === 7 ? 3 : 4;
    
    const stateQuestion = document.getElementById('state-question');
    if (!stateQuestion) {
      callback();
      return;
    }
    
    stateQuestion.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center min-h-[500px] w-full max-w-[680px] mx-auto px-6 py-12 relative animate-fade-in">
        <div id="section-transition-card" class="bg-[#1A9080] rounded-2xl p-8 md:p-16 flex flex-col justify-center items-center text-center text-[#F5F2EC] w-full shadow-lg cursor-pointer transition-transform hover:scale-[1.01] duration-300">
          <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <i data-lucide="${nextQ.icon}" class="w-12 h-12 text-[#F5F2EC]"></i>
          </div>
          <span class="font-sans font-medium text-[14px] text-white/70 uppercase tracking-[2px] mb-2">
            Section ${sectionNum} of 4
          </span>
          <h2 class="font-display font-bold text-[32px] md:text-[40px] text-white leading-tight mb-8">
            ${nextQ.section}
          </h2>
          <div class="flex gap-2 justify-center">
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-30 animate-bounce" style="animation-delay: -0.3s"></span>
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-60 animate-bounce" style="animation-delay: -0.15s"></span>
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-90 animate-bounce"></span>
          </div>
          <span class="text-white/40 text-[12px] font-sans mt-5">Click anywhere or wait to continue</span>
        </div>
      </div>
    `;
    
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
    
    let transitioned = false;
    const triggerTransition = () => {
      if (transitioned) return;
      transitioned = true;
      callback();
    };
    
    const timer = setTimeout(triggerTransition, 2200);
    
    const card = document.getElementById('section-transition-card');
    if (card) {
      card.addEventListener('click', () => {
        clearTimeout(timer);
        triggerTransition();
      });
    }
  }

  // 8. EMAIL GATE
  function attachEmailGateListeners() {
    updateLeakMeter(totalScore);

    const form = document.getElementById('email-gate-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const firstNameInput = document.getElementById('field-firstname') as HTMLInputElement;
      const emailInput = document.getElementById('field-email') as HTMLInputElement;
      const phoneInput = document.getElementById('field-phone') as HTMLInputElement;
      const tradeTypeSelect = document.getElementById('field-trade') as HTMLSelectElement;
      const suburbInput = document.getElementById('field-suburb') as HTMLInputElement;

      const firstName = firstNameInput?.value?.trim();
      const email = emailInput?.value?.trim();
      const phone = phoneInput?.value?.trim() || "";
      const tradeType = tradeTypeSelect?.value;
      const topPriority = (selectedIndices[12] !== null && selectedIndices[12] !== undefined)
        ? QUESTIONS[12].options[selectedIndices[12]!].text
        : "";
      const suburb = suburbInput?.value?.trim();
      
      const errName = document.getElementById("error-first-name");
      const errEmail = document.getElementById("error-email");
      const errTrade = document.getElementById("error-trade-type");
      const errSuburb = document.getElementById("error-suburb");

      if (errName) errName.style.display = 'none';
      if (errEmail) errEmail.style.display = 'none';
      if (errTrade) errTrade.style.display = 'none';
      if (errSuburb) errSuburb.style.display = 'none';

      let valid = true;
      if (!firstName) {
        if (errName) errName.style.display = 'block';
        valid = false;
      }
      if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        if (errEmail) errEmail.style.display = 'block';
        valid = false;
      }
      if (!tradeType || tradeType === '') {
        if (errTrade) errTrade.style.display = 'block';
        valid = false;
      }
      if (!suburb) {
        if (errSuburb) errSuburb.style.display = 'block';
        valid = false;
      }
      if (!valid) return;
      
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const spinner = document.getElementById('gate-spinner');
      const btnText = document.getElementById('gate-btn-text');
      
      if (spinner) spinner.style.display = 'block';
      if (btnText) btnText.textContent = 'Calculating Scores...';
      if (btn) btn.disabled = true;
      
      let marketingScore = 0;
      let leadCaptureScore = 0;
      let pricingScore = 0;
      let retentionScore = 0;

      for (let i = 0; i < 12; i++) {
        const ans = answers[i];
        if (ans) {
          if (ans.sectionIndex === 1) marketingScore += ans.score;
          else if (ans.sectionIndex === 2) leadCaptureScore += ans.score;
          else if (ans.sectionIndex === 3) pricingScore += ans.score;
          else if (ans.sectionIndex === 4) retentionScore += ans.score;
        }
      }

      const totalScoreCalculated = marketingScore + leadCaptureScore + pricingScore + retentionScore;
      const leakPct = Math.round(((36 - totalScoreCalculated) / 36) * 100);
      const estLeak = Math.round((leakPct / 100) * 15000);
      
      try {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            email,
            phone,
            tradeType,
            topPriority,
            suburb,
            totalScore: totalScoreCalculated,
            leakPercentage: leakPct,
            estimatedMonthlyLeak: estLeak,
            marketingScore,
            leadCaptureScore,
            pricingScore,
            retentionScore
          })
        });
      } catch (err) {
        console.log('Webhook error (non-blocking):', err);
      }
      
      renderResults();
      showState('results');
    });
  }

  // 9. RESULTS RENDERER
  function renderResults() {
    let s1 = 0; // Getting Found (sectionIndex 1)
    let s2 = 0; // Capturing Leads (sectionIndex 2)
    let s3 = 0; // Converting Jobs (sectionIndex 3)
    let s4 = 0; // Retain & Grow (sectionIndex 4)

    for (let i = 0; i < 12; i++) {
      const ans = answers[i];
      if (ans) {
        if (ans.sectionIndex === 1) s1 += ans.score;
        else if (ans.sectionIndex === 2) s2 += ans.score;
        else if (ans.sectionIndex === 3) s3 += ans.score;
        else if (ans.sectionIndex === 4) s4 += ans.score;
      }
    }

    const calculatedTotalScore = s1 + s2 + s3 + s4;
    totalScore = calculatedTotalScore; // Keep global in sync

    const leakPercentage = Math.round(((36 - calculatedTotalScore) / 36) * 100);
    const estimatedMonthlyLeak = Math.round((leakPercentage / 100) * 15000);
    const formattedLeak = '$' + estimatedMonthlyLeak.toLocaleString() + '/month';
    const needleDeg = -90 + (leakPercentage / 100 * 180);

    // Calculate Worst Section Percentage and Priority Tie-Breaking
    const p1 = s1 / 12;
    const p2 = s2 / 9;
    const p3 = s3 / 9;
    const p4 = s4 / 6;

    let worstPct = p1;
    let worstSec = 'found';

    if (p2 < worstPct) {
      worstPct = p2;
      worstSec = 'capture';
    }
    if (p3 < worstPct) {
      worstPct = p3;
      worstSec = 'convert';
    }
    if (p4 < worstPct) {
      worstPct = p4;
      worstSec = 'retain';
    }

    let leakHeading = '';
    let leakBody = '';
    let leakStat = '';

    if (worstSec === 'found') {
      leakHeading = "You're losing customers before they ever find you";
      leakBody = "Your biggest leak is at the top of the funnel. Customers searching for your service right now are landing on competitors — not because you're worse, but because you're harder to find. Visibility gaps compound fast: every week this isn't fixed is another week of customers you'll never know you lost.";
      leakStat = "Businesses in the top 3 local results capture 67% of all clicks. Everyone else splits the remaining 33%.";
    } else if (worstSec === 'capture') {
      leakHeading = "Customers are finding you — then slipping away";
      leakBody = "Your biggest leak is in the handoff between interest and contact. People are reaching your business but not converting into booked enquiries. Slow response windows, missed calls, and no follow-up system are letting warm leads go cold — and straight to a competitor who picks up faster.";
      leakStat = "Leads contacted within 5 minutes are 21x more likely to convert than those followed up an hour later.";
    } else if (worstSec === 'convert') {
      leakHeading = "Your leads are coming in — but too many quotes go quiet";
      leakBody = "Your biggest leak is in the conversion stage. You're generating enquiries but losing jobs at the quote or follow-up phase. Without a structured system to present, follow up, and close — you're doing unpaid estimation work for competitors who eventually win the job.";
      leakStat = "The average trade business loses 30–40% of open quotes simply by never following up a second time.";
    } else {
      leakHeading = "Your best customers are leaving value on the table";
      leakBody = "Your biggest leak is in what happens after the job. Happy customers who'd refer you — and hire you again — are going silent because there's no system keeping you top of mind. Retention and referrals are the highest-margin revenue available to any service business. Right now, most of it is going uncaptured.";
      leakStat = "Businesses with a structured referral system generate up to 2x the referral volume of those who rely on word-of-mouth alone.";
    }

    let tierLabel = '';
    let tierBgClass = '';
    let tierTextClass = '';
    let tierBorder = '';
    let tierIcon = '';
    let tierCopy = '';
    let tierCTAHtml = '';

    if (calculatedTotalScore >= 28) {
      tierLabel = 'Optimised';
      tierBgClass = 'bg-[#1A9080]/10 dark:bg-[#1A9080]/20';
      tierTextClass = 'text-[#1A9080] dark:text-[#22D3EE]';
      tierBorder = 'border-[#1A9080]/30';
      tierIcon = 'check-circle';
      tierCopy = "You’re in the top 5% of Melbourne tradies by systems maturity. The opportunity isn’t plugging leaks — it’s amplification. Let’s stack OS systems to compound what’s already working.";
      tierCTAHtml = `<a href="/#our-os" class="inline-flex items-center justify-center bg-[#1A9080] hover:bg-[#1A9080]/90 text-white px-6 py-3 rounded-full text-sm font-sans font-bold transition-all text-center">View OS Systems →</a>`;
    } else if (calculatedTotalScore >= 19) {
      tierLabel = 'Moderate Leak';
      tierBgClass = 'bg-[#C9A96E]/10 dark:bg-[#C9A96E]/20';
      tierTextClass = 'text-[#C9A96E] dark:text-[#FBBF24]';
      tierBorder = 'border-[#C9A96E]/30';
      tierIcon = 'alert-circle';
      tierCopy = "You’re running a solid operation. The leaks at this level are subtle but compounding — missed follow-ups, underpriced jobs, quotes that fell through the cracks. A few targeted fixes are typically worth $2K–$4K/month.";
      tierCTAHtml = `<a href="/#our-os" class="inline-flex items-center justify-center bg-[#C9A96E] hover:bg-[#C9A96E]/90 text-white px-6 py-3 rounded-full text-sm font-sans font-bold transition-all text-center">View OS Systems →</a>`;
    } else if (calculatedTotalScore >= 10) {
      tierLabel = 'Significant Leak';
      tierBgClass = 'bg-[#D97706]/10 dark:bg-[#D97706]/20';
      tierTextClass = 'text-[#D97706] dark:text-[#F59E0B]';
      tierBorder = 'border-[#D97706]/30';
      tierIcon = 'trending-down';
      tierCopy = "You’ve got some fundamentals in place, but critical gaps in capture and conversion are letting leads slip through. Customers are choosing you — but some are choosing someone else because they responded faster or had more reviews.";
      tierCTAHtml = `<a href="https://meetings.hubspot.com/stratapult/discovery" target="_blank" class="inline-flex items-center justify-center bg-[#D97706] hover:bg-[#D97706]/90 text-white px-6 py-3 rounded-full text-sm font-sans font-bold transition-all text-center">Book My Free Revenue Recovery Call →</a>`;
    } else {
      tierLabel = 'Critical Leak';
      tierBgClass = 'bg-[#E8622A]/10 dark:bg-[#E8622A]/20';
      tierTextClass = 'text-[#E8622A] dark:text-[#F97316]';
      tierBorder = 'border-[#E8622A]/30';
      tierIcon = 'alert-triangle';
      tierCopy = "Your operation has significant room to grow. You’re likely losing 60–80% of potential leads to competitors who respond faster. A single OS deployment can dramatically change your monthly enquiry flow — we’ve seen trades go from 3 jobs/week to 11 in 90 days.";
      tierCTAHtml = `<a href="https://meetings.hubspot.com/stratapult/discovery" target="_blank" class="inline-flex items-center justify-center bg-[#E8622A] hover:bg-[#E8622A]/90 text-white px-6 py-3 rounded-full text-sm font-sans font-bold transition-all text-center">Book My Free Revenue Recovery Call →</a>`;
    }

    const sectionData = [
      { label: 'Getting Found', icon: 'search', score: s1, max: 12 },
      { label: 'Capturing Leads', icon: 'phone', score: s2, max: 9 },
      { label: 'Converting Jobs', icon: 'briefcase', score: s3, max: 9 },
      { label: 'Retain & Grow', icon: 'refresh-cw', score: s4, max: 6 }
    ];
    
    const sectionsHTML = sectionData.map(s => {
      const pct = Math.round((s.score / s.max) * 100);
      const barColor = pct < 50 ? '#E8622A' : pct < 75 ? '#C9A96E' : '#1A9080';
      return `
        <div>
          <div class="flex justify-between items-center mb-2">
            <span class="font-sans font-bold text-sm text-[#1C1C1A] dark:text-[#F5F2EC] flex items-center gap-2">
              <i data-lucide="${s.icon}" class="w-4 h-4 text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50"></i>
              ${s.label}
            </span>
            <span class="font-sans font-semibold text-xs text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50">${s.score} / ${s.max} (${pct}%)</span>
          </div>
          <div class="w-full bg-[#E8E5DF] dark:bg-[#2E2E2C] rounded-full h-2 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000" style="width: ${pct}%; background-color: ${barColor};"></div>
          </div>
        </div>
      `;
    }).join('');

    const stateResults = document.getElementById('state-results');
    if (stateResults) {
      stateResults.innerHTML = `
        <div class="w-full max-w-3xl mx-auto flex flex-col items-center py-6 text-left">
          
          <!-- Header / Headline -->
          <div class="text-center mb-10 w-full">
            <span class="font-sans font-bold text-xs text-[#E8622A] uppercase tracking-[2px]">YOUR CUSTOM REPORT</span>
            <h2 class="font-serif font-bold text-3xl sm:text-4xl text-[#1C1C1A] dark:text-[#F5F2EC] mt-2 mb-4 leading-tight">
              Revenue Leak Audit Results
            </h2>
            <p class="font-sans text-sm sm:text-base text-[#1C1C1A]/60 dark:text-[#F5F2EC]/60 max-w-lg mx-auto">
              Here is the complete analysis of your trade business systems. We've mapped your results against standard benchmarks.
            </p>
          </div>

          <!-- Key Metrics Bento Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
            
            <!-- Left: Score & Leak Info -->
            <div class="bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold tracking-[2.5px] uppercase block mb-1">AUDIT RATING</span>
                
                <!-- Status Badge -->
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${tierBorder} ${tierBgClass} ${tierTextClass} font-sans font-bold text-sm tracking-wide mb-6">
                  <i data-lucide="${tierIcon}" class="w-4 h-4"></i>
                  <span>${tierLabel}</span>
                </div>
                
                <div class="mb-6">
                  <span class="text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 text-xs font-sans font-bold block">OVERALL SCORE</span>
                  <div class="flex items-baseline gap-1 mt-1">
                    <span class="text-4xl sm:text-5xl font-display font-black text-[#1C1C1A] dark:text-[#F5F2EC]">${calculatedTotalScore}</span>
                    <span class="text-lg sm:text-xl text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40">/ 36 pts</span>
                  </div>
                </div>
              </div>

              <div class="border-t border-[#E8E5DF] dark:border-[#2E2E2C] pt-6 flex flex-col gap-4">
                <div>
                  <span class="text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 text-xs font-sans font-bold block uppercase tracking-wider">REVENUE LEAKAGE</span>
                  <span class="text-2xl sm:text-3xl font-display font-bold text-[#E8622A] mt-1 block">${leakPercentage}%</span>
                </div>
                <div>
                  <span class="text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 text-xs font-sans font-bold block uppercase tracking-wider">ESTIMATED MONTHLY LOSS</span>
                  <span class="text-3xl sm:text-4xl font-display font-black text-[#1C1C1A] dark:text-[#F5F2EC] mt-1 block">${formattedLeak}</span>
                </div>
              </div>
            </div>

            <!-- Right: Dynamic Gauge -->
            <div class="bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center">
              <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold tracking-[2.5px] uppercase block mb-4">REVENUE LOSS METER</span>
              
              <div class="w-full max-w-[260px] aspect-[280/155] relative">
                <svg width="280" height="155" viewBox="0 0 280 155" class="w-full overflow-visible">
                  <defs>
                    <linearGradient id="resultsGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#1A9080" />
                      <stop offset="50%" stop-color="#C9A96E" />
                      <stop offset="100%" stop-color="#E8622A" />
                    </linearGradient>
                  </defs>
                  <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="#E8E5DF" stroke-width="18" stroke-linecap="round" class="dark:stroke-[#2E2E2C]" />
                  <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="url(#resultsGaugeGrad)" stroke-width="18" stroke-linecap="round" />
                  <text x="25" y="145" fill="#1A9080" font-size="10" font-family="var(--font-sans)" font-weight="700" text-anchor="start">FULL REVENUE</text>
                  <text x="255" y="145" fill="#E8622A" font-size="10" font-family="var(--font-sans)" font-weight="700" text-anchor="end">MAJOR LEAK</text>
                  <!-- Needle -->
                  <g id="results-needle" class="origin-[140px_120px]" style="transform: rotate(${needleDeg}deg); transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);">
                    <line x1="140" y1="120" x2="140" y2="20" stroke="#1C1C1A" stroke-width="3" stroke-linecap="round" class="dark:stroke-[#F5F2EC]" />
                    <circle cx="140" cy="120" r="7" fill="#1C1C1A" class="dark:fill-[#F5F2EC]" />
                  </g>
                </svg>
              </div>

              <p class="text-center text-xs text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 font-sans mt-4">
                Needle indicates your business's current leakage level based on selected answers.
              </p>
            </div>

          </div>

          <!-- Detailed System Breakdown -->
          <div class="bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 sm:p-8 shadow-sm w-full mb-8">
            <h3 class="font-serif font-bold text-xl text-[#1C1C1A] dark:text-[#F5F2EC] mb-6">Detailed System Breakdown</h3>
            <div class="flex flex-col gap-6">
              ${sectionsHTML}
            </div>
          </div>

          <!-- Biggest Revenue Leak Diagnosis Block -->
          <div class="bg-[rgba(232,98,42,0.04)] border-l-4 border-[#E8622A] rounded-r-2xl p-[20px_24px] w-full mb-8 shadow-sm text-left">
            <span class="text-[11px] font-sans font-bold text-[#E8622A] tracking-[0.1em] uppercase block mb-1.5">
              YOUR BIGGEST LEAK
            </span>
            <h3 class="font-serif font-bold text-xl text-[#1C1C1A] dark:text-[#F5F2EC] mb-2 leading-tight">
              ${leakHeading}
            </h3>
            <p class="font-sans text-sm text-[#1C1C1A]/80 dark:text-[#F5F2EC]/80 leading-relaxed mb-4">
              ${leakBody}
            </p>
            <div class="border-t border-[#E8622A]/20 pt-3">
              <p class="font-sans text-[13px] italic text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70 leading-normal">
                — ${leakStat}
              </p>
            </div>
          </div>

          <!-- Deep Dive & Insight Analysis -->
          <div class="bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 sm:p-8 shadow-sm w-full mb-8">
            <h3 class="font-serif font-bold text-xl text-[#1C1C1A] dark:text-[#F5F2EC] mb-3">Our Analysis</h3>
            <p class="font-sans text-sm sm:text-base text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70 leading-relaxed">
              ${tierCopy}
            </p>
          </div>

          <!-- Action Card / Next Move -->
          <div class="bg-[#1A9080]/10 dark:bg-[#1A9080]/15 border border-[#1A9080]/30 rounded-2xl p-6 sm:p-8 w-full mb-10">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-[#1A9080]/10 rounded-xl text-[#1A9080]">
                <i data-lucide="compass" class="w-6 h-6"></i>
              </div>
              <div>
                <h4 class="font-serif font-bold text-lg text-[#1C1C1A] dark:text-[#F5F2EC] mb-1">Recommended Next Action</h4>
                <p class="font-sans text-sm text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70 leading-relaxed mb-6">
                  To help plug these gaps, we recommend scheduling a 30-minute diagnostic session with our team. We'll outline a clear plan to install these systems in your Melbourne trade operation.
                </p>
                ${tierCTAHtml}
              </div>
            </div>
          </div>

          <!-- Subtle Divider -->
          <div class="w-full border-t border-[#E8E5DF] dark:border-[#2E2E2C] my-8"></div>

          <!-- Personalised Revenue Recovery Section -->
          <div id="revenue-recovery-card" class="bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 sm:p-8 shadow-sm w-full mb-10 text-left">
            <div id="post-results-intro" class="mb-6">
              <h3 class="font-serif font-bold text-xl sm:text-2xl text-[#1C1C1A] dark:text-[#F5F2EC] mb-2">
                Want your personalised revenue recovery number?
              </h3>
              <p class="font-sans text-sm text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70 leading-relaxed">
                Tell us two things and we'll calculate exactly how much revenue your business is leaking — and send you a free PDF breakdown.
              </p>
            </div>
            
            <form id="post-results-form" class="flex flex-col gap-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Name -->
                <div class="flex flex-col md:col-span-2">
                  <input type="text" id="post-field-name" placeholder="Your first name" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans placeholder-[#1C1C1A]/40 dark:placeholder-[#F5F2EC]/40 focus:outline-none focus:border-[#1A9080] transition-colors h-[48px]" required />
                  <span id="post-error-name" class="text-[#E8622A] text-xs mt-1 hidden">First name is required.</span>
                </div>

                <!-- Email -->
                <div class="flex flex-col">
                  <input type="email" id="post-field-email" placeholder="your@email.com" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans placeholder-[#1C1C1A]/40 dark:placeholder-[#F5F2EC]/40 focus:outline-none focus:border-[#1A9080] transition-colors h-[48px]" required />
                  <span id="post-error-email" class="text-[#E8622A] text-xs mt-1 hidden">Please enter a valid email address.</span>
                </div>

                <!-- Phone -->
                <div class="flex flex-col">
                  <input type="tel" id="post-field-phone" placeholder="04xx xxx xxx" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans placeholder-[#1C1C1A]/40 dark:placeholder-[#F5F2EC]/40 focus:outline-none focus:border-[#1A9080] transition-colors h-[48px]" required />
                  <span id="post-error-phone" class="text-[#E8622A] text-xs mt-1 hidden">Phone number is required.</span>
                </div>

                <!-- Suburb -->
                <div class="flex flex-col md:col-span-2">
                  <label for="suburb" class="block text-[11px] font-bold font-sans text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[1px] mb-1.5">Your suburb or city</label>
                  <input type="text" id="suburb" name="suburb" value="${detectedSuburb}" placeholder="e.g. Richmond" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans placeholder-[#1C1C1A]/40 dark:placeholder-[#F5F2EC]/40 focus:outline-none focus:border-[#1A9080] transition-colors h-[48px]" />
                </div>

                <!-- Average Job Value -->
                <div class="flex flex-col">
                  <label for="post-field-avg-job-value" class="block text-[11px] font-bold font-sans text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[1px] mb-1.5">What's your average job value?</label>
                  <select id="post-field-avg-job-value" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[#1A9080] transition-colors h-[48px] cursor-pointer" required>
                    <option value="" disabled selected>Select average job value</option>
                    <option value="200">Under $300</option>
                    <option value="450">$300 – $600</option>
                    <option value="1050">$600 – $1,500</option>
                    <option value="3250">$1,500 – $5,000</option>
                    <option value="7500">$5,000+</option>
                  </select>
                  <span id="post-error-avg-job-value" class="text-[#E8622A] text-xs mt-1 hidden">Average job value is required.</span>
                </div>

                <!-- Jobs Per Month -->
                <div class="flex flex-col">
                  <label for="post-field-jobs-per-month" class="block text-[11px] font-bold font-sans text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 uppercase tracking-[1px] mb-1.5">How many jobs do you complete per month?</label>
                  <select id="post-field-jobs-per-month" class="bg-[#F5F2EC] dark:bg-[#141412] border border-[#D8D4CC] dark:border-[#2E2E2C] text-[#1C1C1A] dark:text-[#F5F2EC] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[#1A9080] transition-colors h-[48px] cursor-pointer" required>
                    <option value="" disabled selected>Select jobs completed per month</option>
                    <option value="6">1 – 10 jobs</option>
                    <option value="15">10 – 20 jobs</option>
                    <option value="30">20 – 40 jobs</option>
                    <option value="50">40+ jobs</option>
                  </select>
                  <span id="post-error-jobs-per-month" class="text-[#E8622A] text-xs mt-1 hidden">Jobs completed per month is required.</span>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="mt-2 flex flex-col sm:flex-row items-center gap-4">
                <button type="submit" id="post-btn-submit" class="bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-sm py-3 px-6 rounded-full w-full sm:w-auto transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md shadow-[#E8622A]/10 cursor-pointer">
                  <div id="post-spinner" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin hidden"></div>
                  <span id="post-btn-text">Calculate My Revenue Leak →</span>
                </button>
                <div class="flex items-center gap-1.5 text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 text-[11px] font-sans">
                  <i data-lucide="lock" class="w-3.5 h-3.5"></i>
                  <span>No spam. Your data is secure.</span>
                </div>
              </div>
            </form>

            <!-- Results Reveal Card (Hidden by default) -->
            <div id="post-results-reveal" class="hidden flex-col items-center text-center py-4 px-2 sm:px-6 animate-fade-slide-up">
              <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-xs font-bold font-sans tracking-[2px] uppercase mb-3 block">
                YOUR ESTIMATED MONTHLY REVENUE LEAK
              </span>
              <div id="reveal-dollar-amount" class="text-[#E8622A] font-display font-black text-[42px] sm:text-[56px] md:text-[64px] tracking-tight mb-4 leading-none">
                $0 / month
              </div>
              <p class="font-sans text-sm sm:text-base text-[#1C1C1A]/70 dark:text-[#F5F2EC]/70 max-w-lg mx-auto mb-8 leading-relaxed">
                Based on your audit score and business volume, this is how much revenue your business is likely losing every single month to gaps in visibility, lead capture, and conversion.
              </p>
              <a href="#" class="bg-[#E8622A] hover:bg-[#ff763d] text-white font-sans font-bold text-base py-4 px-8 rounded-full w-full max-w-md transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center gap-2 shadow-lg shadow-[#E8622A]/20 cursor-pointer">
                Book a Free Strategy Call &rarr;
              </a>
            </div>
          </div>

          <!-- Retake Button -->
          <div class="text-center w-full">
            <button id="btn-retake" class="px-8 py-3.5 border border-[#1C1C1A]/20 dark:border-[#F5F2EC]/20 rounded-full text-sm font-sans font-bold text-[#1C1C1A] dark:text-[#F5F2EC] hover:bg-[#1C1C1A]/5 dark:hover:bg-[#F5F2EC]/5 transition-all cursor-pointer">
              Retake the Revenue Audit
            </button>
          </div>

        </div>
      `;
    }
    
    const postForm = document.getElementById('post-results-form');
    if (postForm) {
      postForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('post-field-name') as HTMLInputElement;
        const emailInput = document.getElementById('post-field-email') as HTMLInputElement;
        const phoneInput = document.getElementById('post-field-phone') as HTMLInputElement;
        const suburbInput = document.getElementById('suburb') as HTMLInputElement;
        const avgJobValueSelect = document.getElementById('post-field-avg-job-value') as HTMLSelectElement;
        const jobsPerMonthSelect = document.getElementById('post-field-jobs-per-month') as HTMLSelectElement;
        
        const firstName = nameInput?.value?.trim();
        const email = emailInput?.value?.trim();
        const phone = phoneInput?.value?.trim() || "";
        const suburb = suburbInput?.value?.trim() || "";
        const avgJobValueVal = avgJobValueSelect?.value;
        const jobsPerMonthVal = jobsPerMonthSelect?.value;
        
        const errName = document.getElementById("post-error-name");
        const errEmail = document.getElementById("post-error-email");
        const errPhone = document.getElementById("post-error-phone");
        const errAvgJobValue = document.getElementById("post-error-avg-job-value");
        const errJobsPerMonth = document.getElementById("post-error-jobs-per-month");
        
        if (errName) errName.style.display = 'none';
        if (errEmail) errEmail.style.display = 'none';
        if (errPhone) errPhone.style.display = 'none';
        if (errAvgJobValue) errAvgJobValue.style.display = 'none';
        if (errJobsPerMonth) errJobsPerMonth.style.display = 'none';
        
        let valid = true;
        if (!firstName) {
          if (errName) errName.style.display = 'block';
          valid = false;
        }
        if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
          if (errEmail) errEmail.style.display = 'block';
          valid = false;
        }
        if (!phone) {
          if (errPhone) errPhone.style.display = 'block';
          valid = false;
        }
        if (!avgJobValueVal) {
          if (errAvgJobValue) errAvgJobValue.style.display = 'block';
          valid = false;
        }
        if (!jobsPerMonthVal) {
          if (errJobsPerMonth) errJobsPerMonth.style.display = 'block';
          valid = false;
        }
        
        if (!valid) return;
        
        const btn = document.getElementById('post-btn-submit') as HTMLButtonElement;
        const spinner = document.getElementById('post-spinner');
        const btnText = document.getElementById('post-btn-text');
        
        if (spinner) spinner.style.display = 'block';
        if (btnText) btnText.textContent = 'Calculating...';
        if (btn) btn.disabled = true;
        
        // Calculate scores from answers
        let marketingScore = 0;
        let leadCaptureScore = 0;
        let pricingScore = 0;
        let retentionScore = 0;
        
        for (let i = 0; i < 12; i++) {
          const ans = answers[i];
          if (ans) {
            if (ans.sectionIndex === 1) marketingScore += ans.score;
            else if (ans.sectionIndex === 2) leadCaptureScore += ans.score;
            else if (ans.sectionIndex === 3) pricingScore += ans.score;
            else if (ans.sectionIndex === 4) retentionScore += ans.score;
          }
        }
        
        const totalScoreCalculated = marketingScore + leadCaptureScore + pricingScore + retentionScore;
        const leakPct = Math.round(((36 - totalScoreCalculated) / 36) * 100);
        
        const aovMidpoint = parseInt(avgJobValueVal, 10);
        const jobsMidpoint = parseInt(jobsPerMonthVal, 10);
        const monthlyRevenue = aovMidpoint * jobsMidpoint;
        const personalisedMonthlyLeak = Math.round((leakPct / 100) * monthlyRevenue);
        
        const topPriority = (selectedIndices[12] !== null && selectedIndices[12] !== undefined)
          ? QUESTIONS[12].options[selectedIndices[12]!].text
          : "";
          
        const tradeType = (selectedIndices[0] !== null && selectedIndices[0] !== undefined)
          ? QUESTIONS[0].options[selectedIndices[0]!].text
          : "";
          
        try {
          await fetch(GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName,
              email,
              phone,
              tradeType,
              suburb,
              totalScore: totalScoreCalculated,
              leakPercentage: leakPct,
              marketingScore,
              leadCaptureScore,
              pricingScore,
              retentionScore,
              topPriority,
              avgJobValue: aovMidpoint,
              monthlyJobs: jobsMidpoint,
              monthlyRevenue,
              personalisedMonthlyLeak
            })
          });
        } catch (err) {
          console.log('Webhook error (non-blocking):', err);
        } finally {
          if (spinner) spinner.style.display = 'none';
          if (btnText) btnText.textContent = 'Calculated!';
          
          // Hide intro and form
          const introEl = document.getElementById('post-results-intro');
          if (introEl) introEl.classList.add('hidden');
          if (postForm) postForm.classList.add('hidden');
          
          // Show the reveal card with the calculated value
          const revealEl = document.getElementById('post-results-reveal');
          if (revealEl) {
            const amountEl = document.getElementById('reveal-dollar-amount');
            if (amountEl) {
              amountEl.textContent = `$${personalisedMonthlyLeak.toLocaleString()} / month`;
            }
            revealEl.classList.remove('hidden');
            revealEl.style.display = 'flex';
          }
        }
      });
    }

    const retakeBtn = document.getElementById('btn-retake');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', function() {
        resetQuiz();
      });
    }

    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }

  // 10. RESTART AND SESSION PERSISTENCE WIPE
  function resetQuiz() {
    clearAuditState();
    showState('intro');
    updateLeakMeter(36);
  }

  function clearAuditState() {
    selectedPoints = new Array(13).fill(null);
    selectedIndices = new Array(13).fill(null);
    answers = new Array(13).fill(null);
    currentQ = 0;
    totalScore = 0;
    localStorage.removeItem('stratapult_audit');
  }

  function saveSessionState() {
    localStorage.setItem(
      'stratapult_audit',
      JSON.stringify({ answers: selectedIndices, points: selectedPoints, currentQ, answersObject: answers })
    );
  }

  // 11. LAYOUT CONTROLS: THEME & MENU
  function initTheme() {
    const savedTheme = localStorage.getItem("darkMode");
    const isDark = savedTheme === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function initNavbarAndMenu() {
    const navbar = document.getElementById("navbar");
    const trigger = document.getElementById("mobile-menu-trigger");
    const closeBtn = document.getElementById("mobile-menu-close");
    const drawer = document.getElementById("mobile-drawer");

    // Scroll listener
    let isSystemsOpen = false;
    let isResourcesOpen = false;

    function updateNavbarStyles() {
      if (!navbar) return;
      const isScrolled = window.scrollY > 50;
      if (isScrolled || isSystemsOpen || isResourcesOpen) {
        navbar.className = "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 bg-[#F5F2EC]/92 dark:bg-[#141412]/92 backdrop-blur-md border-b border-[#1C1C1A]/10 dark:border-[#2E2E2C]";
      } else {
        navbar.className = "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 bg-transparent border-b border-transparent";
      }
    }

    window.addEventListener("scroll", updateNavbarStyles, { passive: true });

    // Mobile Drawer
    trigger?.addEventListener("click", () => {
      drawer?.classList.remove("translate-x-full");
      drawer?.classList.add("translate-x-0");
    });

    closeBtn?.addEventListener("click", () => {
      drawer?.classList.remove("translate-x-0");
      drawer?.classList.add("translate-x-full");
    });

    // Close mobile drawer on link clicks
    const drawerLinks = drawer?.querySelectorAll("a");
    drawerLinks?.forEach(link => {
      if (!link.classList.contains('coming-soon-btn') && link.id !== 'mobile-accordion-trigger') {
        link.addEventListener("click", () => {
          drawer?.classList.remove("translate-x-0");
          drawer?.classList.add("translate-x-full");
        });
      }
    });

    // Desktop Mega Menu Logic
    const itemSystems = document.getElementById("nav-item-systems");
    const menuSystems = document.getElementById("mega-menu-systems");
    const underlineSystems = document.getElementById("underline-systems");

    const itemResources = document.getElementById("nav-item-resources");
    const menuResources = document.getElementById("mega-menu-resources");
    const underlineResources = document.getElementById("underline-resources");

    const backdrop = document.getElementById("mega-menu-backdrop");

    let systemsTimeout: any = null;
    let resourcesTimeout: any = null;

    function showSystems() {
      if (systemsTimeout) clearTimeout(systemsTimeout);
      if (resourcesTimeout) clearTimeout(resourcesTimeout);

      // Hide resources first
      hideResourcesInstant();

      isSystemsOpen = true;
      updateNavbarStyles();

      if (menuSystems) {
        menuSystems.style.pointerEvents = "auto";
        menuSystems.classList.remove("hidden", "opacity-0", "-translate-y-2");
        // Force reflow
        void menuSystems.offsetHeight;
        menuSystems.classList.add("opacity-100", "translate-y-0");
      }
      if (underlineSystems) {
        underlineSystems.classList.remove("scale-x-0");
        underlineSystems.classList.add("scale-x-100");
      }
      if (backdrop) {
        backdrop.classList.remove("hidden", "opacity-0", "pointer-events-none");
        void backdrop.offsetHeight;
        backdrop.classList.add("opacity-100", "pointer-events-auto");
      }
    }

    function hideSystems() {
      systemsTimeout = setTimeout(() => {
        isSystemsOpen = false;
        updateNavbarStyles();

        if (menuSystems) {
          menuSystems.style.pointerEvents = "none";
          menuSystems.classList.remove("opacity-100", "translate-y-0");
          menuSystems.classList.add("opacity-0", "-translate-y-2");
          // Delayed hidden
          setTimeout(() => {
            if (!isSystemsOpen) menuSystems.classList.add("hidden");
          }, 300);
        }
        if (underlineSystems) {
          underlineSystems.classList.remove("scale-x-100");
          underlineSystems.classList.add("scale-x-0");
        }
        if (backdrop) {
          backdrop.classList.remove("opacity-100", "pointer-events-auto");
          backdrop.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => {
            if (!isSystemsOpen && !isResourcesOpen) backdrop.classList.add("hidden");
          }, 300);
        }
      }, 150);
    }

    function hideSystemsInstant() {
      isSystemsOpen = false;
      if (menuSystems) {
        menuSystems.style.pointerEvents = "none";
        menuSystems.classList.remove("opacity-100", "translate-y-0");
        menuSystems.classList.add("opacity-0", "-translate-y-2", "hidden");
      }
      if (underlineSystems) {
        underlineSystems.classList.remove("scale-x-100");
        underlineSystems.classList.add("scale-x-0");
      }
    }

    function showResources() {
      if (resourcesTimeout) clearTimeout(resourcesTimeout);
      if (systemsTimeout) clearTimeout(systemsTimeout);

      // Hide systems first
      hideSystemsInstant();

      isResourcesOpen = true;
      updateNavbarStyles();

      if (menuResources) {
        menuResources.style.pointerEvents = "auto";
        menuResources.classList.remove("hidden", "opacity-0", "-translate-y-2");
        void menuResources.offsetHeight;
        menuResources.classList.add("opacity-100", "translate-y-0");
      }
      if (underlineResources) {
        underlineResources.classList.remove("scale-x-0");
        underlineResources.classList.add("scale-x-100");
      }
      if (backdrop) {
        backdrop.classList.remove("hidden", "opacity-0", "pointer-events-none");
        void backdrop.offsetHeight;
        backdrop.classList.add("opacity-100", "pointer-events-auto");
      }
    }

    function hideResources() {
      resourcesTimeout = setTimeout(() => {
        isResourcesOpen = false;
        updateNavbarStyles();

        if (menuResources) {
          menuResources.style.pointerEvents = "none";
          menuResources.classList.remove("opacity-100", "translate-y-0");
          menuResources.classList.add("opacity-0", "-translate-y-2");
          setTimeout(() => {
            if (!isResourcesOpen) menuResources.classList.add("hidden");
          }, 300);
        }
        if (underlineResources) {
          underlineResources.classList.remove("scale-x-100");
          underlineResources.classList.add("scale-x-0");
        }
        if (backdrop) {
          backdrop.classList.remove("opacity-100", "pointer-events-auto");
          backdrop.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => {
            if (!isSystemsOpen && !isResourcesOpen) backdrop.classList.add("hidden");
          }, 300);
        }
      }, 150);
    }

    function hideResourcesInstant() {
      isResourcesOpen = false;
      if (menuResources) {
        menuResources.style.pointerEvents = "none";
        menuResources.classList.remove("opacity-100", "translate-y-0");
        menuResources.classList.add("opacity-0", "-translate-y-2", "hidden");
      }
      if (underlineResources) {
        underlineResources.classList.remove("scale-x-100");
        underlineResources.classList.add("scale-x-0");
      }
    }

    // Attach desktop hover events
    itemSystems?.addEventListener("mouseenter", showSystems);
    itemSystems?.addEventListener("mouseleave", hideSystems);
    menuSystems?.addEventListener("mouseenter", showSystems);
    menuSystems?.addEventListener("mouseleave", hideSystems);

    itemResources?.addEventListener("mouseenter", showResources);
    itemResources?.addEventListener("mouseleave", hideResources);
    menuResources?.addEventListener("mouseenter", showResources);
    menuResources?.addEventListener("mouseleave", hideResources);

    // Initial check
    updateNavbarStyles();

    // Coming soon Toast trigger logic
    const toast = document.getElementById("coming-soon-toast");
    const toastText = document.getElementById("coming-soon-toast-text");
    let toastTimeout: any = null;

    function triggerToast(name: string) {
      if (toastTimeout) clearTimeout(toastTimeout);
      if (toast && toastText) {
        toastText.textContent = `${name} is coming soon!`;
        toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        toast.classList.add("opacity-100", "translate-y-0");

        toastTimeout = setTimeout(() => {
          toast.classList.remove("opacity-100", "translate-y-0");
          toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        }, 3000);
      }
    }

    // Attach to all coming soon links (both desktop and mobile)
    document.querySelectorAll(".coming-soon-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const name = btn.getAttribute("data-name") || "This resource";
        triggerToast(name);
      });
    });

    // Mobile Resources Accordion Toggle
    const mobileAccTrigger = document.getElementById("mobile-accordion-trigger");
    const mobileAccContent = document.getElementById("mobile-accordion-content");
    const mobileAccChevron = document.getElementById("mobile-accordion-chevron");
    let isMobileAccOpen = false;

    mobileAccTrigger?.addEventListener("click", (e) => {
      e.preventDefault();
      isMobileAccOpen = !isMobileAccOpen;

      if (mobileAccContent && mobileAccChevron) {
        if (isMobileAccOpen) {
          mobileAccContent.classList.remove("max-h-0", "opacity-0");
          mobileAccContent.classList.add("max-h-[800px]", "opacity-100");
          mobileAccChevron.style.transform = "rotate(180deg)";
        } else {
          mobileAccContent.classList.remove("max-h-[800px]", "opacity-100");
          mobileAccContent.classList.add("max-h-0", "opacity-0");
          mobileAccChevron.style.transform = "rotate(0deg)";
        }
      }
    });
  }

  // 12. RESTORE CACHED SESSION STATE
  function initSession() {
    const cached = localStorage.getItem("stratapult_audit");
    if (cached) {
      try {
        const session = JSON.parse(cached);
        if (session && Array.isArray(session.answers) && Array.isArray(session.points)) {
          selectedIndices = session.answers;
          selectedPoints = session.points;
          currentQ = typeof session.currentQ === "number" ? session.currentQ : 0;
          
          if (Array.isArray(session.answersObject)) {
            answers = session.answersObject;
          } else {
            // Reconstruct if not saved
            answers = new Array(13).fill(null);
            for (let i = 0; i < 13; i++) {
              if (selectedIndices[i] !== null && selectedIndices[i] !== undefined) {
                answers[i] = {
                  score: 3 - selectedIndices[i]!,
                  sectionIndex: QUESTIONS[i].sectionIndex
                };
              }
            }
          }

          const metrics = calculateScores();

          if (currentQ >= 13) {
            renderResults();
            showState('results');
          } else if (currentQ > 0) {
            showState('question');
            renderQuestion(currentQ);
          } else {
            showState('intro');
            updateLeakMeter(36);
          }
          return;
        }
      } catch (e) {
        console.warn("Corrupt session state, starting fresh on intro.", e);
        clearAuditState();
      }
    }
    showState('intro');
    updateLeakMeter(36);
  }

  // 13. BOOTSTRAPPING
  initTheme();
  initNavbarAndMenu();

  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      console.log('QUESTIONS:', QUESTIONS);
      clearAuditState();
      showState('question');
      renderQuestion(0);
    });
  }

  initSession();
});
