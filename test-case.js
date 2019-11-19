const usersData = document.getElementById('table')

let users = []

const getUsersData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    users = await response.json();
    console.log(users)




    users.forEach(element => {
        const allButton = document.createElement('button')
        allButton.id = 'all'
        allButton.innerHTML = 'all'



        const newUser = document.createElement('td')
        const newRow = document.createElement('tr')
        newUser.appendChild(document.createTextNode(element.name))
        newUser.appendChild(allButton)
        newRow.appendChild(newUser)

        const allUl = document.createElement('ul')
        allUl.style.display = 'none'

        for (let i in element) {
            const liEl = document.createElement('li')
            liEl.appendChild(document.createTextNode(i + ": "))
            liEl.appendChild(document.createTextNode(element[i]))
            allUl.appendChild(liEl)
            newUser.appendChild(allUl)
        }

        const showAll = () => {
            if (allButton.innerHTML === 'all') {
                allUl.style.display = 'block'
                allButton.innerHTML = 'hide'
            }
            else {
                allUl.style.display = 'none'
                allButton.innerHTML = 'all'
            }
        }



        allButton.onclick = showAll

        const userName = document.createElement('td')
        userName.appendChild(document.createTextNode(element.username))
        newRow.appendChild(userName)

        const userEmail = document.createElement('td')
        userEmail.appendChild(document.createTextNode(element.email))
        newRow.appendChild(userEmail)

        const userWebsite = document.createElement('td')
        userWebsite.appendChild(document.createTextNode(element.website))
        newRow.appendChild(userWebsite)

        usersData.appendChild(newRow)

    })

}





console.log(users)
getUsersData()


