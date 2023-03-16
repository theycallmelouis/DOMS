const body = document.body 

body.append("hello world, lol")

const div = document.createElement("div")

const strong = document.createElement("strong")
strong.innerText = "Hello World again"
div.append(strong) //we created the strong element for bold, user innerText to write intbetween <strong></strong> and then appended it to post it ki believe

//div.innerText = "Hello World" //only difference between innertext and innercontent is innertext just posts the text next to eachother
//div.textContent =  "Hello World 2"  //inner content posts the text how its typed in index.html
//div.innerHTML = "<strong>Hello World</strong>" //inner html to use words such as <strong> to make bold

body.append(div)





