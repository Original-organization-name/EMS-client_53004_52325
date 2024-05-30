import { FormControl } from "@angular/forms"
import { ContractType, Gender, SalaryType } from "src/app/services/api";

export type ContractForm = {
    employmentDate: FormControl<Date>;
    conclusionDate: FormControl<Date>;
    positionItemId: FormControl<string | null>;
    workplaceItemId: FormControl<string | null>;
    occupationCodeItemId: FormControl<string | null>;
    startDate: FormControl<Date>;
    terminationDate: FormControl<Date | null>;
    fteNumerator: FormControl<number>;
    fteDenominator: FormControl<number>;
    salary: FormControl<number>;
    salaryType: FormControl<SalaryType>;
    contractType: FormControl<ContractType>;
}