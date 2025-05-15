import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Images from './Images';

type UseCaseItem = {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

type DetailedUseCase = {
  id: string;
  title: string;
  searchTerm: string;
  description: string;
  useCases: string[];
  implementation: string;
  impact: string;
  metrics?: { [key: string]: { before: string; after: string } };
  relatedService: string;
};

type UseCaseCategory = {
  name: string;
  icon: string;
  color: string;
  useCases: UseCaseItem[];
};

// The detailed use cases for each service
const detailedUseCases: DetailedUseCase[] = [
  {
    id: "ai-seo-optimized-web-design",
    title: "AI SEO Optimized Web Design",
    searchTerm: "website design for AI search visibility",
    description: "Modern websites need to be visible not just in Google, but in conversational AI tools where more customers are starting their search. We build sites specifically engineered for AI visibility with built-in automation for business growth.",
    useCases: [
      "Professional services firm wanting to appear in ChatGPT recommendations.",
      "E-commerce store seeking automated customer engagement sequences.",
      "B2B company needing lead capture with AI-powered qualification."
    ],
    implementation: "We combine structured data markup, conversational content patterns, and semantic HTML with automated workflows. Your site includes AI-ready knowledge graphs, weekly content generation pipelines, and personalized newsletter systems—all triggering automatically based on customer behavior.",
    impact: "Websites that rank in both traditional and AI search results, with built-in systems to convert visitors and nurture relationships with minimal human intervention.",
    metrics: {
      "AI search visibility score": { before: "32/100", after: "87/100" },
      "Weekly content production": { before: "1-2 pieces", after: "5-7 pieces (automated)" },
      "Lead response time": { before: "24 hours", after: "2-5 minutes" },
      "Email engagement rate": { before: "12%", after: "32%" }
    },
    relatedService: "AI SEO Optimized Web Design"
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering",
    searchTerm: "how to engineer a prompt",
    description: "Most AIs are like brilliant interns—if you phrase the request perfectly, they deliver gold. We teach your team the frameworks and mental models that turn vague questions into rock-solid prompts.",
    useCases: [
      "Marketing teams need 20 ad-copy variations in brand voice.",
      "Analysts want a table of insights without endless spreadsheet tweaking.",
      "Customer-support bots must answer in a friendly yet precise tone."
    ],
    implementation: "We embed a \"Prompt Gymnasium\" inside your Slack: employees type a draft prompt, hit /coach, and our in-house agent rewrites it using role, format, context, and reasoning cues. Users compare outputs side-by-side, pick the winner, and save it to a shared Prompt Library—no external tools needed.",
    impact: "Dramatically improved efficiency and output quality across all AI interactions.",
    metrics: {
      "Average iterations to usable output": { before: "5", after: "1–2" },
      "Time spent per AI task": { before: "15 min", after: "<3 min" },
      "Brand-voice consistency": { before: "Inconsistent", after: "98% on-brand" }
    },
    relatedService: "AI Prompt Engineering"
  },
  {
    id: "llm-seo-getting-found-by-chatgpt-co-",
    title: "Large-Language-Model SEO (LLM-SEO)",
    searchTerm: "how to show up in ChatGPT answers",
    description: "Search is going conversational. We align your content, schema, and knowledge graph so AI assistants cite you as the authority.",
    useCases: [
      "SaaS wanting to be \"recommended tools\" in AI product roundups.",
      "Tourism board aiming to appear in \"Where should I travel in July?\" chats.",
      "Law firm seeking visibility when users ask for contract templates."
    ],
    implementation: "We build an Entity Map: every service, product, and persona is tagged with JSON-LD. A nightly script queries Bing Chat, Gemini, and Perplexity for brand-related questions; any answer missing your name triggers a content gap task. Fresh FAQs are drafted and injected into the site within 24 hours.",
    impact: "57% jump in referral traffic coming from AI snippets. \"Recommended tools\" placement achieved for 8 of 10 target queries.",
    relatedService: "LLM-SEO (Getting Found by ChatGPT & Co.)"
  },
  {
    id: "strategy-governance",
    title: "Strategy & Governance",
    searchTerm: "AI strategy roadmap for SMB",
    description: "A no-nonsense blueprint that tells you where AI pays off, how much it will cost, and who has to sign off—complete with compliance ticks.",
    useCases: [
      "Family business unsure where to start.",
      "Company preparing board-level budget pitch.",
      "Org juggling GDPR, POPIA, and HIPAA."
    ],
    implementation: "We run a 2-day \"AI Canvas\" workshop, score every workflow on impact × feasibility, and deliver a colour-coded roadmap (6-/12-/24 months) plus ROI model that finance can actually read.",
    impact: "Secured €250k budget sign-off in 3 weeks (vs. 6-month stalls). Roadmap reused as vendor RFP scoring sheet—saved hundreds of hours.",
    relatedService: "Strategy & Governance"
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    searchTerm: "automate repetitive business tasks",
    description: "We connect the dots between email, CRM, ERP, and chat so routine work happens while you sleep.",
    useCases: [
      "Auto-route inbound leads based on language + deal size.",
      "Sync Stripe payments to QuickBooks with zero copy-paste.",
      "Convert voice mails to Zendesk tickets automatically."
    ],
    implementation: "An event-driven hub listens to Gmail, tags each message with AI intent detection, enriches via Clearbit, and either: a) creates a HubSpot deal or b) pushes a Slack summary to account managers. Edge cases escalate to humans; 90% flow untouched.",
    impact: "Saved 800+ staff hours per quarter for a 20-person sales team. Lead-response time dropped from 3h to 8min.",
    relatedService: "Workflow Automation"
  },
  {
    id: "custom-chatbots-24-7-q-a-",
    title: "Custom Chatbots & RAG",
    searchTerm: "build company knowledge chatbot",
    description: "A chatbot that knows only your company's data—and never hallucinates.",
    useCases: [
      "Internal SOP assistant that answers \"Where's the latest policy?\"",
      "Customer FAQ bot in five languages.",
      "On-prem solution for IP-sensitive enterprises."
    ],
    implementation: "Documents ingest into a vector DB; a retrieval-augmented pipeline (RAG) supplies citations for every answer. We add a \"confidence slider\"—answers below threshold trigger a human hand-off flow.",
    impact: "Ticket volume reduced 42% in first three months. Average reply time for staff policy questions: 3 seconds.",
    relatedService: "Custom Chatbots (24/7 Q&A)"
  },
  {
    id: "analytics-dashboards",
    title: "Analytics & Dashboards",
    searchTerm: "real-time KPI dashboard setup",
    description: "One living view of sales, costs, and ops—no more waiting for end-of-month spreadsheets.",
    useCases: [
      "Founder wants P&L at a glance.",
      "Ops manager needs live shipping delays.",
      "Marketing director tracks campaign ROI hourly."
    ],
    implementation: "We pipe data from Stripe, HubSpot, and Postgres into a lake, run AI anomaly detection, and surface alerts on a Power BI / Looker Studio board. Color-coded \"smart comments\" highlight why a metric moved.",
    impact: "Spotted inventory stock-out 48h earlier; saved $32k in lost sales.",
    relatedService: "Analytics & Dashboards"
  },
  {
    id: "fine-tuning-embeddings",
    title: "Fine-Tuning & Embeddings",
    searchTerm: "custom train GPT on company data",
    description: "We tailor a model so it \"speaks\" your industry slang and keeps secrets in-house.",
    useCases: [
      "Legal jargon auto-summary.",
      "Pharma company with proprietary molecules.",
      "Bank wanting ultra-low latency responses."
    ],
    implementation: "We fine-tune on your red-lined docs, deploy to an on-prem GPU, and set up gated access tokens. Semantic-search embeds add instant doc lookup.",
    impact: "Answer accuracy jumped from 71% to 93% on niche terms. Response latency cut from 1.2s to 350ms.",
    relatedService: "Fine-Tuning & Embeddings"
  },
  {
    id: "employee-enablement",
    title: "Employee Enablement",
    searchTerm: "AI training workshop for employees",
    description: "Quick, bite-sized training + cheat-sheets + a help-desk bot so staff actually use the tech.",
    useCases: [
      "Rolling out AI to non-tech departments.",
      "Need for bilingual (EN/DE) sessions.",
      "Change-management to fight \"AI fear.\""
    ],
    implementation: "Live 90-min sessions, role-specific labs, and a \"Prompt SOS\" chatbot that answers how-to questions 24/7.",
    impact: "Tool adoption climbed from 18% to 74% in eight weeks.",
    relatedService: "Employee Enablement"
  },
  {
    id: "voice-video-content-automation",
    title: "Voice, Video & Content Automation",
    searchTerm: "automate meeting notes and video clips",
    description: "AI that turns calls into action lists and long videos into snackable reels.",
    useCases: [
      "Sales call summary auto-logged to CRM.",
      "Webinar clipped into 10 TikToks.",
      "Board meetings transcribed & actioned instantly."
    ],
    implementation: "We feed Zoom recordings to a diarisation model, map speakers, extract next steps, and push clips + summaries to SharePoint.",
    impact: "Content output tripled without extra editors. Sales reps gained 4h/week back from note-taking.",
    relatedService: "Voice, Video & Content Automation"
  },
  {
    id: "custom-offer-generators",
    title: "Custom Offer Generators",
    searchTerm: "automate sales quote creation",
    description: "A web form that pulls real-time SKU data and spits out a PDF quote in seconds.",
    useCases: [
      "Wholesale pricing with complex tiers.",
      "Service bundles needing ROI calcs.",
      "Channel partners needing white-label quotes."
    ],
    implementation: "Live connection to ERP, profit-margin guardrails, and e-signature integration. Upsell engine suggests add-ons based on cart.",
    impact: "Proposal turnaround cut from 48h to 5min. Average order value up 17% via smart upsells.",
    relatedService: "Custom Offer Generators"
  },
  {
    id: "creator-marketing-toolkits",
    title: "Creator & Marketing Toolkits",
    searchTerm: "AI tools for content creators",
    description: "Idea generator, script writer, and thumbnail designer rolled into one.",
    useCases: [
      "Daily YouTube uploads without burnout.",
      "SEO blog outlines in minutes.",
      "Coherent multi-channel campaigns."
    ],
    implementation: "We set up a Google Sheet → AI pipeline: topic → outline → script → thumbnail prompt → scheduling. Human approves at each stage.",
    impact: "30-day content calendar generated in 45min. 22% boost in click-through from better thumbnails.",
    relatedService: "Creator & Marketing Toolkits"
  }
];

const useCaseCategories: UseCaseCategory[] = [
  {
    name: "Sales Automation",
    icon: "🔥",
    color: "border-orange-400",
    useCases: [
      {
        title: "AI-Powered LinkedIn Lead Hunter",
        challenge: "Reps lose hours scrolling LinkedIn, guessing who fits the ICP.",
        solution: "A cloud robot searches LinkedIn in real time, enriches each profile with firmographic data, scores prospects, and pushes the top matches straight into your CRM.",
        outcome: "5× more qualified leads per week and up to 80% less manual prospecting time."
      },
      {
        title: "Google Maps Lead Extractor",
        challenge: "Local B2B sellers struggle to find fresh business targets in their territory.",
        solution: "The workflow harvests Google Maps listings by keyword and city, cleans phone/email data, and even generates a personalised ice-breaker for each contact.",
        outcome: "A ready-to-dial call list every morning, doubling daily outreach capacity."
      },
      {
        title: "Voice Phone-Bot Qualifier",
        challenge: "SDRs waste time on unqualified discovery calls.",
        solution: "An AI voice agent dials each new lead, asks scripted questions, books meetings when fit, and posts call notes to Slack and the CRM.",
        outcome: "40% more demo bookings with zero extra headcount."
      },
      {
        title: "Reddit Signal Miner",
        challenge: "Buying-intent conversations happen in niche forums but stay invisible to sales.",
        solution: "Natural-language monitors watch sub-reddits for trigger phrases (e.g., \"looking for supplier\"), capture the thread, draft a warm outreach email, and log the activity.",
        outcome: "First-mover advantage on prospects your competitors never see."
      }
    ]
  },
  {
    name: "Marketing Automation",
    icon: "📈",
    color: "border-blue-400",
    useCases: [
      {
        title: "Smart YouTube Scheduler",
        challenge: "Posting consistently with SEO-rich titles, tags, and thumbnails is a grind.",
        solution: "The workflow queues videos, auto-generates metadata and thumbnail prompts, schedules optimal publish times, and reports performance back to a dashboard.",
        outcome: "+25% watch-through rate and one full day per week returned to the team."
      },
      {
        title: "Sheet-to-Instagram Auto-Publisher",
        challenge: "Social teams juggle multiple tools just to plan a month of posts.",
        solution: "Drop ideas in a Google Sheet; AI turns each row into a graphic, caption, and hashtag set, then posts on the calendar date.",
        outcome: "30 days of on-brand content created in under an hour."
      },
      {
        title: "SEO Blog Factory",
        challenge: "Content marketers can't scale long-form posts without blowing budget.",
        solution: "The system runs keyword research, drafts 1,500-word articles, creates an internal-link map, sources royalty-free images, and publishes to WordPress.",
        outcome: "3× faster content production and a measurable lift in organic traffic."
      },
      {
        title: "Comment Copilot",
        challenge: "Engaging at scale in comments is impossible by hand.",
        solution: "An AI engine reads every new Instagram or YouTube comment, drafts a personalised reply, and flags hot leads or negative sentiment for human review.",
        outcome: "100% comment response rate with consistent brand voice."
      }
    ]
  },
  {
    name: "Finance Automation",
    icon: "💰",
    color: "border-green-400",
    useCases: [
      {
        title: "Invoice & Receipt OCR Bot",
        challenge: "Bookkeepers still copy-paste line items from PDFs and emails.",
        solution: "AI vision extracts totals, VAT numbers, and GL codes, reconciles them in the ledger, and flags anomalies above a tolerance you set.",
        outcome: "90% reduction in manual data entry and near-real-time books."
      },
      {
        title: "AI Stock & News Digest",
        challenge: "Finance teams drown in fragmented market data.",
        solution: "A daily brief blends technical indicators with sentiment-scored headlines for your watch-list, delivered before trading opens.",
        outcome: "Faster, data-driven decisions without paying for pricey terminals."
      },
      {
        title: "Monthly P&L Reporter",
        challenge: "Closing the month means manual exports and PowerPoint edits.",
        solution: "The bot queries your accounting DB, assembles a narrative summary, and sends a polished PDF to stakeholders.",
        outcome: "Financial reports arrive three days sooner, freeing analysts for insights."
      },
      {
        title: "Crypto Pulse Monitor",
        challenge: "Volatility spikes catch treasury teams off guard.",
        solution: "Real-time headline scraping feeds a sentiment model; large swings trigger alerts in Telegram with suggested hedge actions.",
        outcome: "Quicker reaction to market shocks and reduced exposure risk."
      }
    ]
  },
  {
    name: "HR Automation",
    icon: "🧑‍💼",
    color: "border-purple-400",
    useCases: [
      {
        title: "Resume-Screening Engine",
        challenge: "Recruiters sift through hundreds of CVs for every opening.",
        solution: "AI scores each résumé against job criteria, ranks the best fits, and pipes the shortlist into your ATS.",
        outcome: "60% faster shortlist creation and fair, criteria-based screening."
      },
      {
        title: "AI Voice Interviewer",
        challenge: "First-round phone screens drain time and consistency.",
        solution: "A conversational bot asks behavioural questions, transcribes answers, and grades candidates on rubric-based scoring.",
        outcome: "Human recruiters focus only on top-tier applicants."
      },
      {
        title: "One-Click Employee Onboarding",
        challenge: "Creating accounts and checklists for new hires is error-prone.",
        solution: "The workflow provisions Google Workspace/Slack/Jira, schedules orientation tasks, and notifies managers in one pass.",
        outcome: "New hires are productive on day one, and HR never forgets a step."
      },
      {
        title: "Hiring-Signal Radar",
        challenge: "Agencies need early notice when clients are expanding.",
        solution: "The system scrapes LinkedIn job postings for target companies and alerts your sales team when hiring spikes.",
        outcome: "Timely outreach drives higher win-rates on recruitment retainers."
      }
    ]
  },
  {
    name: "Customer Support Automation",
    icon: "🙌",
    color: "border-yellow-400",
    useCases: [
      {
        title: "WhatsApp AI Support Agent",
        challenge: "Customers expect instant replies outside office hours.",
        solution: "A multilingual bot answers top FAQs, gathers context, and escalates edge cases to a live agent with full chat history.",
        outcome: "24/7 support, lower ticket volume, and happier customers."
      },
      {
        title: "Ticket Triage & Jira Auto-Routing",
        challenge: "Tickets sit unassigned or mis-routed, delaying fixes.",
        solution: "Natural-language classification sets priority, assigns owners, and drafts a first response—all before a human sees the issue.",
        outcome: "30% faster resolution times and cleaner backlog."
      },
      {
        title: "Smart Inbox Sorter",
        challenge: "Support inboxes become an unsearchable jumble.",
        solution: "AI labels every incoming email (billing, feature request, urgent) and publishes KPIs to a live dashboard.",
        outcome: "Managers get granular workload visibility; agents work the right queue first."
      },
      {
        title: "Self-Serve Knowledge Chat",
        challenge: "Clients can't find answers buried in PDFs and wikis.",
        solution: "Retrieval-Augmented Generation lets users ask natural-language questions and fetches exact passages from manuals or policies.",
        outcome: "Deflection rates soar and onboarding tickets drop."
      }
    ]
  },
  {
    name: "Slack-Centric Workflows",
    icon: "💬",
    color: "border-teal-400",
    useCases: [
      {
        title: "Daily Meeting Recap",
        challenge: "Action items vanish after Zoom calls.",
        solution: "The bot ingests yesterday's recordings, summarises decisions and next steps, and posts a digest to #team-updates at 7 a.m.",
        outcome: "Teams start the day aligned without another meeting."
      },
      {
        title: "Calendar-to-Slack Briefing",
        challenge: "Staff miss appointments buried in bloated calendars.",
        solution: "At dawn, each employee receives a personalised schedule snapshot and travel-time reminder.",
        outcome: "Fewer no-shows and smoother hand-offs."
      },
      {
        title: "Instant Incident Alerts",
        challenge: "Critical IT tickets languish in email inboxes.",
        solution: "When an incident is raised, severity, owner, and next steps appear in #it-incidents within seconds, complete with @mentions.",
        outcome: "Mean time-to-acknowledge drops dramatically."
      },
      {
        title: "Outage Monitor",
        challenge: "Vendor outage emails are jargon-heavy and late.",
        solution: "The bot rewrites official alerts into plain English, strips fluff, and pings the ops channel with recommended actions.",
        outcome: "Stakeholders get clear, fast updates—no more digging through PDFs."
      }
    ]
  }
];

function UseCasesSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState<string>(useCaseCategories[0].name);
  const [visibleCases, setVisibleCases] = React.useState<UseCaseItem[]>(useCaseCategories[0].useCases);
  const [activeTab, setActiveTab] = React.useState<'categories' | 'services'>('categories');
  const [activeCaseStudy, setActiveCaseStudy] = React.useState<DetailedUseCase | null>(null);
  
  React.useEffect(() => {
    // Check if there's a hash in the URL that matches a detailed use case
    const hash = window.location.hash;
    if (hash && hash.startsWith('#use-cases-')) {
      const caseId = hash.replace('#use-cases-', '');
      const caseStudy = detailedUseCases.find(useCase => useCase.id === caseId);
      if (caseStudy) {
        setActiveCaseStudy(caseStudy);
        setActiveTab('services');
      }
    }
    
    // Listen for custom events from service links
    const handleShowUseCase = (event) => {
      // Save current scroll position to restore it after state updates
      const scrollPosition = window.scrollY;
      
      const { useCaseId } = event.detail;
      
      // First set the active tab to 'services'
      setActiveTab('services');
      
      // Find the matching case study by converting service category name to case study id
      const matchingCaseStudy = detailedUseCases.find(caseStudy => {
        // Try to match by id or related service converted to the same format
        return caseStudy.id === useCaseId || 
               caseStudy.relatedService.toLowerCase().replace(/[^a-z0-9]+/g, '-') === useCaseId;
      });
      
      if (matchingCaseStudy) {
        setActiveCaseStudy(matchingCaseStudy);
        
        // After setting active case study, ensure we stay at the use cases section
        // by restoring the scroll position or scrolling to the section
        setTimeout(() => {
          const useCaseSection = document.getElementById('use-cases');
          if (useCaseSection) {
            const rect = useCaseSection.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
              // If section not visible, scroll to it
              useCaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 50);
      } else {
        console.warn(`No matching use case found for ${useCaseId}`);
        // Reset to showing all case studies if no match found
        setActiveCaseStudy(null);
      }
    };
    
    window.addEventListener('showUseCase', handleShowUseCase);
    
    return () => {
      window.removeEventListener('showUseCase', handleShowUseCase);
    };
  }, []);
  
  // Update visible cases when activeCategory changes
  React.useEffect(() => {
    const category = useCaseCategories.find(cat => cat.name === activeCategory);
    if (category) {
      setVisibleCases(category.useCases);
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    setActiveCaseStudy(null);
    // The visible cases will be updated by the useEffect
  };
  
  const handleServiceCaseSelect = (useCase: DetailedUseCase) => {
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    setActiveCaseStudy(useCase);
    
    // Update URL hash without scrolling
    const newUrl = window.location.pathname + window.location.search + `#use-cases-${useCase.id}`;
    window.history.pushState({}, '', newUrl);
    
    // Restore scroll position to prevent unwanted scrolling
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
    }, 10);
  };
  
  const renderServiceCaseStudies = () => {
    // Helper function to translate detailed use case content
    const translateDetailedUseCase = (useCase: DetailedUseCase) => {
      // For a real implementation, you would have translations for each detailed use case in translations.ts
      // Here we're using the English content as fallback
      return {
        ...useCase
        // In a complete implementation, translated fields would be returned here
      };
    };
    
    return (
      <div className="space-y-8">
        {activeCaseStudy ? (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <button 
              onClick={() => setActiveCaseStudy(null)}
              className="mb-4 text-[#0B5FB0] hover:text-[#2BA3EC] font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              {t('useCases.backToCases')}
            </button>
            
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#0F214D]">{activeCaseStudy.title}</h3>
              <span className="inline-block bg-[#EBFCFF] text-[#0B5FB0] px-3 py-1 rounded-full text-sm font-medium mt-2">
                {t('useCases.searchTerm')}: "{activeCaseStudy.searchTerm}"
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#0B5FB0] mb-2">{t('useCases.whatItIs')}</h4>
                  <p className="text-muted-foreground">{activeCaseStudy.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#0B5FB0] mb-2">{t('useCases.commonUseCases')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {activeCaseStudy.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#0B5FB0] mb-2">{t('useCases.implementation')}</h4>
                  <p className="text-muted-foreground">{activeCaseStudy.implementation}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#0B5FB0] mb-2">{t('useCases.impact')}</h4>
                  <p className="text-muted-foreground">{activeCaseStudy.impact}</p>
                </div>
                
                {activeCaseStudy.metrics && (
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B5FB0] mb-2">{t('useCases.metrics')}</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#EBFCFF]">
                            <th className="py-2 px-4 text-left border border-[#AAF1FF]">{t('useCases.metric')}</th>
                            <th className="py-2 px-4 text-left border border-[#AAF1FF]">{t('useCases.before')}</th>
                            <th className="py-2 px-4 text-left border border-[#AAF1FF]">{t('useCases.after')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(activeCaseStudy.metrics).map(([metric, values], index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#EBFCFF]/30'}>
                              <td className="py-2 px-4 border border-[#AAF1FF]">{metric}</td>
                              <td className="py-2 px-4 border border-[#AAF1FF]">{values.before}</td>
                              <td className="py-2 px-4 border border-[#AAF1FF] font-medium text-[#0B5FB0]">{values.after}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 p-4 bg-[#EBFCFF] rounded-lg">
                  <h4 className="text-lg font-semibold text-[#0F214D] mb-2">{t('useCases.readyToImplement')}</h4>
                  <p className="text-sm text-[#0B5FB0] mb-4">
                    {t('useCases.basedOnRealWork')}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#0B5FB0] text-white hover:bg-[#2BA3EC] transition-colors"
                  >
                    {t('useCases.discussProject')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedUseCases.map((useCase) => {
              const translatedUseCase = translateDetailedUseCase(useCase);
              
              return (
                <Card 
                  key={translatedUseCase.id} 
                  id={`use-cases-${translatedUseCase.id}`}
                  className="border-[#AAF1FF] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleServiceCaseSelect(translatedUseCase)}
                >
                  <CardHeader className="bg-[#EBFCFF] rounded-t-xl">
                    <CardTitle className="text-[#0F214D]">{translatedUseCase.title}</CardTitle>
                    <CardDescription className="text-[#0B5FB0] mt-1">
                      {t('useCases.searchTerm')}: "{translatedUseCase.searchTerm}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{translatedUseCase.description}</p>
                    <div className="mt-auto pt-4 border-t border-[#AAF1FF]">
                      <span className="text-sm font-medium text-[#2BA3EC] flex items-center">
                        {t('useCases.viewCaseStudy')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
  const renderCategoryUseCases = () => {
    // Helper function to translate use case content based on active category and current language
    const translateUseCaseContent = (useCase: UseCaseItem) => {
      // For a real implementation, you would have translations for each use case in translations.ts
      // Here we're using the English content as fallback
      return {
        title: useCase.title,
        challenge: useCase.challenge,
        solution: useCase.solution,
        outcome: useCase.outcome
      };
    };
    
    return (
      <>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {useCaseCategories.map((category) => {
            // Map English category names to translation keys
            const getCategoryTranslationKey = (name: string) => {
              switch (name) {
                case "Sales Automation": return 'salesAutomation';
                case "Marketing Automation": return 'marketingAutomation';
                case "Finance Automation": return 'financeAutomation';
                case "HR Automation": return 'hrAutomation';
                case "Customer Support Automation": return 'customerSupportAutomation';
                case "Slack-Centric Workflows": return 'slackCentricWorkflows';
                default: return name;
              }
            };
            
            const translationKey = getCategoryTranslationKey(category.name);
            
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full transition-all flex items-center ${
                  activeCategory === category.name
                    ? 'bg-[#0B5FB0] text-white shadow-md'
                    : 'bg-white text-[#0B5FB0] hover:bg-[#EBFCFF]'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{translationKey ? t(`useCases.${translationKey}`) : category.name}</span>
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCases.map((useCase, index) => {
            const currentCategory = useCaseCategories.find(cat => cat.name === activeCategory);
            const borderColor = currentCategory ? currentCategory.color : "border-[#AAF1FF]";
            const translatedUseCase = translateUseCaseContent(useCase);
            
            return (
              <Card key={index} className={`${borderColor} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="bg-white rounded-t-xl">
                  <CardTitle className="text-[#0F214D]">{translatedUseCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-[#0B5FB0] mb-1">{t('useCases.challenge')}</h5>
                      <p className="text-sm text-muted-foreground">{translatedUseCase.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0B5FB0] mb-1">{t('useCases.solution')}</h5>
                      <p className="text-sm text-muted-foreground">{translatedUseCase.solution}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0B5FB0] mb-1">{t('useCases.outcome')}</h5>
                      <p className="text-sm text-[#2BA3EC] font-medium">{translatedUseCase.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <section id="use-cases" className="py-16 bg-[#EBFCFF]/30">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0F214D]">
            {t('useCases.title')}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl text-[#0B5FB0]">
            {t('useCases.subtitle')}
          </p>
          
          <div className="flex border border-[#AAF1FF] rounded-full p-1 bg-white mt-4">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'categories'
                  ? 'bg-[#0B5FB0] text-white'
                  : 'text-[#0B5FB0] hover:bg-[#EBFCFF]'
              }`}
            >
              {t('useCases.byBusinessArea')}
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'services'
                  ? 'bg-[#0B5FB0] text-white'
                  : 'text-[#0B5FB0] hover:bg-[#EBFCFF]'
              }`}
            >
              {t('useCases.byService')}
            </button>
          </div>
        </div>
        
        {activeTab === 'categories' ? renderCategoryUseCases() : renderServiceCaseStudies()}
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-[#0F214D] mb-4">{t('useCases.readyToSee')}</h3>
          <p className="max-w-[800px] mx-auto mb-6 text-muted-foreground">
            {t('useCases.tailoredWorkflow')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#0B5FB0] text-white hover:bg-[#2BA3EC] transition-colors"
          >
            {t('services.scheduleConsultation')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
