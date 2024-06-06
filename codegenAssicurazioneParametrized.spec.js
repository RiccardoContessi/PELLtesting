import { test, expect, devices, chromium  } from '@playwright/test';

test('test', async ({ page }) => {
    const browser = await chromium.launch({
        headless: false, // Lancia il browser in modalità non-headless per il debugging
    });
    

    test.setTimeout(100000);  

    // Parametri
    const url = 'https://www.facile.it/';
    const viewport = { width: 1920, height: 1080 };
    const delay = 2000;
    const dateOfBirth = '12/12/1996';
    const placeOfBirth = 'Bergamo';
    const educationalQualification = 'secondarySchool';
    const occupation = 'retired';
    const plateNumber = 'FH922YC';
    const firstRegistrationDate = '01/2017';
    const purchaseYear = '2022';
    const makeOption = '000083';
    const modelOption = '003956';
    const equipmentOption = '085130';
    const additionalFuelOption = 'not';
    const securityDeviceOption = 'not';
    const overnightParkingOption = 'box';
    const firstName = 'luca';
    const lastName = 'felice';
    const address = 'via giulio cesare';
    const houseNumber = '12';
    const companyOption = '2';
    const riskClassOption = '_6';
    const email = 'prova@gmail.com';
    const phoneNumber = '3333333333';

    // Locatori
    const acceptAllButton = page.getByRole('button', { name: 'Accetta tutto' });
    const getQuoteLink = page.getByRole('link', { name: 'Fai un PREVENTIVO' });
    const genderOption = page.locator('div').filter({ hasText: /^Maschio$/ }).nth(1);
    const birthDatePlaceholder = page.getByPlaceholder('GG / MM / AAAA');
    const birthPlacePlaceholder = page.getByPlaceholder('Comune di nascita');
    const birthPlaceOption = page.getByText('Bergamo (BG)');
    const educationalQualificationSelect = page.locator('select[name="educationalQualification"]');
    const occupationSelect = page.locator('select[name="occupation"]');
    const proceedButton = page.getByRole('button', { name: 'Prosegui' });
    const plateNumberInput = page.locator('input[name="plateNumber"]');
    const firstRegistrationPlaceholder = page.getByPlaceholder('MM / AAAA');
    const purchaseYearInput = page.locator('input[name="purchaseYear"]');
    const makeSelect = page.locator('select[name="make"]');
    const modelSelect = page.locator('select[name="model"]');
    const equipmentSelect = page.locator('select[name="equipment"]');
    const additionalFuelSelect = page.locator('select[name="additionalFuel"]');
    const securityDeviceSelect = page.locator('select[name="securityDevice"]');
    const overnightParkingSelect = page.locator('select[name="overnightParking"]');
    const firstNamePlaceholder = page.getByPlaceholder('Nome', { exact: true });
    const lastNamePlaceholder = page.getByPlaceholder('Cognome');
    const addressPlaceholder = page.getByPlaceholder('Es. Viale Giulio Cesare, 54,');
    const addressOption = page.getByText('Via Giulio Cesare Procaccini');
    const houseNumberPlaceholder = page.getByPlaceholder('Numero civico');
    const companySelect = page.locator('select[name="company"]');
    const riskClassSelect = page.locator('select[name="assignedUniversalRiskClass"]');
    const emailPlaceholder = page.getByPlaceholder('Email');
    const phoneNumberPlaceholder = page.getByPlaceholder('Telefono cellulare');
    const consentCheckbox1 = page.locator('label').filter({ hasText: 'Acconsento a poter essere' }).locator('div').nth(1);
    const consentCheckbox2 = page.locator('label').filter({ hasText: 'Confermo la presa visione ed' }).locator('div').nth(1);
    const consentCheckbox3 = page.locator('label').filter({ hasText: 'Acconsento al trattamento e' }).locator('div').nth(1);
    const compareQuotesButton = page.getByRole('button', { name: 'Confronta Preventivi' });

    

    // Passo 1
    const startTime1 = performance.now();
    const response = await page.goto('https://www.facile.it/');
    expect(response.status()).toBe(200);
    const endTime1 = performance.now();
    console.log(`Passo 1 eseguito in ${endTime1 - startTime1} ms`);



    // Passo 2
    const startTime2 = performance.now();
    await acceptAllButton.click();
    expect(await getQuoteLink.isEnabled()).toBeTruthy();
    const endTime2 = performance.now();
    console.log(`Passo 2 eseguito in ${endTime2 - startTime2} ms`);



    // Passo 3
    const startTime3 = performance.now();
    await getQuoteLink.click();
    const response3 = await page.waitForResponse(response => response.status() === 200);
    expect(response3.ok()).toBeTruthy();
    const endTime3 = performance.now();
    console.log(`Passo 3 eseguito in ${endTime3 - startTime3} ms`);



    // Passo 4
    const startTime4 = performance.now();
    await genderOption.click();
    await birthDatePlaceholder.click();
    await birthDatePlaceholder.fill(dateOfBirth);
    await birthDatePlaceholder.press('Tab');
    await birthPlacePlaceholder.fill(placeOfBirth);
    await birthPlaceOption.click();
    await educationalQualificationSelect.selectOption(educationalQualification);
    await occupationSelect.selectOption(occupation);
    await proceedButton.click();
    const response4 = await page.waitForResponse(response => response.status() === 200);
    expect(response4.ok()).toBeTruthy();
    const endTime4 = performance.now();
    console.log(`Passo 4 eseguito in ${endTime4 - startTime4} ms`);



     // Passo 5
    const startTime5 = performance.now();
    await plateNumberInput.click();
    await plateNumberInput.fill(plateNumber);
    const targaTrovata = await page.locator('select[name="equipment"]').isVisible();
    if (!targaTrovata) {
        await page.waitForTimeout(32000);
    }
    const infoAggiuntive = await firstRegistrationPlaceholder.isVisible();
    if (infoAggiuntive) {
        await firstRegistrationPlaceholder.click();
        await firstRegistrationPlaceholder.fill(firstRegistrationDate);
    }
    await purchaseYearInput.click();
    await purchaseYearInput.fill(purchaseYear);
    if (infoAggiuntive) {
        await makeSelect.selectOption(makeOption);
        await modelSelect.selectOption(modelOption);
    }
    await equipmentSelect.selectOption(equipmentOption);
    await additionalFuelSelect.selectOption(additionalFuelOption);
    await securityDeviceSelect.selectOption(securityDeviceOption);
    await overnightParkingSelect.selectOption(overnightParkingOption);
    await proceedButton.click();
    const response5 = await page.waitForResponse(response => response.status() === 200);
    expect(response5.ok()).toBeTruthy();
    const endTime5 = performance.now();
    console.log(`Passo 5 eseguito in ${endTime5 - startTime5} ms`);




    // Passo 6
    const startTime6 = performance.now();
    await firstNamePlaceholder.click();
    await firstNamePlaceholder.fill(firstName);
    await firstNamePlaceholder.press('Tab');
    await lastNamePlaceholder.fill(lastName);
    await lastNamePlaceholder.press('Tab');
    await addressPlaceholder.fill(address);
    await addressOption.click();
    await houseNumberPlaceholder.click();
    await houseNumberPlaceholder.fill(houseNumber);
    await companySelect.selectOption(companyOption);
    await riskClassSelect.selectOption(riskClassOption);
    await page.locator('fieldset:nth-child(13) > div > div:nth-child(2) > ._1rf45hm6p > div > div > ._9h7zb2a > ._1rf45hmbp').first().click();
    await emailPlaceholder.click();
    await emailPlaceholder.fill(email);
    await emailPlaceholder.press('Tab');
    await phoneNumberPlaceholder.fill(phoneNumber);
    await consentCheckbox1.click();
    await consentCheckbox2.click();
    await consentCheckbox3.click();
    await compareQuotesButton.click();
    const response6 = await page.waitForResponse(response => response.status() === 200);
    expect(response6.ok()).toBeTruthy();
    const endTime6 = performance.now();
    console.log(`Passo 6 eseguito in ${endTime6 - startTime6} ms`);

    
    // Passo 7
    const startTime7 = performance.now();
    const response7 = await page.goto(url);
    expect(response7.status()).toBe(200);
    const endTime7 = performance.now();
    console.log(`Passo 7 eseguito in ${endTime7 - startTime7} ms`);
    
    await browser.close();
});
