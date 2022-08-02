function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}
const characterData = {
     hero: {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/charlesdeluvio-pOUA8Xay514-unsplash.jpg",
    health: "60",
    diceCount: 3
},
monster:{
    elementId: "monster",
    name: "Orc",
    avatar: "images/cdd20-ps_X-0oG2Lg-unsplash.jpg",
    health: "10",
    diceCount: 1
}}
function Character( data ) {
    Object.assign( this, data )
    this.getDiceHtml=function(dice) {
        return getDiceRollArray(dice).map(element => (`<div class="dice">${element}</div>`)).join("")
    }
    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this
        const diceHtml = this.getDiceHtml(diceCount)
       
        return (
    `
        <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">Health: <b> ${health} </b></p>
        <div class="dice-container">
        ${diceHtml}
        </div>
        </div> 
         `
        )
    }
}
const wizard = new Character( characterData.monster )
const Orc = new Character( characterData.hero )
function render() {
    document.getElementById( wizard.elementId ).innerHTML = wizard.getCharacterHtml()
    document.getElementById( Orc.elementId ).innerHTML = Orc.getCharacterHtml()
}
render()