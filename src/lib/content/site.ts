export type NavItem = {
	label: string;
	href: string;
};

export type HeroAction = {
	label: string;
	href: string;
	variant: 'primary' | 'secondary';
};

export type Stat = {
	value: string;
	label: string;
};

export type Service = {
	title: string;
	summary: string;
	outcomes: string;
};

export type Proof = {
	title: string;
	result: string;
	detail: string;
};

export type Principle = {
	title: string;
	body: string;
};

export type ContactLink = {
	label: string;
	href: string;
	note: string;
};

export type SiteContent = {
	profile: {
		name: string;
		role: string;
		location: string;
		availability: string;
	};
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
	navigation: NavItem[];
	hero: {
		eyebrow: string;
		headline: string;
		intro: string;
		audience: string;
		actions: HeroAction[];
	};
	stats: Stat[];
	services: Service[];
	proofs: Proof[];
	principles: Principle[];
	contact: {
		headline: string;
		body: string;
		links: ContactLink[];
	};
};

export const siteContent: SiteContent = {
	profile: {
		name: 'Manish Kasliwal',
		role: 'Startup Advisor',
		location: 'Remote, US-friendly',
		availability: 'Selective advisory engagements'
	},
	seo: {
		title: 'Manish Kasliwal | Startup Advisor for Founders and Investors',
		description:
			'Bold, results-driven startup advisory for founders and investors who need sharper decisions, faster execution, and stronger operating leverage.',
		keywords: [
			'startup advisor',
			'founder advisor',
			'investor advisor',
			'growth strategy',
			'operating partner',
			'portfolio'
		]
	},
	navigation: [
		{ label: 'What I Do', href: '#services' },
		{ label: 'Results', href: '#results' },
		{ label: 'Perspective', href: '#principles' },
		{ label: 'Contact', href: '#contact' }
	],
	hero: {
		eyebrow: 'Strategic operator. Trusted thought partner. Execution-minded advisor.',
		headline: 'I help founders and investors turn ambiguity into decisive momentum.',
		intro:
			"I work with startup leaders who need more than generic advice. I help clarify the next move, tighten execution, and focus teams around the handful of decisions that actually change outcomes.",
		audience:
			'Built for founders navigating inflection points and investors supporting companies through growth, reset, or strategic change.',
		actions: [
			{ label: 'Book an advisory intro', href: '#contact', variant: 'primary' },
			{ label: 'See selected results', href: '#results', variant: 'secondary' }
		]
	},
	stats: [
		{ value: '0→1', label: 'Decision support for new bets, pivots, and launches' },
		{ value: 'Series A+', label: 'Operator lens for scaling teams and investor readiness' },
		{ value: 'Fast clarity', label: 'Structured advisory that cuts noise and sharpens priorities' }
	],
	services: [
		{
			title: 'Strategic decision support',
			summary:
				'Pressure-test priorities, narratives, and tradeoffs before they become expensive distractions.',
			outcomes: 'Positioning resets, board-level decisions, roadmap focus, founder alignment'
		},
		{
			title: 'Growth and operating leverage',
			summary:
				'Translate ambition into a tighter operating rhythm with metrics, ownership, and practical sequencing.',
			outcomes: 'Go-to-market tuning, KPI discipline, execution planning, team clarity'
		},
		{
			title: 'Investor and portfolio perspective',
			summary:
				'Add an operator-informed point of view when companies need sharper narratives and stronger internal alignment.',
			outcomes: 'Fundraising story refinement, diligence support, portfolio coaching, strategic triage'
		}
	],
	proofs: [
		{
			title: 'Aligned a leadership team around the next 90 days',
			result: 'Reframed competing priorities into one execution plan with clear owners and measurable checkpoints.',
			detail:
				'Best fit for companies that have energy and talent, but too many moving pieces competing for attention.'
		},
		{
			title: 'Strengthened founder-facing strategic narrative',
			result: 'Turned scattered talking points into a sharper investor and stakeholder story built around traction, risk, and momentum.',
			detail:
				'Useful when a company has substance but the story undersells why the business matters right now.'
		},
		{
			title: 'Created operating clarity during a reset moment',
			result: 'Helped separate signal from noise so the team could make hard calls quickly and move forward with conviction.',
			detail:
				'Designed for pivots, post-fundraise reality checks, or periods where execution has drifted.'
		}
	],
	principles: [
		{
			title: 'Substance over theater',
			body: 'I care about the real constraint, not the most polished explanation of it.'
		},
		{
			title: 'Momentum is designed',
			body: 'Most teams do not need more ideas. They need tighter sequencing, cleaner ownership, and fewer competing priorities.'
		},
		{
			title: 'Clarity should compound',
			body: 'Good advisory work should make the next decision easier, not create dependency.'
		}
	],
	contact: {
		headline: 'If you are at an inflection point, let’s make the next move obvious.',
		body: 'Use these placeholders for now. When you share your real details, I can swap them in without changing the site structure.',
		links: [
			{
				label: 'Email',
				href: 'mailto:replace-with-your-email@example.com',
				note: 'Best for founder or investor introductions'
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/replace-with-your-profile',
				note: 'Use your public profile URL here'
			}
		]
	}
};
