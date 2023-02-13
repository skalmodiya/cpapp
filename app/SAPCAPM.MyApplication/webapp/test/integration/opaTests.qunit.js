sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'SAPCAPM/MyApplication/test/integration/FirstJourney',
		'SAPCAPM/MyApplication/test/integration/pages/cust_AccrualLookupByTimeAccountTypeList',
		'SAPCAPM/MyApplication/test/integration/pages/cust_AccrualLookupByTimeAccountTypeObjectPage'
    ],
    function(JourneyRunner, opaJourney, cust_AccrualLookupByTimeAccountTypeList, cust_AccrualLookupByTimeAccountTypeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('SAPCAPM/MyApplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecust_AccrualLookupByTimeAccountTypeList: cust_AccrualLookupByTimeAccountTypeList,
					onThecust_AccrualLookupByTimeAccountTypeObjectPage: cust_AccrualLookupByTimeAccountTypeObjectPage
                }
            },
            opaJourney.run
        );
    }
);