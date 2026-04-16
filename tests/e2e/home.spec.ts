import { expect, test } from '@playwright/test';

test('homepage renders key sections and CTA flow', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.getByRole('heading', {
			name: /I help founders and investors turn ambiguity into decisive momentum/i
		})
	).toBeVisible();

	await expect(page.getByRole('link', { name: /Book an advisory intro/i })).toBeVisible();

	await page.getByRole('link', { name: 'Results', exact: true }).click();
	await expect(page).toHaveURL(/#results$/);
	await expect(page.getByRole('heading', { name: /Proof points that sound like operator work/i })).toBeVisible();

	await page.getByRole('link', { name: 'Contact', exact: true }).click();
	await expect(page).toHaveURL(/#contact$/);
	await expect(page.getByRole('heading', { name: /If you are at an inflection point/i })).toBeVisible();
});
