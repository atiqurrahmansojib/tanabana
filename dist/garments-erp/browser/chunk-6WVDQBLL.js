import "./chunk-XANLCPOO.js";

// src/app/features/hr/hr.routes.ts
var HR_ROUTES = [
  { path: "", redirectTo: "employee-master", pathMatch: "full" },
  {
    path: "employee-master",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.1", "title": "Employee Master", "module": "M9", "section": "Master", "archetype": "list", "entity": "Employee", "flagship": false } }
  },
  {
    path: "employee-master/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.1", "title": "Employee Master \u2014 record", "module": "M9", "section": "Master", "archetype": "object", "entity": "Employee", "flagship": false } }
  },
  {
    path: "department-and-designation",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.2", "title": "Department & Designation", "module": "M9", "section": "Master", "archetype": "list", "entity": "Department", "flagship": false } }
  },
  {
    path: "department-and-designation/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.2", "title": "Department & Designation \u2014 record", "module": "M9", "section": "Master", "archetype": "object", "entity": "Department", "flagship": false } }
  },
  {
    path: "wage-grade",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.3", "title": "Wage Grade", "module": "M9", "section": "Master", "archetype": "list", "entity": "WageGrade", "flagship": false } }
  },
  {
    path: "wage-grade/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.3", "title": "Wage Grade \u2014 record", "module": "M9", "section": "Master", "archetype": "object", "entity": "WageGrade", "flagship": false } }
  },
  {
    path: "shift-and-holiday-calendar",
    loadComponent: () => import("./chunk-3IL4J75H.js").then((m) => m.CalendarScreenComponent),
    data: { screen: { "code": "M9.4", "title": "Shift & Holiday Calendar", "module": "M9", "section": "Master", "archetype": "calendar", "entity": "ShiftDefinition", "flagship": false } }
  },
  {
    path: "attendance-device-monitor",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M9.5", "title": "Attendance Device Monitor", "module": "M9", "section": "Attend", "archetype": "board", "entity": "AttendanceDevice", "flagship": false } }
  },
  {
    path: "daily-attendance-and-correction",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M9.6", "title": "Daily Attendance & Correction", "module": "M9", "section": "Attend", "archetype": "form", "entity": "DailyAttendance", "flagship": true } }
  },
  {
    path: "overtime-approval",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.7", "title": "Overtime Approval", "module": "M9", "section": "Attend", "archetype": "list", "entity": "OvertimeApproval", "flagship": false } }
  },
  {
    path: "overtime-approval/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.7", "title": "Overtime Approval \u2014 record", "module": "M9", "section": "Attend", "archetype": "object", "entity": "OvertimeApproval", "flagship": false } }
  },
  {
    path: "manpower-plan",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.8", "title": "Manpower Plan", "module": "M9", "section": "Attend", "archetype": "list", "entity": "ManpowerPlan", "flagship": false } }
  },
  {
    path: "manpower-plan/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.8", "title": "Manpower Plan \u2014 record", "module": "M9", "section": "Attend", "archetype": "object", "entity": "ManpowerPlan", "flagship": false } }
  },
  {
    path: "leave-application-and-balance",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M9.9", "title": "Leave Application & Balance", "module": "M9", "section": "Leave", "archetype": "form", "entity": "LeaveApplication", "flagship": false } }
  },
  {
    path: "maternity-benefit",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.10", "title": "Maternity Benefit", "module": "M9", "section": "Leave", "archetype": "list", "entity": "MaternityBenefit", "flagship": false } }
  },
  {
    path: "maternity-benefit/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.10", "title": "Maternity Benefit \u2014 record", "module": "M9", "section": "Leave", "archetype": "object", "entity": "MaternityBenefit", "flagship": false } }
  },
  {
    path: "salary-structure",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.11", "title": "Salary Structure", "module": "M9", "section": "Pay", "archetype": "list", "entity": "SalaryStructure", "flagship": false } }
  },
  {
    path: "salary-structure/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.11", "title": "Salary Structure \u2014 record", "module": "M9", "section": "Pay", "archetype": "object", "entity": "SalaryStructure", "flagship": false } }
  },
  {
    path: "payroll-run",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M9.12", "title": "Payroll Run", "module": "M9", "section": "Pay", "archetype": "wizard", "entity": "PayrollRun", "flagship": true } }
  },
  {
    path: "salary-disbursement",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.13", "title": "Salary Disbursement", "module": "M9", "section": "Pay", "archetype": "list", "entity": "SalaryDisbursement", "flagship": false } }
  },
  {
    path: "salary-disbursement/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.13", "title": "Salary Disbursement \u2014 record", "module": "M9", "section": "Pay", "archetype": "object", "entity": "SalaryDisbursement", "flagship": false } }
  },
  {
    path: "festival-bonus",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.14", "title": "Festival Bonus", "module": "M9", "section": "Pay", "archetype": "list", "entity": "FestivalBonus", "flagship": false } }
  },
  {
    path: "festival-bonus/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.14", "title": "Festival Bonus \u2014 record", "module": "M9", "section": "Pay", "archetype": "object", "entity": "FestivalBonus", "flagship": false } }
  },
  {
    path: "provident-fund",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.15", "title": "Provident Fund", "module": "M9", "section": "Pay", "archetype": "list", "entity": "ProvidentFund", "flagship": false } }
  },
  {
    path: "provident-fund/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.15", "title": "Provident Fund \u2014 record", "module": "M9", "section": "Pay", "archetype": "object", "entity": "ProvidentFund", "flagship": false } }
  },
  {
    path: "advance-and-recovery",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.16", "title": "Advance & Recovery", "module": "M9", "section": "Pay", "archetype": "list", "entity": "EmployeeAdvance", "flagship": false } }
  },
  {
    path: "advance-and-recovery/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.16", "title": "Advance & Recovery \u2014 record", "module": "M9", "section": "Pay", "archetype": "object", "entity": "EmployeeAdvance", "flagship": false } }
  },
  {
    path: "final-settlement",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M9.17", "title": "Final Settlement", "module": "M9", "section": "Pay", "archetype": "form", "entity": "FinalSettlement", "flagship": false } }
  },
  {
    path: "grievance-case",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M9.18", "title": "Grievance Case", "module": "M9", "section": "Welfare", "archetype": "form", "entity": "GrievanceCase", "flagship": false } }
  },
  {
    path: "disciplinary-action",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M9.19", "title": "Disciplinary Action", "module": "M9", "section": "Welfare", "archetype": "form", "entity": "DisciplinaryAction", "flagship": false } }
  },
  {
    path: "training-record",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.20", "title": "Training Record", "module": "M9", "section": "Welfare", "archetype": "list", "entity": "TrainingRecord", "flagship": false } }
  },
  {
    path: "training-record/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.20", "title": "Training Record \u2014 record", "module": "M9", "section": "Welfare", "archetype": "object", "entity": "TrainingRecord", "flagship": false } }
  },
  {
    path: "worker-skill-matrix",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M9.21", "title": "Worker Skill Matrix", "module": "M9", "section": "Welfare", "archetype": "board", "entity": "WorkerSkillMatrix", "flagship": true } }
  },
  {
    path: "worker-unit-transfer",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M9.22", "title": "Worker Unit Transfer", "module": "M9", "section": "Welfare", "archetype": "list", "entity": "WorkerUnitTransfer", "flagship": false } }
  },
  {
    path: "worker-unit-transfer/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M9.22", "title": "Worker Unit Transfer \u2014 record", "module": "M9", "section": "Welfare", "archetype": "object", "entity": "WorkerUnitTransfer", "flagship": false } }
  }
];
export {
  HR_ROUTES
};
//# debugId=0b807137-c5a9-5788-9b21-1849a21bf411
//# sourceMappingURL=chunk-6WVDQBLL.js.map
