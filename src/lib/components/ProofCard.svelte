<script lang="ts">
	import type { Proof } from '$lib/content/site';

	type Props = {
		proof: Proof;
	};

	let { proof }: Props = $props();
</script>

<article class="rounded-[2rem] border border-white/10 bg-[var(--color-surface-strong)] p-6" data-reveal>
	<h3 class="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{proof.title}</h3>
	<p class="mt-4 text-base leading-7 text-[var(--color-ink)]/90">{proof.result}</p>
	<p class="mt-4 text-sm leading-6 text-[var(--color-muted)]">{proof.detail}</p>
</article>
