export type ContractType = 'Employment contract' | 'Commission contract' | 'Specific-task contract';

export const PaymentType = {
    employmentContract: 'Employment contract' as ContractType,
    commissionContract: 'Commission contract' as ContractType,
    specificTaskContract: 'Specific-task contract' as ContractType
    
}

export interface DictionaryContractTypesModel { 
    id: string;
    value: string;
}
