import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Usuario').fill('paciente');
  await page.getByLabel('Contraseña', { exact: true }).fill('Clave123');
  await page.getByRole('button', { name: /ingresar|iniciar sesión/i }).click();
  await page.waitForURL(/paciente/);
  await page.goto('/paciente/citas');
});

test('CP15 - Mostrar la sección Mis citas', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Mis citas', exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Historial de mis citas' })
  ).toBeVisible();
});

test('CP16 - Abrir y cerrar la confirmación de cancelación', async ({ page }) => {
  const cancelButton = page.getByRole('button', { name: 'Cancelar cita' }).first();

  if (await cancelButton.count() === 0) {
    test.skip(true, 'El paciente no tiene citas pendientes o confirmadas para cancelar.');
  }

  await cancelButton.click();

  await expect(
    page.getByRole('heading', { name: 'Cancelar cita' })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Mantener cita' }).click();

  await expect(
    page.getByRole('heading', { name: 'Cancelar cita' })
  ).toBeHidden();
});
