const initialEmployee = () => {
  var employee = {};
  employee.name = "";
  employee.cell = "";
  employee.days = [];
  var i;
  for (i = 0; i < 7; i++) {
    var day = {};
    day.available = true;
    day.shifts = new Array(3).fill(true);
    employee.days.push(day);
  }
  return employee;
};
export default initialEmployee;
