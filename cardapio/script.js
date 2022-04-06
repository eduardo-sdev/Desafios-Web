class Menu { 
    constructor() { 
        this.id = 1
        this.arrayMenu = []
        this.editId = null
    }

    // save food
    save() { 
        let food = this.readData()

        // valitade haver content
        if(this.valitadeFields(food)) {
            if(this.editId == null) {
                this.add(food)
            } else {
                this.update(this.editId, food)
            }
        }

        this.listTable()
        this.cansel()
    }

    listTable() {
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ''

        for (let index in this.arrayMenu) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nameFood = tr.insertCell()
            let td_price = tr.insertCell()
            let td_actions = tr.insertCell()


            td_id.innerHTML = this.arrayMenu[index].id
            td_nameFood.innerHTML = this.arrayMenu[index].nameFood
            td_price.innerHTML = this.arrayMenu[index].price

            td_id.classList.add('center')
            td_actions.classList.add('center')

            const imgDelete = document.createElement('img')
            imgDelete.src = 'https://cdn-icons-png.flaticon.com/512/3481/3481306.png'
            imgDelete.setAttribute('onclick',`menu.delete(${JSON.stringify(this.arrayMenu[index].id)})`)

            const imgEdit = document.createElement("img")
            imgEdit.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'
            imgEdit.setAttribute('onclick',`menu.editFood(${JSON.stringify(this.arrayMenu[index])})`)

            td_actions.appendChild(imgEdit)
            td_actions.appendChild(imgDelete)
        }
    }

    update(id, food) {
        for (let index in this.arrayMenu) {
            if(this.arrayMenu[index].id === id) {
                this.arrayMenu[index].nameFood = food.nameFood
                this.arrayMenu[index].price = food.price
            }
        }
    }

    add(food) {
        food.price = parseFloat(food.price)
        this.arrayMenu.push(food)
        this.id++
    }

    editFood(data) {
        this.editId = data.id
        document.querySelector('#food').value = data.nameFood
        document.querySelector('#price').value = data.price

        document.querySelector('#btn1').innerText = 'Atualizar'
    }

    // read value food
    readData() {
        let food = {}

        // get data in form
        food.id = this.id
        food.nameFood = document.querySelector('#food').value
        food.price = document.querySelector('#price').value

        return food

    }

    valitadeFields(food) {
        let msg = ''

        if(food.nameFood === '') {
            msg += ' Informe o Nome da comida \n'
        }

        if(food.price === '') {
            msg += ' Informe o Preço da comida \n'
        }

        if(msg !== '') {
            alert(msg)
            return false
        }

        return true
    }

    // cansel clear campos
    cansel() {
        document.querySelector('#food').value = ''
        document.querySelector('#price').value = ''

        document.querySelector('#btn1').innerText = 'Salvar'
        this.editId = null
    }

    delete(id) {

        if(confirm(`Deletar o produto do ID ${id}`)){
            let tbody = document.querySelector('#tbody')

            for (let index in this.arrayMenu) {
                if(this.arrayMenu[index].id === id){
                    this.arrayMenu.splice(index, 1)

                    tbody.deleteRow(index)
                }
            }
        }
    }
}

const menu = new Menu()

