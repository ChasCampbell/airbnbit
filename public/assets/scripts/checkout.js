var Bitpay = require('bitpay-node');
var client = new Bitpay.Client({ apiKey: 'T6a1ZG2dSvvzuxUiXNqM4x' });


client.createInvoice({ price: 0.00001, currency: 'BTC' }, function(err, invoice) {
    console.log(invoice);
});
