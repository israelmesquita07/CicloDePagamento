const express = require('express')

module.exports = function (server) {
    
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Diversas rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    // router.route('/test').get(function (req, res, next) {
    //     res.send('Funciona mesmo')
    // })

    const billingSummaryServices = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryServices.getSummary)
}