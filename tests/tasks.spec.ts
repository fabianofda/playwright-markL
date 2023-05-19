import { test } from '@playwright/test'

import { TasksModel } from './fixtures/task.model'
import { deleteTaskByHelper, postTask } from './support/helpers'
import { TasksPage } from './support/pages/tasks'
import data from "./fixtures/tasks.json"

let tasksPage: TasksPage
test.beforeEach(({ page }) => {
    tasksPage = new TasksPage(page)
})

test.describe('Cadastrar', () => {
    test('deve poder cadastrar uma nova tarefa', async ({ request }) => {
        const task = data.success as TasksModel

        await deleteTaskByHelper(request, task.name)

        await tasksPage.go()
        await tasksPage.create(task)
        await tasksPage.shouldHaveText(task.name)
    })

    test('nao deve permiti tarefa duplicada', async ({ request }) => {
        const task = data.duplicate as TasksModel

        await deleteTaskByHelper(request, task.name)
        await postTask(request, task)

        await tasksPage.go()
        await tasksPage.create(task)
        await tasksPage.alertHaveText('Task already exists!')
    })

    test('deve validar campo obrigatorio', async () => {
        const task = data.required as TasksModel

        await tasksPage.go()
        await tasksPage.create(task)
        await tasksPage.validationMessageText('This is a required field')
    })
})

test.describe('Atualizar', () => {
    test('deve concluir uma tarefe', async ({ request }) => {
        const task = data.update as TasksModel

        await deleteTaskByHelper(request, task.name)
        await postTask(request, task)

        await tasksPage.go()
        await tasksPage.toggle(task.name)
        await tasksPage.shouldBeConcludes(task.name)
    })
})

test.describe('Excluir', () => {
    test('deve excluir uma tarefe', async ({ request }) => {
        const task = data.delete as TasksModel

        await deleteTaskByHelper(request, task.name)
        await postTask(request, task)

        await tasksPage.go()
        await tasksPage.remove(task.name)
        await tasksPage.shouldNotExist(task.name)
    })
})

