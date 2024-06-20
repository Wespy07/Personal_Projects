const allCheckBoxes = document.querySelectorAll('.check-box')
const allInputBoxes = document.querySelectorAll('.input-element')
const errorLabel = document.querySelector('.path')
const tracker = document.querySelector('.tracker')
const myMoti = document.querySelector('.user-motivation')

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    first: {
        name: '',
        check: false
    },
    second: {
        name: '',
        check: false
    },
    third: {
        name: '',
        check: false
    }
}

const userMotivation2 = [
    "Gaadi start kar Chintu. Aaj kuch toofani karna hai",
    "Shuruat toh hogyi, pr picture abhi baaki hai mere dost",
    "Do toh hogye, bas ek aur ab. Re sultan karde chadhayi",
    "Bete, moj kardi. Dekh Binod, yeh hoti hai mehnat!"
]

let countOfCompletedGoals = Object.values(allGoals).filter((goal) => goal.check).length
tracker.style.width = `${countOfCompletedGoals / 3 * 100}%`
tracker.firstElementChild.innerHTML = `${countOfCompletedGoals}/3 completed.`
myMoti.innerText = userMotivation2[countOfCompletedGoals]

allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        const allGoalsFilled = [...allInputBoxes].every((input) => {
            return input.value
        })
        if (allGoalsFilled) {
            checkbox.parentElement.classList.toggle('check')
            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].check = !allGoals[inputId].check;
            countOfCompletedGoals = Object.values(allGoals).filter((goal) => goal.check).length
            tracker.style.width = `${countOfCompletedGoals / 3 * 100}%`
            tracker.firstElementChild.innerHTML = `${countOfCompletedGoals}/3 completed.`
            myMoti.innerText = userMotivation2[countOfCompletedGoals]
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
        } else {
            errorLabel.classList.add('show-error')
        }
    })
})


allInputBoxes.forEach((input) => {
    input.value = allGoals[input.id].name


    if (allGoals[input.id].check) {
        input.parentElement.classList.add('check')
    }

    input.addEventListener('focus', () => {
        errorLabel.classList.remove('show-error')
    })

    input.addEventListener('input', (e) => {
        if (allGoals[input.id].check) {
            input.value = allGoals[input.id].name
            return
        }


        allGoals[e.target.id] = {
            name: e.target.value,
            check: false
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})