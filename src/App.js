import React from 'react';
import { Row, Col, InputNumber, DatePicker  } from 'antd';

import { Select } from 'antd';

import 'antd/dist/antd.css'; 
// import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payPeriodType: null,
      payPeriodEndDate: null,
      payPeriodsLeft: 0,
      yearToDate: {
        grossWage: 85673.04,
        bonus: 9002.20,
        commission: 21000,
        vacation: 0,
        holidays: 1557.60,
        incomeOther: 125,
        federalTaxWithheld: 16332.88,
        socialSecurity: 6885.18,
        medicare: 1610.24,
        medicalHealthcare: 4209.20,
        dental: 713.66,
        pensionOr401k: 6978.40,
        healthSavingsAccount: 1307.64,
        vision: 217.26,
        flexSpending: 0,
        taxableDeductionsOther: 0,
        disability: 9.86,
        lifeInsurance: 141.27,
        nonTaxableDeductionsOther: 0,
        netPay: 103780.55,
        taxablePay: 103931.68,
        federalTaxWithheld: 16332.88,
        socialSecurityTax: 6885.18,
        medicare: 1610.24
      },
      currentPayPeriod: {
        grossWage: 5192.30,
        bonus: 0,
        commission: 0,
        vacation: 0,
        holidays: 0,
        incomeOther: 0,
        federalTaxWithheld: 435.62,
        socialSecurity: 298.92,
        medicare: 69.90,
        medicalHealthcare: 247.60,
        dental: 41.98,
        pensionOr401k: 415.38,
        healthSavingsAccount: 76.92,
        vision: 12.78,
        flexSpending: 0,
        taxableDeductionsOther: 0,
        disability: 8.31,
        lifeInsurance: 0.58,
        nonTaxableDeductionsOther: 0,
        netPay: 3584.31,
        taxablePay: 4397.64,
        federalTaxWithheld: 435.62,
        socialSecurityTax: 298.92,
        medicare: 69.90
      },
      caculatedEndOfYear: {
        grossWage: 0,
        bonus: 0,
        commission: 0,
        vacation: 0,
        holidays: 0,
        incomeOther: 0,
        federalTaxWithheld: 0,
        socialSecurity: 0,
        medicare: 0,
        medicalHealthcare: 0,
        dental: 0,
        pensionOr401k: 0,
        healthSavingsAccount: 0,
        vision: 0,
        flexSpending: 0,
        taxableDeductionsOther: 0,
        disability: 0,
        lifeInsurance: 0,
        nonTaxableDeductionsOther: 0,
        netPay: 0,
        taxablePay: 0,
        federalTaxWithheld: 0,
        socialSecurityTax: 0,
        medicare: 0
      },
      calculateEOYTotals: {
        grossWage: 0,
        bonus: 0,
        commission: 0,
        vacation: 0,
        holidays: 0,
        incomeOther: 0,
        federalTaxWithheld: 0,
        socialSecurity: 0,
        medicare: 0,
        medicalHealthcare: 0,
        dental: 0,
        pensionOr401k: 0,
        healthSavingsAccount: 0,
        vision: 0,
        flexSpending: 0,
        taxableDeductionsOther: 0,
        disability: 0,
        lifeInsurance: 0,
        nonTaxableDeductionsOther: 0,
        netPay: 0,
        taxablePay: 0,
        federalTaxWithheld: 0,
        socialSecurityTax: 0,
        medicare: 0
      }
    };
  }
  

  calculatePayPeriodsLeft = (date, type) =>{
    var newDate = new Date(date);

    var payPeriodsLeft = Math.floor((newDate - new Date(newDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    if(type === "weekly"){      

      return (365 - payPeriodsLeft) / 7;
    } else if(type === "biweekly") {     

      return (365 - payPeriodsLeft) / 14;
    } else if(type === "semimonthly") {   
      debugger;
      var daysInMonthDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
      var daysInMonth = daysInMonthDate.getDate();   
      var month = newDate.getMonth() + 1;
      var day = newDate.getDate();

      var monthsLeft = 13 - month;
      payPeriodsLeft = monthsLeft * 2;
      
      if(day === daysInMonth){
        payPeriodsLeft = payPeriodsLeft - 2;
      } else if(day >= 15){
        payPeriodsLeft = payPeriodsLeft - 1;
      }     

      return payPeriodsLeft;
    }
  }

  payPeriodTypeChange = (value) => {
    this.setState({
      payPeriodType: value
    });
  }

  payPeriodEndDateChange = (date, dateString) => {
    this.setState({
      payPeriodEndDate: dateString,
      payPeriodsLeft: Math.floor(this.calculatePayPeriodsLeft(dateString, this.state.payPeriodType))
    });
  }

  onChangeYTD = (event) => {
    let target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.props ? target.props.name : target.name;

		const edited = this.state.yearToDate;
		edited[name] = value;
		edited.isActive = true;
		this.setState({
			yearToDate: edited
    });
  }

  onChangeCurrentPayPeriod = (event) => {
    let target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.props ? target.props.name : target.name;

		const edited = this.state.currentPayPeriod;
		edited[name] = value;
		edited.isActive = true;
		this.setState({
			currentPayPeriod: edited
    });
  }

  calculateCurrentTotals = () => {
    const edited = this.state.caculatedEndOfYear;
    
    edited.grossWage = this.state.currentPayPeriod.grossWage * this.state.payPeriodsLeft;
    edited.bonus = this.state.currentPayPeriod.bonus * this.state.payPeriodsLeft;
    edited.commission = this.state.currentPayPeriod.commission * this.state.payPeriodsLeft;
    edited.vacation = this.state.currentPayPeriod.vacation * this.state.payPeriodsLeft;
    edited.holidays = this.state.currentPayPeriod.holidays * this.state.payPeriodsLeft;
    edited.incomeOther = this.state.currentPayPeriod.incomeOther * this.state.payPeriodsLeft;
    edited.federalTaxWithheld = this.state.currentPayPeriod.federalTaxWithheld * this.state.payPeriodsLeft;
    edited.socialSecurity = this.state.currentPayPeriod.socialSecurity * this.state.payPeriodsLeft;
    edited.medicare = this.state.currentPayPeriod.medicare * this.state.payPeriodsLeft;
    edited.medicalHealthcare = this.state.currentPayPeriod.medicalHealthcare * this.state.payPeriodsLeft;
    edited.dental = this.state.currentPayPeriod.dental * this.state.payPeriodsLeft;
    edited.pensionOr401k = this.state.currentPayPeriod.pensionOr401k * this.state.payPeriodsLeft;
    edited.healthSavingsAccount = this.state.currentPayPeriod.healthSavingsAccount * this.state.payPeriodsLeft;
    edited.vision = this.state.currentPayPeriod.vision * this.state.payPeriodsLeft;
    edited.flexSpending = this.state.currentPayPeriod.flexSpending * this.state.payPeriodsLeft;
    edited.taxableDeductionsOther = this.state.currentPayPeriod.taxableDeductionsOther * this.state.payPeriodsLeft;
    edited.disability = this.state.currentPayPeriod.disability * this.state.payPeriodsLeft;
    edited.lifeInsurance = this.state.currentPayPeriod.lifeInsurance * this.state.payPeriodsLeft;
    edited.nonTaxableDeductionsOther = this.state.currentPayPeriod.nonTaxableDeductionsOther * this.state.payPeriodsLeft;
    edited.netPay = this.state.currentPayPeriod.netPay * this.state.payPeriodsLeft;
    edited.taxablePay = this.state.currentPayPeriod.taxablePay * this.state.payPeriodsLeft;
    edited.federalTaxWithheld = this.state.currentPayPeriod.federalTaxWithheld * this.state.payPeriodsLeft;
    edited.socialSecurityTax = this.state.currentPayPeriod.socialSecurityTax * this.state.payPeriodsLeft;
    edited.medicare = this.state.currentPayPeriod.medicare * this.state.payPeriodsLeft;

    this.setState({
      caculatedEndOfYear: edited
    })
  }

  calculateEOYTotals = () => {
    const edited = this.state.calculateEOYTotals;
    
    edited.grossWage = this.state.caculatedEndOfYear.grossWage + this.state.yearToDate.grossWage;
    edited.bonus = this.state.caculatedEndOfYear.bonus + this.state.yearToDate.bonus;
    edited.commission = this.state.caculatedEndOfYear.commission + this.state.yearToDate.commission;
    edited.vacation = this.state.caculatedEndOfYear.vacation + this.state.yearToDate.vacation;
    edited.holidays = this.state.caculatedEndOfYear.holidays + this.state.yearToDate.holidays;
    edited.incomeOther = this.state.caculatedEndOfYear.incomeOther + this.state.yearToDate.incomeOther;
    edited.federalTaxWithheld = this.state.caculatedEndOfYear.federalTaxWithheld + this.state.yearToDate.federalTaxWithheld;
    edited.socialSecurity = this.state.caculatedEndOfYear.socialSecurity + this.state.yearToDate.socialSecurity;
    edited.medicare = this.state.caculatedEndOfYear.medicare + this.state.yearToDate.medicare;
    edited.medicalHealthcare = this.state.caculatedEndOfYear.medicalHealthcare + this.state.yearToDate.medicalHealthcare;
    edited.dental = this.state.caculatedEndOfYear.dental + this.state.yearToDate.dental;
    edited.pensionOr401k = this.state.caculatedEndOfYear.pensionOr401k + this.state.yearToDate.pensionOr401k;
    edited.healthSavingsAccount = this.state.caculatedEndOfYear.healthSavingsAccount + this.state.yearToDate.healthSavingsAccount;
    edited.vision = this.state.caculatedEndOfYear.vision + this.state.yearToDate.vision;
    edited.flexSpending = this.state.caculatedEndOfYear.flexSpending + this.state.yearToDate.flexSpending;
    edited.taxableDeductionsOther = this.state.caculatedEndOfYear.taxableDeductionsOther + this.state.yearToDate.taxableDeductionsOther;
    edited.disability = this.state.caculatedEndOfYear.disability + this.state.yearToDate.disability;
    edited.lifeInsurance = this.state.caculatedEndOfYear.lifeInsurance + this.state.yearToDate.lifeInsurance;
    edited.nonTaxableDeductionsOther = this.state.caculatedEndOfYear.nonTaxableDeductionsOther + this.state.yearToDate.nonTaxableDeductionsOther;
    edited.netPay = this.state.caculatedEndOfYear.netPay + this.state.yearToDate.netPay;
    edited.taxablePay = this.state.caculatedEndOfYear.taxablePay + this.state.yearToDate.taxablePay;
    edited.federalTaxWithheld = this.state.caculatedEndOfYear.federalTaxWithheld + this.state.yearToDate.federalTaxWithheld;
    edited.socialSecurityTax = this.state.caculatedEndOfYear.socialSecurityTax + this.state.yearToDate.socialSecurityTax;
    edited.medicare = this.state.caculatedEndOfYear.medicare + this.state.yearToDate.medicare;

    this.setState({
      calculateEOYTotals: edited
    })
  }

  calculateAllTotals = () => {
    this.calculateCurrentTotals();
    this.calculateEOYTotals();
  }


  render() {  
    const { Option } = Select;

    const payPeriods = [
      {
        name: "weekly"
      },
      {
        name: "biweekly"
      },
      {
        name: "semimonthly"
      }
    ];

    return (
      <div className="App">
        <div>
          <Select style={{ width: 120 }} onChange={(value) => this.payPeriodTypeChange(value)}>            
            {payPeriods.map(option=> (
              <Option key={option.name}>{option.name}</Option>
            ))}
          </Select>
        </div>
        {
          this.state.payPeriodType === null ? "" :
          <div>
            <DatePicker style={{ width: 120 }} onChange={this.payPeriodEndDateChange} format={'MM/DD/YYYY'} />          
          </div> 
        }
        {
          (this.state.payPeriodEndDate === null) ? "" : this.state.payPeriodsLeft
        }
        <Row>
          <Col span={12}>
            <h3>Year To Date Inputs</h3>
            <div>
              <label>grossWage</label>
              <input 
                type="number"
                name="grossWage"
                defaultValue={this.state.yearToDate.grossWage}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>bonus</label>
              <input 
                type="number"
                name="bonus"
                defaultValue={this.state.yearToDate.bonus}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>commission</label>
              <input 
                type="number"
                name="commission"
                defaultValue={this.state.yearToDate.commission}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>vacation</label>
              <input 
                type="number"
                name="vacation"
                defaultValue={this.state.yearToDate.vacation}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>holidays</label>
              <input 
                type="number"
                name="holidays"
                defaultValue={this.state.yearToDate.holidays}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>incomeOther</label>
              <input 
                type="number"
                name="incomeOther"
                defaultValue={this.state.yearToDate.incomeOther}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>federalTaxWithheld</label>
              <input 
                type="number"
                name="federalTaxWithheld"
                defaultValue={this.state.yearToDate.federalTaxWithheld}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>socialSecurity</label>
              <input 
                type="number"
                name="socialSecurity"
                defaultValue={this.state.yearToDate.socialSecurity}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>medicare</label>
              <input 
                type="number"
                name="medicare"
                defaultValue={this.state.yearToDate.medicare}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>medicalHealthcare</label>
              <input 
                type="number"
                name="medicalHealthcare"
                defaultValue={this.state.yearToDate.medicalHealthcare}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>dental</label>
              <input 
                type="number"
                name="dental"
                defaultValue={this.state.yearToDate.dental}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>pensionOr401k</label>
              <input 
                type="number"
                name="pensionOr401k"
                defaultValue={this.state.yearToDate.pensionOr401k}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>healthSavingsAccount</label>
              <input 
                type="number"
                name="healthSavingsAccount"
                defaultValue={this.state.yearToDate.healthSavingsAccount}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>vision</label>
              <input 
                type="number"
                name="vision"
                defaultValue={this.state.yearToDate.vision}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>flexSpending</label>
              <input 
                type="number"
                name="flexSpending"
                defaultValue={this.state.yearToDate.flexSpending}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>taxableDeductionsOther</label>
              <input 
                type="number"
                name="taxableDeductionsOther"
                defaultValue={this.state.yearToDate.taxableDeductionsOther}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>disability</label>
              <input 
                type="number"
                name="disability"
                defaultValue={this.state.yearToDate.disability}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>lifeInsurance</label>
              <input 
                type="number"
                name="lifeInsurance"
                defaultValue={this.state.yearToDate.lifeInsurance}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>nonTaxableDeductionsOther</label>
              <input 
                type="number"
                name="nonTaxableDeductionsOther"
                defaultValue={this.state.yearToDate.nonTaxableDeductionsOther}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>netPay</label>
              <input 
                type="number"
                name="netPay"
                defaultValue={this.state.yearToDate.netPay}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>taxablePay</label>
              <input 
                type="number"
                name="taxablePay"
                defaultValue={this.state.yearToDate.taxablePay}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>federalTaxWithheld</label>
              <input 
                type="number"
                name="federalTaxWithheld"
                defaultValue={this.state.yearToDate.federalTaxWithheld}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>medicare</label>
              <input 
                type="number"
                name="medicare"
                defaultValue={this.state.yearToDate.medicare}
                onChange={this.onChangeYTD}
              />
            </div>
            <div>
              <label>socialSecurityTax</label>
              <input 
                type="number"
                name="socialSecurityTax"
                defaultValue={this.state.yearToDate.socialSecurityTax}
                onChange={this.onChangeYTD}
              />
            </div>
          </Col>
          <Col span={12}>   
            <h3>Current Paycheck Inputs</h3> 
            <div>
              <label>grossWage</label>
              <input 
                type="number"
                name="grossWage"
                defaultValue={this.state.currentPayPeriod.grossWage}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>bonus</label>
              <input 
                type="number"
                name="bonus"
                defaultValue={this.state.currentPayPeriod.bonus}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>commission</label>
              <input 
                type="number"
                name="commission"
                defaultValue={this.state.currentPayPeriod.commission}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>vacation</label>
              <input 
                type="number"
                name="vacation"
                defaultValue={this.state.currentPayPeriod.vacation}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>holidays</label>
              <input 
                type="number"
                name="holidays"
                defaultValue={this.state.currentPayPeriod.holidays}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>incomeOther</label>
              <input 
                type="number"
                name="incomeOther"
                defaultValue={this.state.currentPayPeriod.incomeOther}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>federalTaxWithheld</label>
              <input 
                type="number"
                name="federalTaxWithheld"
                defaultValue={this.state.currentPayPeriod.federalTaxWithheld}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>socialSecurity</label>
              <input 
                type="number"
                name="socialSecurity"
                defaultValue={this.state.currentPayPeriod.socialSecurity}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>medicare</label>
              <input 
                type="number"
                name="medicare"
                defaultValue={this.state.currentPayPeriod.medicare}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>medicalHealthcare</label>
              <input 
                type="number"
                name="medicalHealthcare"
                defaultValue={this.state.currentPayPeriod.medicalHealthcare}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>dental</label>
              <input 
                type="number"
                name="dental"
                defaultValue={this.state.currentPayPeriod.dental}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>pensionOr401k</label>
              <input 
                type="number"
                name="pensionOr401k"
                defaultValue={this.state.currentPayPeriod.pensionOr401k}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>healthSavingsAccount</label>
              <input 
                type="number"
                name="healthSavingsAccount"
                defaultValue={this.state.currentPayPeriod.healthSavingsAccount}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>vision</label>
              <input 
                type="number"
                name="vision"
                defaultValue={this.state.currentPayPeriod.vision}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>flexSpending</label>
              <input 
                type="number"
                name="flexSpending"
                defaultValue={this.state.currentPayPeriod.flexSpending}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>taxableDeductionsOther</label>
              <input 
                type="number"
                name="taxableDeductionsOther"
                defaultValue={this.state.currentPayPeriod.taxableDeductionsOther}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>disability</label>
              <input 
                type="number"
                name="disability"
                defaultValue={this.state.currentPayPeriod.disability}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>lifeInsurance</label>
              <input 
                type="number"
                name="lifeInsurance"
                defaultValue={this.state.currentPayPeriod.lifeInsurance}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>nonTaxableDeductionsOther</label>
              <input 
                type="number"
                name="nonTaxableDeductionsOther"
                defaultValue={this.state.currentPayPeriod.nonTaxableDeductionsOther}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>netPay</label>
              <input 
                type="number"
                name="netPay"
                defaultValue={this.state.currentPayPeriod.netPay}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>taxablePay</label>
              <input 
                type="number"
                name="taxablePay"
                defaultValue={this.state.currentPayPeriod.taxablePay}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>federalTaxWithheld</label>
              <input 
                type="number"
                name="federalTaxWithheld"
                defaultValue={this.state.currentPayPeriod.federalTaxWithheld}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>medicare</label>
              <input 
                type="number"
                name="medicare"
                defaultValue={this.state.currentPayPeriod.medicare}
                onChange={this.onChangeCurrentPayPeriod}
              />
            </div>
            <div>
              <label>socialSecurityTax</label>
              <input 
                type="number"
                name="socialSecurityTax"
                defaultValue={this.state.currentPayPeriod.socialSecurityTax}
                onChange={this.onChangeCurrentPayPeriod}
              />   
            </div>  
          </Col>
        </Row>
        <button onClick={this.calculateAllTotals}>Submit</button>
        <div>
          <p>Taxable Wages: {this.state.calculateEOYTotals.taxablePay}</p>
          <p>Federal Tax Withheld: {this.state.calculateEOYTotals.federalTaxWithheld}</p>
        </div>

      </div>
    );
  }
}

export default App;
