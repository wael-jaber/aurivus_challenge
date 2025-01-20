import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test.describe('File Upload Functionality', () => {
  test('should hide the error message after selecting a file', async ({
    page,
  }) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, './auricus_icon.png');

    await page.goto('http://localhost:5173');

    const errorMessage = await page.locator('[data-testid="image-error"]');
    await expect(errorMessage).toBeVisible();

    const fileInput = await page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);

    await expect(errorMessage).not.toBeVisible();
  });
});
