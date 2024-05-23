
export interface EmployeeListData {
  id?: number;
  fullName?: string;
  surname?: string;
  country?: string;
  status?: string;
  jobPosition?: string,
  startContractDate: Date;
  endContractDate: Date;
  contractRate?: number;
  verified?: boolean;
}