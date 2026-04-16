<script lang="ts">
	import type { SiteContent } from '$lib/content/site';

	type Props = {
		contact: SiteContent['contact'];
	};

	let { contact }: Props = $props();
</script>

<section id="contact" class="scroll-mt-28">
	<div
		class="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,61,0.14),rgba(255,255,255,0.05))] p-8 shadow-[var(--shadow-glow)] sm:p-10"
		data-reveal
	>
		<div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end">
			<div>
				<p class="mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
					Contact
				</p>
				<h2 class="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
					{contact.headline}
				</h2>
				<p class="mt-4 max-w-2xl text-base leading-7 text-[var(--color-ink)]/85">
					{contact.body}
				</p>
			</div>

			<div class="space-y-4">
				{#each contact.links as link}
					<a
						class="block rounded-[1.5rem] border border-white/10 bg-[rgba(9,17,27,0.32)] px-5 py-4 hover:-translate-y-0.5 hover:border-white/20"
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
					>
						<span class="block text-sm font-medium text-[var(--color-ink)]">{link.label}</span>
						<span class="mt-1 block text-sm text-[var(--color-muted)]">{link.note}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
