sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onThecust_AccrualLookupByTimeAccountTypeList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                When.onThecust_AccrualLookupByTimeAccountTypeList.onFilterBar().iExecuteSearch();
                Then.onThecust_AccrualLookupByTimeAccountTypeList.onTable().iCheckRows();

                When.onThecust_AccrualLookupByTimeAccountTypeList.onTable().iPressRow(0);
                Then.onThecust_AccrualLookupByTimeAccountTypeObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});