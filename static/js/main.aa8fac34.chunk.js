(this.webpackJsonpw2calculator=this.webpackJsonpw2calculator||[]).push([[0],{101:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),r=a(26),c=a.n(r),l=(a(101),a(24)),d=a(77),o=a(78),h=a(93),u=a(92),b=a(142),j=a(145),y=a(146),x=a(143),O=(a(102),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n,i,s,r,c;return Object(d.a)(this,a),(c=t.call(this,e)).calculatePayPeriodsLeft=function(e,t){var a=new Date(e),n=Math.floor((a-new Date(a.getFullYear(),0,0))/1e3/60/60/24);if("weekly"===t)return(365-n)/7;if("biweekly"===t)return(365-n)/14;if("semimonthly"===t){var i=new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),s=a.getMonth()+1,r=a.getDate();return n=2*(13-s),r===i?n-=2:r>=15&&(n-=1),n}},c.payPeriodTypeChange=function(e){c.setState({payPeriodType:e})},c.payPeriodEndDateChange=function(e,t){c.setState({payPeriodEndDate:t,payPeriodsLeft:Math.floor(c.calculatePayPeriodsLeft(t,c.state.payPeriodType))})},c.onChangeYTD=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.props?t.props.name:t.name,i=c.state.yearToDate;i[n]=a,i.isActive=!0,c.setState({yearToDate:i})},c.onChangeCurrentPayPeriod=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.props?t.props.name:t.name,i=c.state.currentPayPeriod;i[n]=a,i.isActive=!0,c.setState({currentPayPeriod:i})},c.calculateCurrentTotals=function(){var e=c.state.caculatedEndOfYear;e.grossWage=c.state.currentPayPeriod.grossWage*c.state.payPeriodsLeft,e.bonus=c.state.currentPayPeriod.bonus*c.state.payPeriodsLeft,e.commission=c.state.currentPayPeriod.commission*c.state.payPeriodsLeft,e.vacation=c.state.currentPayPeriod.vacation*c.state.payPeriodsLeft,e.holidays=c.state.currentPayPeriod.holidays*c.state.payPeriodsLeft,e.incomeOther=c.state.currentPayPeriod.incomeOther*c.state.payPeriodsLeft,e.federalTaxWithheld=c.state.currentPayPeriod.federalTaxWithheld*c.state.payPeriodsLeft,e.socialSecurity=c.state.currentPayPeriod.socialSecurity*c.state.payPeriodsLeft,e.medicare=c.state.currentPayPeriod.medicare*c.state.payPeriodsLeft,e.medicalHealthcare=c.state.currentPayPeriod.medicalHealthcare*c.state.payPeriodsLeft,e.dental=c.state.currentPayPeriod.dental*c.state.payPeriodsLeft,e.pensionOr401k=c.state.currentPayPeriod.pensionOr401k*c.state.payPeriodsLeft,e.healthSavingsAccount=c.state.currentPayPeriod.healthSavingsAccount*c.state.payPeriodsLeft,e.vision=c.state.currentPayPeriod.vision*c.state.payPeriodsLeft,e.flexSpending=c.state.currentPayPeriod.flexSpending*c.state.payPeriodsLeft,e.taxableDeductionsOther=c.state.currentPayPeriod.taxableDeductionsOther*c.state.payPeriodsLeft,e.disability=c.state.currentPayPeriod.disability*c.state.payPeriodsLeft,e.lifeInsurance=c.state.currentPayPeriod.lifeInsurance*c.state.payPeriodsLeft,e.nonTaxableDeductionsOther=c.state.currentPayPeriod.nonTaxableDeductionsOther*c.state.payPeriodsLeft,e.netPay=c.state.currentPayPeriod.netPay*c.state.payPeriodsLeft,e.taxablePay=c.state.currentPayPeriod.taxablePay*c.state.payPeriodsLeft,e.federalTaxWithheld=c.state.currentPayPeriod.federalTaxWithheld*c.state.payPeriodsLeft,e.socialSecurityTax=c.state.currentPayPeriod.socialSecurityTax*c.state.payPeriodsLeft,e.medicare=c.state.currentPayPeriod.medicare*c.state.payPeriodsLeft,c.setState({caculatedEndOfYear:e})},c.calculateEOYTotals=function(){var e=c.state.calculateEOYTotals;e.grossWage=c.state.caculatedEndOfYear.grossWage+c.state.yearToDate.grossWage,e.bonus=c.state.caculatedEndOfYear.bonus+c.state.yearToDate.bonus,e.commission=c.state.caculatedEndOfYear.commission+c.state.yearToDate.commission,e.vacation=c.state.caculatedEndOfYear.vacation+c.state.yearToDate.vacation,e.holidays=c.state.caculatedEndOfYear.holidays+c.state.yearToDate.holidays,e.incomeOther=c.state.caculatedEndOfYear.incomeOther+c.state.yearToDate.incomeOther,e.federalTaxWithheld=c.state.caculatedEndOfYear.federalTaxWithheld+c.state.yearToDate.federalTaxWithheld,e.socialSecurity=c.state.caculatedEndOfYear.socialSecurity+c.state.yearToDate.socialSecurity,e.medicare=c.state.caculatedEndOfYear.medicare+c.state.yearToDate.medicare,e.medicalHealthcare=c.state.caculatedEndOfYear.medicalHealthcare+c.state.yearToDate.medicalHealthcare,e.dental=c.state.caculatedEndOfYear.dental+c.state.yearToDate.dental,e.pensionOr401k=c.state.caculatedEndOfYear.pensionOr401k+c.state.yearToDate.pensionOr401k,e.healthSavingsAccount=c.state.caculatedEndOfYear.healthSavingsAccount+c.state.yearToDate.healthSavingsAccount,e.vision=c.state.caculatedEndOfYear.vision+c.state.yearToDate.vision,e.flexSpending=c.state.caculatedEndOfYear.flexSpending+c.state.yearToDate.flexSpending,e.taxableDeductionsOther=c.state.caculatedEndOfYear.taxableDeductionsOther+c.state.yearToDate.taxableDeductionsOther,e.disability=c.state.caculatedEndOfYear.disability+c.state.yearToDate.disability,e.lifeInsurance=c.state.caculatedEndOfYear.lifeInsurance+c.state.yearToDate.lifeInsurance,e.nonTaxableDeductionsOther=c.state.caculatedEndOfYear.nonTaxableDeductionsOther+c.state.yearToDate.nonTaxableDeductionsOther,e.netPay=c.state.caculatedEndOfYear.netPay+c.state.yearToDate.netPay,e.taxablePay=c.state.caculatedEndOfYear.taxablePay+c.state.yearToDate.taxablePay,e.federalTaxWithheld=c.state.caculatedEndOfYear.federalTaxWithheld+c.state.yearToDate.federalTaxWithheld,e.socialSecurityTax=c.state.caculatedEndOfYear.socialSecurityTax+c.state.yearToDate.socialSecurityTax,e.medicare=c.state.caculatedEndOfYear.medicare+c.state.yearToDate.medicare,c.setState({calculateEOYTotals:e})},c.calculateAllTotals=function(){c.calculateCurrentTotals(),c.calculateEOYTotals()},c.state={payPeriodType:null,payPeriodEndDate:null,payPeriodsLeft:0,yearToDate:(n={grossWage:85673.04,bonus:9002.2,commission:21e3,vacation:0,holidays:1557.6,incomeOther:125,federalTaxWithheld:16332.88,socialSecurity:6885.18,medicare:1610.24,medicalHealthcare:4209.2,dental:713.66,pensionOr401k:6978.4,healthSavingsAccount:1307.64,vision:217.26,flexSpending:0,taxableDeductionsOther:0,disability:9.86,lifeInsurance:141.27,nonTaxableDeductionsOther:0,netPay:103780.55,taxablePay:103931.68},Object(l.a)(n,"federalTaxWithheld",16332.88),Object(l.a)(n,"socialSecurityTax",6885.18),Object(l.a)(n,"medicare",1610.24),n),currentPayPeriod:(i={grossWage:5192.3,bonus:0,commission:0,vacation:0,holidays:0,incomeOther:0,federalTaxWithheld:435.62,socialSecurity:298.92,medicare:69.9,medicalHealthcare:247.6,dental:41.98,pensionOr401k:415.38,healthSavingsAccount:76.92,vision:12.78,flexSpending:0,taxableDeductionsOther:0,disability:8.31,lifeInsurance:.58,nonTaxableDeductionsOther:0,netPay:3584.31,taxablePay:4397.64},Object(l.a)(i,"federalTaxWithheld",435.62),Object(l.a)(i,"socialSecurityTax",298.92),Object(l.a)(i,"medicare",69.9),i),caculatedEndOfYear:(s={grossWage:0,bonus:0,commission:0,vacation:0,holidays:0,incomeOther:0,federalTaxWithheld:0,socialSecurity:0,medicare:0,medicalHealthcare:0,dental:0,pensionOr401k:0,healthSavingsAccount:0,vision:0,flexSpending:0,taxableDeductionsOther:0,disability:0,lifeInsurance:0,nonTaxableDeductionsOther:0,netPay:0,taxablePay:0},Object(l.a)(s,"federalTaxWithheld",0),Object(l.a)(s,"socialSecurityTax",0),Object(l.a)(s,"medicare",0),s),calculateEOYTotals:(r={grossWage:0,bonus:0,commission:0,vacation:0,holidays:0,incomeOther:0,federalTaxWithheld:0,socialSecurity:0,medicare:0,medicalHealthcare:0,dental:0,pensionOr401k:0,healthSavingsAccount:0,vision:0,flexSpending:0,taxableDeductionsOther:0,disability:0,lifeInsurance:0,nonTaxableDeductionsOther:0,netPay:0,taxablePay:0},Object(l.a)(r,"federalTaxWithheld",0),Object(l.a)(r,"socialSecurityTax",0),Object(l.a)(r,"medicare",0),r)},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=x.a.Option;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{style:{width:120},onChange:function(t){return e.payPeriodTypeChange(t)},children:[{name:"weekly"},{name:"biweekly"},{name:"semimonthly"}].map((function(e){return Object(n.jsx)(t,{children:e.name},e.name)}))})}),null===this.state.payPeriodType?"":Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{style:{width:120},onChange:this.payPeriodEndDateChange,format:"MM/DD/YYYY"})}),null===this.state.payPeriodEndDate?"":this.state.payPeriodsLeft,Object(n.jsxs)(j.a,{children:[Object(n.jsxs)(y.a,{span:12,children:[Object(n.jsx)("h3",{children:"Year To Date Inputs"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"grossWage"}),Object(n.jsx)("input",{type:"number",name:"grossWage",defaultValue:this.state.yearToDate.grossWage,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"bonus"}),Object(n.jsx)("input",{type:"number",name:"bonus",defaultValue:this.state.yearToDate.bonus,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"commission"}),Object(n.jsx)("input",{type:"number",name:"commission",defaultValue:this.state.yearToDate.commission,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"vacation"}),Object(n.jsx)("input",{type:"number",name:"vacation",defaultValue:this.state.yearToDate.vacation,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"holidays"}),Object(n.jsx)("input",{type:"number",name:"holidays",defaultValue:this.state.yearToDate.holidays,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"incomeOther"}),Object(n.jsx)("input",{type:"number",name:"incomeOther",defaultValue:this.state.yearToDate.incomeOther,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"federalTaxWithheld"}),Object(n.jsx)("input",{type:"number",name:"federalTaxWithheld",defaultValue:this.state.yearToDate.federalTaxWithheld,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"socialSecurity"}),Object(n.jsx)("input",{type:"number",name:"socialSecurity",defaultValue:this.state.yearToDate.socialSecurity,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicare"}),Object(n.jsx)("input",{type:"number",name:"medicare",defaultValue:this.state.yearToDate.medicare,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicalHealthcare"}),Object(n.jsx)("input",{type:"number",name:"medicalHealthcare",defaultValue:this.state.yearToDate.medicalHealthcare,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"dental"}),Object(n.jsx)("input",{type:"number",name:"dental",defaultValue:this.state.yearToDate.dental,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"pensionOr401k"}),Object(n.jsx)("input",{type:"number",name:"pensionOr401k",defaultValue:this.state.yearToDate.pensionOr401k,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"healthSavingsAccount"}),Object(n.jsx)("input",{type:"number",name:"healthSavingsAccount",defaultValue:this.state.yearToDate.healthSavingsAccount,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"vision"}),Object(n.jsx)("input",{type:"number",name:"vision",defaultValue:this.state.yearToDate.vision,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"flexSpending"}),Object(n.jsx)("input",{type:"number",name:"flexSpending",defaultValue:this.state.yearToDate.flexSpending,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"taxableDeductionsOther"}),Object(n.jsx)("input",{type:"number",name:"taxableDeductionsOther",defaultValue:this.state.yearToDate.taxableDeductionsOther,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"disability"}),Object(n.jsx)("input",{type:"number",name:"disability",defaultValue:this.state.yearToDate.disability,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"lifeInsurance"}),Object(n.jsx)("input",{type:"number",name:"lifeInsurance",defaultValue:this.state.yearToDate.lifeInsurance,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"nonTaxableDeductionsOther"}),Object(n.jsx)("input",{type:"number",name:"nonTaxableDeductionsOther",defaultValue:this.state.yearToDate.nonTaxableDeductionsOther,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"netPay"}),Object(n.jsx)("input",{type:"number",name:"netPay",defaultValue:this.state.yearToDate.netPay,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"taxablePay"}),Object(n.jsx)("input",{type:"number",name:"taxablePay",defaultValue:this.state.yearToDate.taxablePay,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"federalTaxWithheld"}),Object(n.jsx)("input",{type:"number",name:"federalTaxWithheld",defaultValue:this.state.yearToDate.federalTaxWithheld,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicare"}),Object(n.jsx)("input",{type:"number",name:"medicare",defaultValue:this.state.yearToDate.medicare,onChange:this.onChangeYTD})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"socialSecurityTax"}),Object(n.jsx)("input",{type:"number",name:"socialSecurityTax",defaultValue:this.state.yearToDate.socialSecurityTax,onChange:this.onChangeYTD})]})]}),Object(n.jsxs)(y.a,{span:12,children:[Object(n.jsx)("h3",{children:"Current Paycheck Inputs"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"grossWage"}),Object(n.jsx)("input",{type:"number",name:"grossWage",defaultValue:this.state.currentPayPeriod.grossWage,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"bonus"}),Object(n.jsx)("input",{type:"number",name:"bonus",defaultValue:this.state.currentPayPeriod.bonus,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"commission"}),Object(n.jsx)("input",{type:"number",name:"commission",defaultValue:this.state.currentPayPeriod.commission,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"vacation"}),Object(n.jsx)("input",{type:"number",name:"vacation",defaultValue:this.state.currentPayPeriod.vacation,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"holidays"}),Object(n.jsx)("input",{type:"number",name:"holidays",defaultValue:this.state.currentPayPeriod.holidays,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"incomeOther"}),Object(n.jsx)("input",{type:"number",name:"incomeOther",defaultValue:this.state.currentPayPeriod.incomeOther,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"federalTaxWithheld"}),Object(n.jsx)("input",{type:"number",name:"federalTaxWithheld",defaultValue:this.state.currentPayPeriod.federalTaxWithheld,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"socialSecurity"}),Object(n.jsx)("input",{type:"number",name:"socialSecurity",defaultValue:this.state.currentPayPeriod.socialSecurity,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicare"}),Object(n.jsx)("input",{type:"number",name:"medicare",defaultValue:this.state.currentPayPeriod.medicare,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicalHealthcare"}),Object(n.jsx)("input",{type:"number",name:"medicalHealthcare",defaultValue:this.state.currentPayPeriod.medicalHealthcare,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"dental"}),Object(n.jsx)("input",{type:"number",name:"dental",defaultValue:this.state.currentPayPeriod.dental,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"pensionOr401k"}),Object(n.jsx)("input",{type:"number",name:"pensionOr401k",defaultValue:this.state.currentPayPeriod.pensionOr401k,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"healthSavingsAccount"}),Object(n.jsx)("input",{type:"number",name:"healthSavingsAccount",defaultValue:this.state.currentPayPeriod.healthSavingsAccount,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"vision"}),Object(n.jsx)("input",{type:"number",name:"vision",defaultValue:this.state.currentPayPeriod.vision,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"flexSpending"}),Object(n.jsx)("input",{type:"number",name:"flexSpending",defaultValue:this.state.currentPayPeriod.flexSpending,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"taxableDeductionsOther"}),Object(n.jsx)("input",{type:"number",name:"taxableDeductionsOther",defaultValue:this.state.currentPayPeriod.taxableDeductionsOther,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"disability"}),Object(n.jsx)("input",{type:"number",name:"disability",defaultValue:this.state.currentPayPeriod.disability,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"lifeInsurance"}),Object(n.jsx)("input",{type:"number",name:"lifeInsurance",defaultValue:this.state.currentPayPeriod.lifeInsurance,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"nonTaxableDeductionsOther"}),Object(n.jsx)("input",{type:"number",name:"nonTaxableDeductionsOther",defaultValue:this.state.currentPayPeriod.nonTaxableDeductionsOther,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"netPay"}),Object(n.jsx)("input",{type:"number",name:"netPay",defaultValue:this.state.currentPayPeriod.netPay,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"taxablePay"}),Object(n.jsx)("input",{type:"number",name:"taxablePay",defaultValue:this.state.currentPayPeriod.taxablePay,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"federalTaxWithheld"}),Object(n.jsx)("input",{type:"number",name:"federalTaxWithheld",defaultValue:this.state.currentPayPeriod.federalTaxWithheld,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"medicare"}),Object(n.jsx)("input",{type:"number",name:"medicare",defaultValue:this.state.currentPayPeriod.medicare,onChange:this.onChangeCurrentPayPeriod})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"socialSecurityTax"}),Object(n.jsx)("input",{type:"number",name:"socialSecurityTax",defaultValue:this.state.currentPayPeriod.socialSecurityTax,onChange:this.onChangeCurrentPayPeriod})]})]})]}),Object(n.jsx)("button",{onClick:this.calculateAllTotals,children:"Submit"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Taxable Wages: ",this.state.calculateEOYTotals.taxablePay]}),Object(n.jsxs)("p",{children:["Federal Tax Withheld: ",this.state.calculateEOYTotals.federalTaxWithheld]})]})]})}}]),a}(s.a.Component)),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),P()}},[[140,1,2]]]);
//# sourceMappingURL=main.aa8fac34.chunk.js.map