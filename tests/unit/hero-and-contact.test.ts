import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ContactPanel from '../../src/lib/components/ContactPanel.svelte';
import HeroSection from '../../src/lib/components/HeroSection.svelte';
import { siteContent } from '../../src/lib';

describe('portfolio content components', () => {
	it('renders hero content from the typed site config', () => {
		render(HeroSection, {
			profile: siteContent.profile,
			navigation: siteContent.navigation,
			hero: siteContent.hero,
			stats: siteContent.stats
		});

		expect(
			screen.getByRole('heading', { name: siteContent.hero.headline, level: 1 })
		).toBeInTheDocument();
		expect(screen.getByText(siteContent.hero.audience)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: siteContent.hero.actions[0].label })).toHaveAttribute(
			'href',
			'#contact'
		);
	});

	it('renders contact calls to action with editable links', () => {
		render(ContactPanel, { contact: siteContent.contact });

		expect(screen.getByRole('heading', { name: siteContent.contact.headline })).toBeVisible();
		expect(screen.getByRole('link', { name: /Email/i })).toHaveAttribute(
			'href',
			siteContent.contact.links[0].href
		);
		expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
			'href',
			siteContent.contact.links[1].href
		);
	});
});
