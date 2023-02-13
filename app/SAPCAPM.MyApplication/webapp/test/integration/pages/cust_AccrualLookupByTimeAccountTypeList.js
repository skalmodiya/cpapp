sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'SAPCAPM.MyApplication',
            componentId: 'cust_AccrualLookupByTimeAccountTypeList',
            entitySet: 'cust_AccrualLookupByTimeAccountType'
        },
        CustomPageDefinitions
    );
});