const genForm = document.querySelector('#generator-form')
const genBtn = document.querySelector('#gen-btn')
const copyBtn = document.querySelector('#copy-btn')
const genContent = document.querySelector('#gen-content')


// default count calue is 5 & default option is 'paras
let count = 5
let option = 'paras'
let tempCount = 0
let tempOption = ''

// get user input count value
const getValues = () => {
    count = parseInt(genForm.gen_count.value)
    option = genForm.gen_options.value
    validateValues()

    let url = `https://baconipsum.com/api/?type=meat-and-filler&${option}=${count}&start-with-lorem=1`
    fetchContent(url)
}

//input text and option validate
const validateValues = () => {
    if(option === 'words'){
        [tempCount, tempOption] = [count,  option]
        [option, count] = ['paras', 100]

        if(tempCount > 2000){
            invalidInput()
            tempCount = 2000
            genForm.gen_count.value = '2000'
        } else if (tempCount < 1 || isNaN(tempCount)){
            invalidInput()
            tempCount = 5
            genForm.gen_count.value = '5'
        }
    } else {
        tempCount = ''
        //paragafos and sentences > 100 is not allowed
        if(count > 100){
            invalidInput()
            count = 100
            genForm.gen_count.value = '100'
        } else if (count < 1 || isNaN(count)){
            invalidInput()
            count = 5
            genForm.gen_count.value = '5'
        }
    }
}

const invalidInput = () => {
    genForm.gen_count.style.borderColor = '#ff6a67'
    setTimeout(() => {
        genForm.gen_count.style.borderColor = "#d3dbe4"
    }, 1000)
}

const fetchContent = async url => {
    let res = await fetch(url)
    if(res.status === 200){
        let data = await res.json()
        displayGenContent(data)
    } else {
        alert('Error Occurred')
    }
}

const displayGenContent = data => {
    let texts = ''
    if(tempOption === 'words'){
        tempOption = ''
        texts = data.join()

        if(tempCount <= texts.length){
            let textArray = texts.split(' ')
            let selectedText = textArray.splice(0, tempCount).join(' ')
            genContent.innerHTML = selectedText + '.'
            return
        }
    } else {
        texts = data.join("<br><br>")
        genContent.innerHTML = texts
    }
}

const copyToClipboard= () => {
    let copytext = genContent.textContent
    navigator.clipboard.writeText(copytext)
}

genBtn.addEventListener('click', getValues)
window.addEventListener('DOMContentLoaded', getValues)
copyBtn.addEventListener('click', copyToClipboard)

