const bill = document.querySelector("#kwota")
const person = document.querySelector("#persons")
const tips = document.querySelector("#tip")
const btn = document.querySelector(".count")
const err = document.querySelector(".error")
const showInfo = document.querySelector(".show")
const coins = document.querySelector(".money")

const countAmount = () => {
    if (bill.value === "" || person.value === "" || tips.value === "0") {
        err.style.display = 'block'
        showInfo.style.display = 'none'
    }
    else {
        err.style.display = "none"
        calc()
    }
}
function calc() {
    const totBill = parseFloat(bill.value)
    const totPers = parseInt(person.value)
    const chooseTip = parseFloat(tips.value)
    const tip = (totBill+(totBill*chooseTip))/totPers
    coins.textContent = tip.toFixed(2)
    showInfo.style.display = 'block'
}

btn.addEventListener("click",countAmount)
