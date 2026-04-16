import { describe, expect, it } from 'vitest';
import { siteContent } from './site';

describe('site content model', () => {
	it('includes SEO metadata and navigation for the main sections', () => {
		expect(siteContent.seo.title).toMatch(/Startup Advisor/);
		expect(siteContent.seo.description.length).toBeGreaterThan(60);
		expect(siteContent.navigation.map((item) => item.href)).toEqual([
			'#services',
			'#results',
			'#principles',
			'#contact'
		]);
	});

	it('keeps placeholder contact links editable and non-empty', () => {
		expect(siteContent.contact.links).toHaveLength(2);
		expect(siteContent.contact.links.every((link) => link.href.length > 0)).toBe(true);
	});
});
