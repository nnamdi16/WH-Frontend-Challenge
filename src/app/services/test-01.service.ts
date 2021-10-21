import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Test01Service {

  constructor() { }

  calculateLoanPayment(loanAmount: number): any {
    if (loanAmount <= 0) {
      return {
        monthly_payment: "N/A",
        late_payment: "N/A"
      }
    } else if (loanAmount > 0) {
      const monthly_payment:any = (0.02 * loanAmount).toFixed(2);
      const late_payment:any = (0.05 * monthly_payment).toFixed(2);
      return {
        monthly_payment,
        late_payment
      }
    }
    
  }
}
