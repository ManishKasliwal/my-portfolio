<script lang="ts">
	import type { Service } from '$lib/content/site';

	type Props = {
		service: Service;
		index: number;
	};

	let { service, index }: Props = $props();
</script>

<article
	class="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition-transform duration-300 hover:-translate-y-1"
	data-reveal
>
	<p class="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
		{String(index + 1).padStart(2, '0')}
	</p>
	<h3 class="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
		{service.title}
	</h3>
	<p class="mt-4 text-base leading-7 text-[var(--color-muted)]">{service.summary}</p>
	<p class="mt-6 border-t border-white/10 pt-4 text-sm leading-6 text-[var(--color-ink)]/85">
		{service.outcomes}
	</p>
</article>
