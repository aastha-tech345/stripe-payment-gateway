const {newOrderId, checkStatus} = require('../../controller/cashfree/paymentController');
const express = require('express');
const router = express();

router.post('/payment', newOrderId);
router.get('/status/:orderid', checkStatus);

module.exports = router;