// @ts-check
import { test, expect } from '@playwright/test';

test('Test login with invalid credential', async ({ page }) => {

  //await: aguarda aparecer na tela para seguir
  //getBytestID: busca o elemento pelo atributo data-testid
  //fill: preenche o campo de texto
  //click: clica no elemento

  //navega para a pagina de login
  await page.goto('https://front.serverest.dev/login');
  await page.getByTestId('email').fill('test@tes.com');
  await page.getByTestId('senha').fill('12345');
  await page.getByTestId('entrar').click();

  //verifica se o botao de erro aparece
  await expect(page.getByRole('alert')).toBeVisible();
});

