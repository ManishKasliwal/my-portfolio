<script lang="ts">
	import { onMount } from 'svelte';
	import ContactPanel from '$lib/components/ContactPanel.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProofCard from '$lib/components/ProofCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { siteContent, withGsapContext } from '$lib';

	let page: HTMLElement | undefined;

	onMount(() => {
		if (!page) {
			return;
		}

		return withGsapContext(page, (gsap) => {
			gsap.set('[data-reveal]', { y: 28, opacity: 0 });
			gsap.set('.js-hero-panel', { y: 32, opacity: 0 });
			gsap.set('.js-orbit', { scale: 0.88, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power2.out' } })
				.from('.js-nav-item', { y: -18, opacity: 0, duration: 0.35, stagger: 0.06 })
				.from('.js-eyebrow', { y: 18, opacity: 0, duration: 0.4 }, '-=0.1')
				.from('.js-headline', { y: 24, opacity: 0, duration: 0.7 }, '-=0.15')
				.from('.js-intro', { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
				.from('.js-actions', { y: 18, opacity: 0, duration: 0.45 }, '-=0.3')
				.to('.js-hero-panel', { y: 0, opacity: 1, duration: 0.55 }, '-=0.35')
				.to('.js-orbit', { scale: 1, opacity: 1, duration: 0.6 }, '-=0.45')
				.to('[data-reveal]', { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.15');

			gsap.to('.js-orbit', {
				rotate: 360,
				duration: 24,
				ease: 'none',
				repeat: -1,
				transformOrigin: 'center'
			});

			gsap.to('.js-pulse-dot', {
				scale: 1.18,
				opacity: 0.6,
				duration: 1.8,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				stagger: 0.15
			});
		});
	});
</script>

<svelte:head>
	<title>{siteContent.seo.title}</title>
	<meta name="description" content={siteContent.seo.description} />
</svelte:head>

<div bind:this={page} class="min-h-screen">
	<div class="mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12">
		<main class="space-y-24 py-10 sm:space-y-28">
			<HeroSection
				profile={siteContent.profile}
				navigation={siteContent.navigation}
				hero={siteContent.hero}
				stats={siteContent.stats}
			/>

			<section id="services" class="space-y-10 scroll-mt-28">
				<SectionHeading
					eyebrow="What I do"
					title="Advisory support built for moments where the next decision matters more than another brainstorming session."
					intro="The site starts with a focused one-page format, so visitors can understand your value fast: what kind of problems you help solve, how you think, and why a conversation with you is worth their time."
				/>

				<div class="grid gap-5 lg:grid-cols-3">
					{#each siteContent.services as service, index}
						<ServiceCard {service} {index} />
					{/each}
				</div>
			</section>

			<section id="results" class="space-y-10 scroll-mt-28">
				<SectionHeading
					eyebrow="Selected results"
					title="Proof points that sound like operator work, not abstract consulting language."
					intro="Because we are working from partial personal details, these are written as strong placeholders. The structure is ready for real case studies, metrics, company names, or anonymized outcomes."
				/>

				<div class="grid gap-5 lg:grid-cols-3">
					{#each siteContent.proofs as proof}
						<ProofCard {proof} />
					{/each}
				</div>
			</section>

			<section id="principles" class="space-y-10 scroll-mt-28">
				<SectionHeading
					eyebrow="Perspective"
					title="A little personality, anchored in how you think and how you work."
					intro="This section gives the site a stronger point of view so it feels like your portfolio, not a sanitized business landing page."
				/>

				<div class="grid gap-5 md:grid-cols-3">
					{#each siteContent.principles as principle}
						<article
							class="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
							data-reveal
						>
							<h3 class="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
								{principle.title}
							</h3>
							<p class="mt-4 text-base leading-7 text-[var(--color-muted)]">{principle.body}</p>
						</article>
					{/each}
				</div>
			</section>

			<ContactPanel contact={siteContent.contact} />
		</main>
	</div>
</div>
