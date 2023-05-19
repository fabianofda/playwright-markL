import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('deve poder cadastrar uma nova tarefa', async ({ page }) => {
    // await page.goto('http://localhost:3000')

    //### exemplo busca por ID:
    // await page.fill('#newTask', 'Estudar TS - Type Script')

    //### exemplo busca por Type:
    // await page.fill('input[type=text]', 'Estudar TS - Type Script')

    //### exemplo busca por classe:
    // await page.fill('._listInputNewTask_1y0mp_21', 'Estudar TS - Type Script')

    //### exemplo busca por regex + classe:
    // await page.fill('input[class*= "InputNewTask"]', 'Estudar TS - Type Script')

    //### exemplo busca por placeholder:
    // await page.fill('input[placeholder="Add a new Task"]', 'Estudar TS - Type Script')

    //###  novo exemplo de preenchimento do campo input + Enter
    // const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    // await inputTaskName.fill('Estudar TS - Type Script')
    // await inputTaskName.press('Enter')

    //### novo exemplo de preenchimento do campo input + Click + localizador por XPATH:
    // const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    // await inputTaskName.fill('Estudar TS - Type Script')
    // await page.click('xpath=//button[constains(text(), "Create")]')

    //### novo exemplo com faker
    // const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    // await inputTaskName.fill(faker.lorem.words())

    // await page.click('css=button >> text=Create')

})