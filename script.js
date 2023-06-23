const employee = {
    name: "Jax",
    id : 8967,
    hireDate: 23, 
    hireMonth: "Aug",
    hireYear: 2001,
    email: "jax@company.com",
    department: "Innovation",
    skills: [
       "UX",
       "Prototyping",
       "Research",
       "Documentaion" 
    ],
    address: {
        street: "123 street",
        city: "Merlot",

    },
    selfIntro: function() {
        const introTemp = `Hi, I am ${this.name}, I started working in ${this.department} since ${this.hireDate}, ${this.hireMonth}, ${this.hireYear}`

        return introTemp
    }
}

const empSection = document.getElementById("employee") 
empSection.insertAdjacentHTML("afterbegin", `<h2>welcome ${employee.name}!</h2>`)


//Changes the value of the department key in the employee object
employee.department = "Innovation and Research"

const empInfo = `
    <dl> 
        <dt>ID</dt>
        <dd>${employee.id}</dt>

        <dt>Department</dt>
        <dd>${employee.department}</dt>

        <dt>Year Hired</dt>
        <dd>${employee.hireYear}</dt>

        <dt>Email</dt>
        <dd>${employee.email}</dt>
    </dl>
`
empSection.insertAdjacentHTML("beforeend", empInfo)

const empSkills = employee.skills.join(" | ")
empSection.insertAdjacentHTML("beforeend", `<p>Jax is skilled in: ${empSkills}</p>`)

employee.pronouns = "They/them"
empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} uses pronouns: ${employee.pronouns}</p>`)

empSection.insertAdjacentHTML("beforeend", `<p>Address: ${employee.address.street}, ${employee.address.city}</p>`)


empSection.insertAdjacentHTML("beforeend", employee.selfIntro())

console.log(object.keys(employee))
console.log(object.values(employee))
console.log(object.entries(employee))

