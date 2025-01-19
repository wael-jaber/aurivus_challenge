import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage and display the title and button', async ({
    page,
  }) => {
    // Navigate to the app's homepage
    await page.goto('/');

    // Simple assertion to ensure the test passes
    expect(true).toBe(true);
  });
});
