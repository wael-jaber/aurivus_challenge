import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage and display the title and button', async ({
    page,
  }) => {
    // Navigate to the app's homepage
    await page.goto('/');

    // Check that the header exists and has the correct text
    const header = await page.locator('h1');
    await expect(header).toHaveText('Welcome to My React App');

    // Check that the button exists
    const button = await page.locator('button');
    await expect(button).toHaveText('Click me');

    // Simulate a button click and check if it works
    await button.click();

    // Check if clicking the button changes the UI
    const resultText = await page.locator('#result');
    await expect(resultText).toHaveText('Button clicked!');
  });
});
