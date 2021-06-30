import { Selector, ClientFunction } from 'testcafe';

fixture `Test browser go back`
    .page `https://www.amazon.com/`;

test('My first test', async t => {
    // Open lister page
    await t.navigateTo('https://www.amazon.com/s?k=gaming+headsets');

    // Go to first product page
    const products = Selector('.s-image')
    await t.click(products.nth(0));

    // Navigate back to lister page
    const browserGoBack = ClientFunction(() => window.history.back());
    await browserGoBack();
});