import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Usuario').fill('paciente');
  await page.getByLabel('Contraseña', { exact: true }).fill('Clave123');
  await page.getByRole('button', { name: /ingresar|iniciar sesión/i }).click();
  await page.waitForURL(/paciente/);
  await page.goto('/paciente/agendar');
});

test('CP13 - No permite continuar sin elegir especialidad y médico', async ({ page }) => {
  await expect(page.getByLabel('Especialidad')).toBeVisible();
  await expect(page.getByLabel('Médico')).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Continuar' })).toBeDisabled();
});

test('CP14 - Permite avanzar al paso de fecha y hora al elegir especialidad y médico', async ({ page }) => {
  const specialty = page.getByLabel('Especialidad');
  await expect(specialty).toBeVisible();

  await expect.poll(async () => specialty.locator('option').count()).toBeGreaterThan(1);
  await specialty.selectOption({ index: 1 });

  const doctor = page.getByLabel('Médico');
  await expect.poll(async () => doctor.locator('option').count()).toBeGreaterThan(1);
  await doctor.selectOption({ index: 1 });

  await page.getByRole('button', { name: 'Continuar' }).click();

  await expect(page.getByLabel('Fecha')).toBeVisible();
  await expect(page.getByText('2. Fecha y hora')).toBeVisible();
});
