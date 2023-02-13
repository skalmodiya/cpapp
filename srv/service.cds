using { SFPART067443 } from './external/SFPART067443.cds';

using { SAPCAPM as my } from '../db/schema';

using SAPCAPM from '../db/schema';

@path : 'service/SAPCAPM'
service SAPCAPMService
{
    entity cust_AccrualLookupByTimeAccountType as
        projection on SFPART067443.cust_AccrualLookupByTimeAccountType;
}

annotate SAPCAPMService with @requires :
[
    'authenticated-user'
];
