<script lang="ts">
	import StatStrip from './StatStrip.svelte';
	import type { HeroAction, NavItem, SiteContent, Stat } from '$lib/content/site';

	type Props = {
		profile: SiteContent['profile'];
		navigation: NavItem[];
		hero: SiteContent['hero'];
		stats: Stat[];
	};

	let { profile, navigation, hero, stats }: Props = $props();

	const actionClasses: Record<HeroAction['variant'], string> = {
		primary:
			'bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5',
		secondary:
			'border border-white/10 bg-white/5 text-[var(--color-ink)] hover:border-white/20 hover:bg-white/[0.08]'
	};
</script>

<header
	class="sticky top-4 z-20 rounded-full border border-white/10 bg-[rgba(9,17,27,0.72)] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur"
>
	<div class="flex flex-wrap items-center justify-between gap-4">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
				{profile.role}
			</p>
			<p class="mt-1 text-sm text-[var(--color-muted)]">{profile.name}</p>
		</div>

		<nav aria-label="Primary" class="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
			{#each navigation as item}
				<a
					class="js-nav-item rounded-full px-3 py-2 hover:bg-white/5 hover:text-[var(--color-ink)]"
					href={item.href}>{item.label}</a
				>
			{/each}
		</nav>
	</div>
</header>

<section class="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(20rem,0.7fr)] lg:items-end lg:pt-16">
	<div class="space-y-8">
		<div class="space-y-5">
			<p class="js-eyebrow max-w-3xl text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
				{hero.eyebrow}
			</p>
			<h1 class="js-headline max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
				{hero.headline}
			</h1>
			<p class="js-intro max-w-3xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
				{hero.intro}
			</p>
			<p class="js-intro max-w-3xl border-l-2 border-[var(--color-accent)] pl-4 text-base leading-7 text-[var(--color-ink)]/90">
				{hero.audience}
			</p>
		</div>

		<div class="js-actions flex flex-wrap gap-3">
			{#each hero.actions as action}
				<a
					class={`rounded-full px-5 py-3 text-sm font-medium ${actionClasses[action.variant]}`}
					href={action.href}>{action.label}</a
				>
			{/each}
		</div>

		<div class="grid gap-4 md:max-w-3xl">
			<StatStrip stats={stats} />
		</div>
	</div>

	<aside
		class="js-hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_28px_60px_rgba(0,0,0,0.18)]"
	>
		<div class="absolute -right-10 top-0 h-32 w-32 rounded-full bg-[var(--color-accent)]/18 blur-3xl"></div>
		<div class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-sky-300/10 blur-3xl"></div>
		<div class="relative">
			<p class="mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
				Operating posture
			</p>
			<div class="mt-6 flex items-center justify-center">
				<svg class="js-orbit h-44 w-44" viewBox="0 0 200 200" aria-hidden="true">
					<circle cx="100" cy="100" r="74" fill="none" stroke="rgba(255,255,255,0.12)" />
					<circle cx="100" cy="100" r="52" fill="none" stroke="rgba(255,255,255,0.08)" />
					<circle cx="100" cy="100" r="12" fill="var(--color-accent)" />
					<circle class="js-pulse-dot" cx="100" cy="26" r="6" fill="#ffc0aa" />
					<circle class="js-pulse-dot" cx="164" cy="100" r="6" fill="#ffc0aa" />
					<circle class="js-pulse-dot" cx="38" cy="136" r="6" fill="#ffc0aa" />
				</svg>
			</div>
			<ul class="mt-6 space-y-4 text-sm leading-6 text-[var(--color-muted)]">
				<li class="border-b border-white/10 pb-4">
					<span class="block text-[var(--color-ink)]">Focus</span>
					Clarify the one move that changes the board, not the ten that create noise.
				</li>
				<li class="border-b border-white/10 pb-4">
					<span class="block text-[var(--color-ink)]">Rhythm</span>
					Build execution cadence leaders can actually sustain.
				</li>
				<li>
					<span class="block text-[var(--color-ink)]">Signal</span>
					Create alignment investors, operators, and founders can all work from.
				</li>
			</ul>
		</div>
	</aside>
</section>
