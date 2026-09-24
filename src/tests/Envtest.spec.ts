import { test } from '@playwright/test';


test('Environment Test', async ({ page }) => {
  // Check if the environment variable is set correctly
  
  console.log(process.env.NODE_ENV);
  console.log(process.env.Ausername);
});