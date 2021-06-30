import { Selector, ClientFunction } from 'testcafe';

fixture `Fixture browser go back`
    .page `https://www.amazon.com/`;

test('Test browser go back', async t => {
    // Open lister page
    await t.navigateTo('https://www.amazon.com/s?k=gaming+headsets');

    // Go to first product page
    const products = Selector('.s-image')
    await t.click(products.nth(0));

    // Navigate back to lister page
    const browserGoBack = ClientFunction(() => window.history.back());
    await browserGoBack();
});