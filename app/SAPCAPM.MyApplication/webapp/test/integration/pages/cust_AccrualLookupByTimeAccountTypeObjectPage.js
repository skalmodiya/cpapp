sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'SAPCAPM.MyApplication',
            componentId: 'cust_AccrualLookupByTimeAccountTypeObjectPage',
            entitySet: 'cust_AccrualLookupByTimeAccountType'
        },
        CustomPageDefinitions
    );
});