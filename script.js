let msg1 = document.getElementById('message1')
let msg2 = document.getElementById('message2')
let msg3 = document.getElementById('message3')
let msg4 = document.getElementById('score')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let user_guesses

let answer
let no_of_guesses = 0
let your_score = 0
let guessed_nums = []
let user_name

//Creating 4 digit number without duplicate
function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

//For Guessing functionality
function play () {
  user_guesses = document.getElementById('guess').value

  if (user_guesses < 1000 || user_guesses > 9999) {
    alert('Please Enter a number between 1000 and 9999')
  } else {
    //Compare two arrays----
    arr1 = answer.split('')
    arr2 = user_guesses.split('')
    let newArr = []
    for (let i = 0; i < arr2.length; i++) {
      val = arr1.includes(arr2[i])
      if (val) {
        res1 = arr1.indexOf(arr2[i])
        res2 = arr1.indexOf(arr1[i])
        let check = res1 === res2
        if (check) {
          newArr.push('+')
        } else {
          newArr.push('-')
        }
      } else {
        newArr.push('*')
      }
    }
    let comparingValue = newArr.join('')
    //------------------------

    guessed_nums.push(user_guesses)
    no_of_guesses += 1

    if (user_guesses < answer) {
      msg1.textContent = 'Your guess is too low... Value is ' + [comparingValue]
      msg1.style.color = 'blue'
      msg2.textContent = 'No. of Guesses : ' + no_of_guesses
      msg3.textContent = 'Guessed Numbers are : ' + guessed_nums
    } else if (user_guesses > answer) {
      msg1.textContent =
        'Your guess is too high... Value is ' + [comparingValue]
      msg1.style.color = 'red'
      msg2.textContent = 'No. of Guesses : ' + no_of_guesses
      msg3.textContent = 'Guessed Numbers are : ' + guessed_nums
    } else if (user_guesses == answer) {
      document.getElementById('guess').value = ''
      if (no_of_guesses < 5) {
        your_score += 20
      } else if (no_of_guesses > 10) {
        your_score += 2
      } else if (no_of_guesses > 5) {
        your_score += 10
      }
      msg1.textContent = 'WoW ! You win... Value is ' + [comparingValue]
      msg1.style.color = 'green'
      msg2.textContent = 'The Number Was : ' + answer
      msg2.style.color = '#c6426e'
      msg3.textContent = 'You guessed it in ' + no_of_guesses + ' guesses.'
      msg3.style.color = '#642b73'
      localStorage.setItem('MY_SCORE', your_score)
      msg4.textContent = 'Hi! ' + user_name + ' Your Score is : ' + your_score
      // localStorage.getItem('MY_SCORE')
      msg4.style.color = 'green'

      if (your_score != '') {
        answer = shuffleArray(numbers).slice(0, 4).join('') // You can check it with console
        console.log(answer)
        guessed_nums.length = 0
        no_of_guesses = 0
      }
    }
  }
}

//Restart Functionality
function restart () {
  window.location.reload()
  localStorage.clear('SCORE')
}

//New game Functionality
function newGame () {
  user_name = prompt('Enter your Name')
  user_name = user_name.toLocaleUpperCase()
  msg4.textContent = 'Hi! ' + user_name + ' Your Score is : ' + your_score
  answer = shuffleArray(numbers).slice(0, 4).join('') // You can check it with console
  console.log(answer)
}
