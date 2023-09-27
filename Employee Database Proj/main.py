class Employee:

    num_of_emps = 0
    emp_lastnames = []

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'

        Employee.num_of_emps += 1
        Employee.emp_lastnames.append(self.last)

    def fullname(self):
        return '{} {}'.format(self.first, self.last)


def create_employee():  # function to create a new employee. The new employee has to be added to a list of employees though
    new_emp = Employee(input('First name: '), input('Last name: '), int(input('Pay: ')))
    return new_emp.last


while True:
    print(Employee.emp_lastnames)
    print(Employee.num_of_emps)
    _input = input('Create new employee? y/n: ')
    if _input == 'y':
        create_employee()
    else:
        break


print(Employee.emp_lastnames)
print(create_employee())
print(Employee.emp_lastnames)
