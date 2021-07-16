const createTestCafe        = require('testcafe');
const selfSignedCertificate = require('openssl-self-signed-certificate');

const sslOptions = {
    key:  selfSignedCertificate.key,
    cert: selfSignedCertificate.cert
};

let testcafe = null;
let runner = null;

(async () => {
    try {
        testcafe = await createTestCafe('localhost', 1337, 1338, sslOptions);
        runner   = testcafe.createRunner();
        
        await runner
            .src('test')
            .browsers("browserstack:Samsung Galaxy S21@11.0")
            .run();
    } catch (error) {
        console.log('Error: ' + error)
    } finally {
        await testcafe.close();
    }
})();