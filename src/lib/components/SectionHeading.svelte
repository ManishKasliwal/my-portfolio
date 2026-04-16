<script lang="ts">
	type Props = {
		eyebrow: string;
		title: string;
		intro: string;
		align?: 'left' | 'center';
	};

	let { eyebrow, title, intro, align = 'left' }: Props = $props();
</script>

<div
	class={`max-w-3xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}
	data-reveal
>
	<p class="text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
		{eyebrow}
	</p>
	<h2 class="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">
		{title}
	</h2>
	<p class="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
		{intro}
	</p>
</div>
