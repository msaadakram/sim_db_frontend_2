type CsvKeywordEntry = {
  phrase: string;
  avgMonthlySearches: number;
};

export const CSV_SEO_KEYWORD_ENTRIES: ReadonlyArray<CsvKeywordEntry> = [
  // File 2 high-volume keywords (500,000 monthly searches) 
  { phrase: 'sim owner details', avgMonthlySearches: 500000 },
  { phrase: 'sim information', avgMonthlySearches: 500000 },
  { phrase: 'sim info', avgMonthlySearches: 500000 },
  { phrase: 'sim number details', avgMonthlySearches: 50000 },
  { phrase: 'sim details', avgMonthlySearches: 50000 },
  { phrase: 'mobile number details', avgMonthlySearches: 50000 },
  { phrase: 'phone number details', avgMonthlySearches: 50000 },
  { phrase: 'sim owner details online check', avgMonthlySearches: 50000 },
  { phrase: 'sim owner details by number', avgMonthlySearches: 50000 },
  { phrase: 'sim details by number', avgMonthlySearches: 50000 },
  { phrase: 'live tracker sim data', avgMonthlySearches: 50000 },
  { phrase: 'sim data information', avgMonthlySearches: 50000 },
  { phrase: 'sim information system', avgMonthlySearches: 50000 },
  { phrase: 'sim details check', avgMonthlySearches: 50000 },
  { phrase: 'check sim owner details', avgMonthlySearches: 50000 },
  { phrase: 'check sim owner name by mobile number', avgMonthlySearches: 50000 },
  { phrase: 'sim number details online check', avgMonthlySearches: 50000 },
  { phrase: 'check sim details by number', avgMonthlySearches: 5000 },
  { phrase: 'online sim data check', avgMonthlySearches: 5000 },
  { phrase: 'mobile number details with owner name', avgMonthlySearches: 5000 },
  { phrase: 'mobile number details with owner name and address', avgMonthlySearches: 5000 },
  { phrase: 'live tracker mobile number details', avgMonthlySearches: 5000 },
  { phrase: 'sim number check', avgMonthlySearches: 50000 },
  { phrase: 'check unknown number details online', avgMonthlySearches: 500 },
  { phrase: 'mobile number owner details', avgMonthlySearches: 5000 },
  { phrase: 'mobile number detail with name', avgMonthlySearches: 5000 },
  { phrase: 'mobile number details with owner name and address', avgMonthlySearches: 5000 },
  { phrase: 'sim number tracker with name and address', avgMonthlySearches: 500 },
  { phrase: 'check sim owner name by mobile number online', avgMonthlySearches: 5000 },
  { phrase: 'sim owner name by mobile number online', avgMonthlySearches: 5000 },
  { phrase: 'sim owner name by mobile number', avgMonthlySearches: 5000 },
  { phrase: 'phone number owner name', avgMonthlySearches: 500 },
  { phrase: 'mobile number owner name', avgMonthlySearches: 500 },
  { phrase: 'phone number details with name', avgMonthlySearches: 5000 },
  { phrase: 'phone sim', avgMonthlySearches: 50 },
  { phrase: 'phone number data', avgMonthlySearches: 500 },
  { phrase: 'phone number verify', avgMonthlySearches: 500 },
  { phrase: 'phone number database', avgMonthlySearches: 50 },
  { phrase: 'phone number owner', avgMonthlySearches: 500 },
  { phrase: 'phone number owner lookup', avgMonthlySearches: 50 },
  { phrase: 'phone number lookup', avgMonthlySearches: 500 },
  { phrase: 'phone number information lookup', avgMonthlySearches: 50 },
  { phrase: 'phone number owner name', avgMonthlySearches: 500 },
  { phrase: 'phone number details', avgMonthlySearches: 50000 },
  { phrase: 'phone number verify', avgMonthlySearches: 500 },
  { phrase: 'phone owner lookup', avgMonthlySearches: 50 },
  { phrase: 'phone number verifier', avgMonthlySearches: 50 },
  { phrase: 'number owner lookup', avgMonthlySearches: 50 },
  { phrase: 'owner of phone number lookup', avgMonthlySearches: 50 },
  { phrase: 'find owner of phone number', avgMonthlySearches: 500 },
  { phrase: 'find out phone number owner', avgMonthlySearches: 5000 },
  { phrase: 'find owner of phone number free', avgMonthlySearches: 50 },
  { phrase: 'find out number owner', avgMonthlySearches: 500 },
  { phrase: 'find a number owner', avgMonthlySearches: 500 },
  { phrase: 'search number owner', avgMonthlySearches: 50 },
  { phrase: 'search for phone number', avgMonthlySearches: 50 },
  { phrase: 'search phone number owner', avgMonthlySearches: 500 },
  { phrase: 'check phone number', avgMonthlySearches: 5000 },
  { phrase: 'check phone number details', avgMonthlySearches: 5000 },
  { phrase: 'check phone number owner', avgMonthlySearches: 5000 },
  { phrase: 'check phone number owner name', avgMonthlySearches: 50 },
  { phrase: 'check phone number owner name online', avgMonthlySearches: 50 },
  { phrase: 'check phone number owner name online free', avgMonthlySearches: 500 },
  { phrase: 'number lookup', avgMonthlySearches: 500 },
  { phrase: 'number check', avgMonthlySearches: 5000 },
  { phrase: 'number information', avgMonthlySearches: 5000 },
  { phrase: 'number search', avgMonthlySearches: 500 },
  { phrase: 'number verification', avgMonthlySearches: 5000 },
  { phrase: 'number data check', avgMonthlySearches: 5000 },
  { phrase: 'number owner lookup', avgMonthlySearches: 50 },
  { phrase: 'number verifier', avgMonthlySearches: 50 },
  { phrase: 'verify a number', avgMonthlySearches: 5000 },
  { phrase: 'mobile number lookup', avgMonthlySearches: 500 },
  { phrase: 'mobile number check', avgMonthlySearches: 5000 },
  { phrase: 'mobile number search', avgMonthlySearches: 500 },
  { phrase: 'the number lookup', avgMonthlySearches: 50 },
  { phrase: 'free number', avgMonthlySearches: 500 },
  { phrase: 'lookup cell phone number owner', avgMonthlySearches: 50 },
  { phrase: 'lookup number owner', avgMonthlySearches: 50 },

  // File 1 high-volume and theme-specific keywords
  { phrase: 'sim data', avgMonthlySearches: 50000 },
  { phrase: 'sim card data', avgMonthlySearches: 500 },
  { phrase: 'sim card', avgMonthlySearches: 5000 },
  { phrase: 'pak sim', avgMonthlySearches: 5000 },
  { phrase: 'check sim', avgMonthlySearches: 5000 },
  { phrase: 'sim card number', avgMonthlySearches: 5000 },
  { phrase: 'mobile number information', avgMonthlySearches: 5000 },
  { phrase: 'mobile sim card', avgMonthlySearches: 50 },
  { phrase: 'mobile sim', avgMonthlySearches: 500 },
  { phrase: 'pak sim data', avgMonthlySearches: 50000 },
  { phrase: 'live tracker all network details', avgMonthlySearches: 5000 },
  { phrase: 'tracker sim', avgMonthlySearches: 500 },
  { phrase: 'my sim', avgMonthlySearches: 500 },
  { phrase: 'sim card details', avgMonthlySearches: 5000 },
  { phrase: 'free sim data', avgMonthlySearches: 500 },
  { phrase: 'sim card and phone number', avgMonthlySearches: 50 },
  { phrase: 'sim card check', avgMonthlySearches: 500 },
  { phrase: 'phone number owner details', avgMonthlySearches: 500 },
  { phrase: 'mobile sim data', avgMonthlySearches: 500 },
  { phrase: 'sim tracking number', avgMonthlySearches: 5000 },
  { phrase: 'all network data sim', avgMonthlySearches: 500 },
  { phrase: 'network sim card', avgMonthlySearches: 500 },
  { phrase: 'telenor sim card', avgMonthlySearches: 500 },
  { phrase: 'esim pakistan', avgMonthlySearches: 5000 },
  { phrase: 'esim in pakistan', avgMonthlySearches: 500 },
  { phrase: 'telenor esim', avgMonthlySearches: 500 },
  { phrase: 'telenor esim pakistan', avgMonthlySearches: 50 },
  { phrase: 'locate sim card number', avgMonthlySearches: 500 },
  { phrase: 'locate my sim card', avgMonthlySearches: 50 },
  { phrase: 'sim card mobile data', avgMonthlySearches: 50 },
  { phrase: 'find sim', avgMonthlySearches: 50 },
  { phrase: 'pakistan sim card', avgMonthlySearches: 500 },
  { phrase: 'buy esim online pakistan', avgMonthlySearches: 500 },
  { phrase: 'sim card sim card', avgMonthlySearches: 5000 },
  { phrase: 'difference between esim and sim card', avgMonthlySearches: 50 },
  { phrase: 'difference between esim and physical sim', avgMonthlySearches: 50 },
  { phrase: 'difference between esim and physical sim card', avgMonthlySearches: 50 },
  { phrase: 'data sim online', avgMonthlySearches: 500 },
  { phrase: 'biometric verification online', avgMonthlySearches: 500 },
  { phrase: 'ufone sim', avgMonthlySearches: 5000 },
  { phrase: 'sim detail check', avgMonthlySearches: 50000 },
  { phrase: 'sim card sim card', avgMonthlySearches: 5000 },
  { phrase: 'pta sim check', avgMonthlySearches: 5000 },

  // Legacy high-volume keywords preserved
  { phrase: 'sim card ownership details', avgMonthlySearches: 500000 },
  { phrase: 'cnic info', avgMonthlySearches: 50000 },
  { phrase: 'sim owner', avgMonthlySearches: 50000 },
  { phrase: 'pak sim ga', avgMonthlySearches: 50000 },
  { phrase: 'cnic sim pk', avgMonthlySearches: 50000 },
  { phrase: 'pak database', avgMonthlySearches: 50000 },
  { phrase: 'pak sim info', avgMonthlySearches: 50000 },
  { phrase: 'sim no detail', avgMonthlySearches: 50000 },
  { phrase: 'sim ownership', avgMonthlySearches: 50000 },
  { phrase: 'cnic sim check', avgMonthlySearches: 50000 },
  { phrase: 'sim card owner', avgMonthlySearches: 50000 },
  { phrase: 'sim data check', avgMonthlySearches: 50000 },
  { phrase: 'cell no details', avgMonthlySearches: 50000 },
  { phrase: 'check sim owner', avgMonthlySearches: 50000 },
  { phrase: 'sim data online', avgMonthlySearches: 50000 },
  { phrase: 'sim info system', avgMonthlySearches: 50000 },
  { phrase: 'sim number info', avgMonthlySearches: 50000 },
  { phrase: 'sim detail check', avgMonthlySearches: 50000 },
  { phrase: 'check sim by cnic', avgMonthlySearches: 50000 },
  { phrase: 'cnic check online', avgMonthlySearches: 50000 },
  { phrase: 'sim data checking', avgMonthlySearches: 50000 },
  { phrase: 'check owner of sim', avgMonthlySearches: 50000 },
  { phrase: 'pak sim data check', avgMonthlySearches: 50000 },
  { phrase: 'ufone number check', avgMonthlySearches: 50000 },
  { phrase: 'cell number details', avgMonthlySearches: 50000 },
  { phrase: 'pak sim information', avgMonthlySearches: 50000 },
  { phrase: 'check sim card number', avgMonthlySearches: 50000 },
  { phrase: 'ufone number check code', avgMonthlySearches: 50000 },
  { phrase: 'sim owner details online', avgMonthlySearches: 50000 },
  { phrase: 'sim card owner details online', avgMonthlySearches: 50000 },
  { phrase: 'sim verification on cnic', avgMonthlySearches: 50000 },
  { phrase: 'sim information with number', avgMonthlySearches: 50000 },
  { phrase: 'details of number on sim card', avgMonthlySearches: 50000 },
  { phrase: '668 sim', avgMonthlySearches: 5000 },
  { phrase: 'cnic sim', avgMonthlySearches: 5000 },
  { phrase: 'number sim', avgMonthlySearches: 5000 },
  { phrase: 'online sim', avgMonthlySearches: 5000 },
  { phrase: 'sim number', avgMonthlySearches: 5000 },
  { phrase: 'verify sim', avgMonthlySearches: 5000 },
  { phrase: 'paksim data', avgMonthlySearches: 5000 },
  { phrase: 'sim card no', avgMonthlySearches: 5000 },
  { phrase: 'sim data pk', avgMonthlySearches: 5000 },
  { phrase: 'sim info pk', avgMonthlySearches: 5000 },
  { phrase: 'cnic details', avgMonthlySearches: 5000 },
  { phrase: 'pak data sim', avgMonthlySearches: 5000 },
  { phrase: 'pakistan sim', avgMonthlySearches: 5000 },
  { phrase: 'sim card sim', avgMonthlySearches: 5000 },
  { phrase: 'sim id check', avgMonthlySearches: 5000 },
  { phrase: 'sim sim card', avgMonthlySearches: 5000 },
  { phrase: '668 sim check', avgMonthlySearches: 5000 },
  { phrase: 'cnic sim info', avgMonthlySearches: 5000 },
  { phrase: 'live sim data', avgMonthlySearches: 5000 },
  { phrase: 'ownership sim', avgMonthlySearches: 5000 },
  { phrase: 'check sim info', avgMonthlySearches: 5000 },
  { phrase: 'fresh sim data', avgMonthlySearches: 5000 },
  { phrase: 'person tracker', avgMonthlySearches: 5000 },
  { phrase: 'sim check code', avgMonthlySearches: 5000 },
  { phrase: 'sim data owner', avgMonthlySearches: 5000 },
  { phrase: 'sim info check', avgMonthlySearches: 5000 },
  { phrase: 'sim on my cnic', avgMonthlySearches: 5000 },
  { phrase: 'sim owner data', avgMonthlySearches: 5000 },
  { phrase: 'sim owner name', avgMonthlySearches: 5000 },
  { phrase: 'sim check owner', avgMonthlySearches: 5000 },
  { phrase: 'sim data detail', avgMonthlySearches: 5000 },
  { phrase: 'online sim check', avgMonthlySearches: 5000 },
  { phrase: 'owner sim detail', avgMonthlySearches: 5000 },
  { phrase: 'pak sim data apk', avgMonthlySearches: 5000 },
  { phrase: 'sim data tracker', avgMonthlySearches: 5000 },
  { phrase: 'sim detail owner', avgMonthlySearches: 5000 },
  { phrase: 'sim details info', avgMonthlySearches: 5000 },
  { phrase: 'sim info details', avgMonthlySearches: 5000 },
  { phrase: 'sim name checker', avgMonthlySearches: 5000 },
  { phrase: 'sim verification', avgMonthlySearches: 5000 },
  { phrase: 'cnic check number', avgMonthlySearches: 5000 },
  { phrase: 'id card sim check', avgMonthlySearches: 5000 },
  { phrase: 'number check cnic', avgMonthlySearches: 5000 },
  { phrase: 'sim check details', avgMonthlySearches: 5000 },
  { phrase: 'sim data tracking', avgMonthlySearches: 5000 },
  { phrase: 'cnic details check', avgMonthlySearches: 5000 },
  { phrase: 'cnic owner details', avgMonthlySearches: 5000 },
  { phrase: 'fresh sim database', avgMonthlySearches: 5000 },
  { phrase: 'pk sim data online', avgMonthlySearches: 5000 },
  { phrase: 'sim check pakistan', avgMonthlySearches: 5000 },
  { phrase: 'sim details online', avgMonthlySearches: 5000 },
  { phrase: 'sim identity check', avgMonthlySearches: 5000 },
  { phrase: 'sim register check', avgMonthlySearches: 5000 },
  { phrase: 'sim tracker online', avgMonthlySearches: 5000 },
  { phrase: '668 sim information', avgMonthlySearches: 5000 },
  { phrase: 'cnic details online', avgMonthlySearches: 5000 },
  { phrase: 'cnic number details', avgMonthlySearches: 5000 },
  { phrase: 'cnic sim check code', avgMonthlySearches: 5000 },
  { phrase: 'online sim database', avgMonthlySearches: 5000 },
  { phrase: 'online sim location', avgMonthlySearches: 5000 },
  { phrase: 'pta sim information', avgMonthlySearches: 5000 },
  { phrase: 'nadra sim owner details', avgMonthlySearches: 5000 },
  { phrase: 'nadra sim check', avgMonthlySearches: 500 },
  { phrase: 'nadra sim information', avgMonthlySearches: 500 },
  { phrase: 'all network sim details', avgMonthlySearches: 500 },
  { phrase: 'sim network check online', avgMonthlySearches: 50 },
  { phrase: 'number location in pakistan', avgMonthlySearches: 5000 },
  { phrase: 'sim location check', avgMonthlySearches: 500 },
  { phrase: 'sim location details', avgMonthlySearches: 500 },
  { phrase: 'location of sim number', avgMonthlySearches: 500 },
  { phrase: 'trace sim number location', avgMonthlySearches: 500 },
  { phrase: 'sim location tracker pakistan', avgMonthlySearches: 5000 },
  { phrase: 'telenor sim owner details', avgMonthlySearches: 500 },
  { phrase: 'telenor sim number check online', avgMonthlySearches: 5000 },
  { phrase: 'zong sim owner details', avgMonthlySearches: 5000 },
  { phrase: 'zong sim number check online', avgMonthlySearches: 5000 },
  { phrase: 'jazz sim owner details', avgMonthlySearches: 5000 },
  { phrase: 'jazz sim number check by cnic', avgMonthlySearches: 5000 },
  { phrase: 'ufone sim number check', avgMonthlySearches: 5000 },
];

export const SIM_OWNER_SEO_KEYWORDS = CSV_SEO_KEYWORD_ENTRIES.map((entry) => entry.phrase);

export type SeoSurface = 'home' | 'blog' | 'features' | 'apps' | 'disclaimer' | 'search' | 'article';

const SEO_SURFACE_HINTS: Record<SeoSurface, string> = {
  home:
    'sim owner details online check sim owner details by number sim owner details online sim card owner details online sim number details online check mobile number details phone number details check sim owner name by mobile number sim details by number sim data check number check',
  blog:
    'sim owner details online check sim owner details by number sim owner details online sim card owner details online sim number details online check cnic details check sim tracker online sim verification phone number details mobile number details',
  features:
    'sim detail check sim verification on cnic cnic check online sim identity check sim data tracker phone number details mobile number details sim number details',
  apps:
    'online sim check live tracker sim data sim tracker online sim number check mobile number details phone number details sim owner details',
  disclaimer:
    'sim details online cnic details online sim verification sim owner details check legal privacy phone number details mobile number details',
  search:
    'sim number check check sim owner details mobile number details sim details by number cnic check number phone number details number check',
  article:
    'sim owner details online check sim owner details by number sim owner details online sim card owner details online sim number details online check cnic details check pta sim check sim verification phone number details mobile number details',
};

const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'from',
  'that',
  'this',
  'into',
  'your',
  'about',
  'online',
  'guide',
  'complete',
  'pakistan',
]);

function normalizeText(input: string): string {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(input: string): string[] {
  return normalizeText(input)
    .split(' ')
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function scoreKeyword(entry: CsvKeywordEntry, topicText: string, topicTokens: Set<string>): number {
  const keywordNormalized = normalizeText(entry.phrase);
  const keywordTokens = tokenize(entry.phrase);

  let score = Math.log10(entry.avgMonthlySearches + 1) * 2;

  if (topicText.includes(keywordNormalized)) {
    score += 16;
  }

  let overlap = 0;
  keywordTokens.forEach((token) => {
    if (topicTokens.has(token)) {
      overlap += 1;
    }
  });

  score += overlap * 5;
  if (overlap > 0 && overlap === keywordTokens.length && keywordTokens.length > 1) {
    score += 4;
  }

  return score;
}

function truncateMetaText(input: string, maxLength: number): string {
  const clean = String(input || '').replace(/\s+/g, ' ').trim();
  if (!clean) {
    return '';
  }

  if (clean.length <= maxLength) {
    return clean;
  }

  const trimmed = clean.slice(0, Math.max(24, maxLength - 3)).replace(/\s+\S*$/, '').trim();
  return `${trimmed}...`;
}

export function getRelevantCsvKeywords(topicText: string, count = 12): string[] {
  const targetCount = Math.max(0, count);
  if (targetCount === 0) {
    return [];
  }

  const normalizedTopic = normalizeText(topicText);
  const topicTokens = new Set(tokenize(topicText));

  const ranked = CSV_SEO_KEYWORD_ENTRIES
    .map((entry, index) => ({
      entry,
      index,
      score: scoreKeyword(entry, normalizedTopic, topicTokens),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (b.entry.avgMonthlySearches !== a.entry.avgMonthlySearches) {
        return b.entry.avgMonthlySearches - a.entry.avgMonthlySearches;
      }
      return a.index - b.index;
    });

  const selected: string[] = [];
  const seenPhrases = new Set<string>();
  const seenRoots = new Set<string>();

  for (const row of ranked) {
    if (selected.length >= targetCount) {
      break;
    }

    const phrase = row.entry.phrase;
    const root = tokenize(phrase).slice(0, 2).join(' ');
    if (seenPhrases.has(phrase) || (root && seenRoots.has(root))) {
      continue;
    }

    selected.push(phrase);
    seenPhrases.add(phrase);
    if (root) {
      seenRoots.add(root);
    }
  }

  if (selected.length < targetCount && CSV_SEO_KEYWORD_ENTRIES.length) {
    const hashStart = hashString(normalizedTopic || 'sim-owner-detail-keywords') % CSV_SEO_KEYWORD_ENTRIES.length;

    for (let i = 0; i < CSV_SEO_KEYWORD_ENTRIES.length && selected.length < targetCount; i += 1) {
      const phrase = CSV_SEO_KEYWORD_ENTRIES[(hashStart + i) % CSV_SEO_KEYWORD_ENTRIES.length].phrase;
      if (!seenPhrases.has(phrase)) {
        selected.push(phrase);
        seenPhrases.add(phrase);
      }
    }
  }

  return selected;
}

export function getPageKeywordSet(surface: SeoSurface, count = 24): string[] {
  return getRelevantCsvKeywords(SEO_SURFACE_HINTS[surface], count);
}

export function buildPageSeoTitle(
  baseTitle: string,
  surface: SeoSurface,
  keywordCount = 3,
  maxLength = 95
): string {
  void surface;
  void keywordCount;
  return truncateMetaText(baseTitle, maxLength) || 'SIM OWNER DETAIL';
}

interface BlogSeoOptions {
  slug?: string;
  excerpt?: string;
  category?: string;
  keywordCount?: number;
  maxLength?: number;
}

export function buildBlogSeoTitle(baseTitle: string, options: BlogSeoOptions = {}): string {
  const { maxLength = 95 } = options;
  return truncateMetaText(baseTitle, maxLength) || 'SIM Verification Guide | SIM OWNER DETAIL';
}

export function buildBlogSeoDescription(baseDescription: string, options: BlogSeoOptions = {}): string {
  void options;
  const cleanDescription = String(baseDescription || '').replace(/\s+/g, ' ').trim();

  if (!cleanDescription) {
    return 'Learn practical SIM and CNIC verification guidance in Pakistan with legal, privacy-safe workflows and actionable security best practices.';
  }

  return truncateMetaText(cleanDescription, 160);
}

export const SEO_ALT_SUFFIX = 'SIM OWNER DETAIL';

export function withSeoAlt(baseAlt: string): string {
  const cleanBaseAlt = String(baseAlt || '').replace(/\s+/g, ' ').trim();

  if (!cleanBaseAlt) {
    return SEO_ALT_SUFFIX;
  }

  return cleanBaseAlt;
}

export function getKeywordSentence(start = 0, count = 12): string {
  return SIM_OWNER_SEO_KEYWORDS.slice(start, start + count).join(', ');
}

export function getKeywordParagraphs(chunkSize = 14): string[] {
  const paragraphs: string[] = [];

  for (let i = 0; i < SIM_OWNER_SEO_KEYWORDS.length; i += chunkSize) {
    paragraphs.push(SIM_OWNER_SEO_KEYWORDS.slice(i, i + chunkSize).join(', '));
  }

  return paragraphs;
}
