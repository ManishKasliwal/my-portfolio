<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { siteContent } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteContent.seo.title}</title>
	<meta name="description" content={siteContent.seo.description} />
	<meta name="keywords" content={siteContent.seo.keywords.join(', ')} />
	<meta name="theme-color" content="#09111b" />
	<meta property="og:title" content={siteContent.seo.title} />
	<meta property="og:description" content={siteContent.seo.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteContent.seo.title} />
	<meta name="twitter:description" content={siteContent.seo.description} />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
