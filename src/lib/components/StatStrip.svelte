<script lang="ts">
	import type { Stat } from '$lib/content/site';

	type Props = {
		stats: Stat[];
	};

	let { stats }: Props = $props();
</script>

<div class="grid gap-4 md:grid-cols-3">
	{#each stats as stat}
		<article
			class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
			data-reveal
		>
			<p class="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">{stat.value}</p>
			<p class="mt-3 text-sm leading-6 text-[var(--color-muted)]">{stat.label}</p>
		</article>
	{/each}
</div>
