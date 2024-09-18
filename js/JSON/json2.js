export function json2() {
    const employees = [
        {
            personal_info: {
                full_name: "Иванов Иван Иванович",
                date_of_birth: "1985-07-15",
                gender: "male",
                place_of_birth: "Москва, Россия",
                contacts: {
                    mobile_phone: "+7 912 345 67 89",
                    home_phone: "+7 495 123 45 67",
                    email: "ivanov@example.com",
                    address: "ул. Пушкина, д. 15, кв. 12, Москва, Россия"
                }
            },
            work_info: {
                position: "Разработчик",
                department: "ИТ",
                start_date: "2020-01-10",
                salary: 120000,
                experience_years: 10
            },
            identification: {
                idnp: "1234567890123"
            }
        },
        {
            personal_info: {
                full_name: "Петров Петр Петрович",
                date_of_birth: "1990-04-12",
                gender: "male",
                place_of_birth: "Санкт-Петербург, Россия",
                contacts: {
                    mobile_phone: "+7 913 345 67 89",
                    home_phone: "+7 496 123 45 67",
                    email: "petrov@example.com",
                    address: "ул. Ленина, д. 25, кв. 1, Санкт-Петербург, Россия"
                }
            },
            work_info: {
                position: "Тестировщик",
                department: "ИТ",
                start_date: "2019-03-05",
                salary: 90000,
                experience_years: 5
            },
            identification: {
                idnp: "1234567890456"
            }
        }
    ];
    const employeeList = document.querySelector(".employee_list");

    function displayEmployees() {
        employeeList.innerHTML = employees.map(employee => `
            <div class="employee">
              <h3>${employee.personal_info.full_name}</h3>
              <hr>
              <p>Должность: ${employee.work_info.position}</p>
              <p>Зарплата: ${employee.work_info.salary} руб.</p>
            </div>
    `).join('');
    }

    displayEmployees();


    const salaryInfo = document.querySelector(".salary_info");

    function showSalaryInfo() {
        const salaries = employees.map(emp => emp.work_info.salary);
        console.log(salaries);
        const totalSalary = salaries.reduce((acc, sum) => acc + sum);
        console.log(totalSalary);
        const averageSalary = totalSalary / salaries.length;
        console.log(averageSalary);
        const max = Math.max(...salaries);
        const min = Math.min(...salaries);
        console.log(min, max);

        salaryInfo.innerHTML = `
            <p>Average salary: ${averageSalary}</p>
            <p>Min salary: ${min}</p>
            <p>Max salary: ${max}</p>
            <p>Total salary: ${totalSalary}</p>
        `
    }

    showSalaryInfo();

}
