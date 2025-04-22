describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

     })
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт 
        cy.get('#mail').type('german@dolniko.ru'); // Ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт 
        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без "@"
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

    })
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт 
        cy.get('#forgotEmailButton').click(); // Нажал "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел логин
        cy.get('#restoreEmailButton').click(); // Нажал "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

    })
    it('Проверка приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и он виден пользователю

    })

 })
 
 

 // + Найти поле логин и ввести верный логин
 // + Найти поле пароль и ввести правильный пароль
 // + Найти кнопку войти и нажать на нее 
 // + Проверить, что авторизация прошла успешно