using SAPCAPMService as service from '../../srv/service';

annotate service.cust_AccrualLookupByTimeAccountType with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'externalCode',
            Value : externalCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'createdBy',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Label : 'createdDateTime',
            Value : createdDateTime,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_AccrualAmount',
            Value : cust_AccrualAmount,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_TimeAccountType',
            Value : cust_TimeAccountType,
        },
    ]
);
annotate service.cust_AccrualLookupByTimeAccountType with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'externalCode',
                Value : externalCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'createdBy',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Label : 'createdDateTime',
                Value : createdDateTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_AccrualAmount',
                Value : cust_AccrualAmount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_TimeAccountType',
                Value : cust_TimeAccountType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'externalName',
                Value : externalName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lastModifiedBy',
                Value : lastModifiedBy,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lastModifiedDateTime',
                Value : lastModifiedDateTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'mdfSystemRecordStatus',
                Value : mdfSystemRecordStatus,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
