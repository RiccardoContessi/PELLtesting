import { test, expect, devices } from '@playwright/test';

test('test', async ({ page }) => {
    // Parametri
    const timeout = 100000;
    const url = 'https://www.facile.it/';
    const viewport = { width: 1920, height: 1080 };
    const delay = 2000;
    const dateOfBirth = '12 / 12 / 1996A';
    const placeOfBirth = 'Berg';
    const educationalQualification = 'secondarySchool';
    const occupation = 'retired';
    const plateNumber = 'FH922YC';
    const firstRegistrationDate = '01 / 2017A';
    const purchaseYear = '2022A';
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

    // Imposta un timeout più lungo, ad esempio 60 secondi
    test.setTimeout(timeout);  

    await page.goto(url);

    // abilita la dark mode
    await page.emulateMedia({ colorScheme: 'dark' });

    await page.setViewportSize(viewport);
    await page.waitForTimeout(delay);
    await acceptAllButton.click();
    await getQuoteLink.click();
    await genderOption.click();
    await birthDatePlaceholder.click();
    await birthDatePlaceholder.fill(dateOfBirth);
    await birthDatePlaceholder.press('Tab');
    await birthPlacePlaceholder.fill(placeOfBirth);
    await birthPlaceOption.click();
    await educationalQualificationSelect.selectOption(educationalQualification);
    await occupationSelect.selectOption(occupation);
    await proceedButton.click();

    const textboxes0 = page.locator('role=textbox');
    await textboxes0.nth(0).click();

    await plateNumberInput.click();
    await plateNumberInput.fill(plateNumber);

    // Attendi che il popup di caricamento scompaia
    const targaTrovata = await page.locator('select[name="equipment"]').isVisible();

    if (!targaTrovata) {
        await page.waitForTimeout(32000);
    }

    const infoAggiuntive = await firstRegistrationPlaceholder.isVisible();
    if (infoAggiuntive) {
        // Se l'elemento è visibile, procedi con le operazioni
        await firstRegistrationPlaceholder.click();   // prima immatricolazione
        await firstRegistrationPlaceholder.fill(firstRegistrationDate);
    }

    await purchaseYearInput.click();
    await purchaseYearInput.fill(purchaseYear);

    if (infoAggiuntive) {
        await makeSelect.selectOption(makeOption); // marca 
        await modelSelect.selectOption(modelOption); // modello 
    }

    await equipmentSelect.selectOption(equipmentOption); // allestimento
    await additionalFuelSelect.selectOption(additionalFuelOption); // alimentazione aggiuntiva. non c'è sempre
    await securityDeviceSelect.selectOption(securityDeviceOption); // antifurto
    await overnightParkingSelect.selectOption(overnightParkingOption); // dove tieni auto
    await proceedButton.click();

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
});
