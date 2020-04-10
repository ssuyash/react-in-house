//array => list of items (can be different data types)








let students = ["Saloni", "Anamika", "Sugam"]



//Retrieve
//console.log(students[0])

//Update
students[2] = "Suyash"

//insert 

//at the end
students.push("sugam")

//at the begining
students.unshift("Sourabh")

//remove
//from the end of the array
let deleted = students.pop()

//from the begining of the array
let startingDeleted = students.shift()
console.log(startingDeleted)




// from any specific position


//used to delete or insert or both at any specific index
//students.splice(startIndex, deleteCount, ...itemsToInsert)
students.splice(1, 2, "Sugam", "Sourabh")

//it reverses the array
students.reverse()


//It slices the array
//students.slice(startIndex, uptoIndex)
students = ["Saloni", "Anamika", "Sugam", "Suyash", "Sourabh", "Sugam"]
let newArr = students.slice(0, 3)



//It returns the index of the searched item if item exists in the array else returns -1
let ind = students.indexOf("Sugam")
console.log(ind)



//It returns the last index of the searched item if item exists in the array else returns -1
let lastind = students.lastIndexOf("Sugam")
console.log(lastind)

//return the number of items available in the array
let numOfItems = students.length
console.log(numOfItems)



//looping through array
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}


//for of => iterables
for (let item of students) {
    console.log(item)
}


//forEach
students.forEach(e => {
    console.log(e)
})





//map
let newArrr = students.map(e => {
    return e.toLocaleUpperCase()
})
let nums = [21, 5, 17, 30]
let sqrs = nums.map(e => e * e)




//filter
let ages = [21, 50, 18, 30, 5, 17, 20, 9]
let voters = ages.filter(e => e >= 18)


//reduce
let reduced = ages.reduce((el1, el2) => el1 + el2)
console.log(reduced)


//concat
let arr1 = ["Suyash", "Saloni"]
let arr2 = ["Anamika", "Sugam"]

let concatedArr = arr1.concat(arr2)



console.log(concatedArr)


//Array to String  => join()
let joinedStr = arr1.join("&")
console.log(joinedStr)



//Check element is present in array or not
console.log(arr1.includes("Suyash", 1))


//is there any element which fullfills any condition
let anyVoterExist = ages.some(e => e >= 18)
console.log(anyVoterExist)


// element which fullfills any condition
let allAreVoters = ages.every(e => e >= 18)
console.log(allAreVoters)



//fill the existing value with any specific new value
//ages.fill(0) => it will fill all values with 0
//ages.fill(0, 1, 4) //=> it wil fill only 1 to 3 index with value 0
//console.log(ages)


ages.sort((el1, el2) => {
    // if (el1 > el2) {
    //     return 1
    // } else if (el1 < el2) {
    //     return -1
    // } else {
    //     return 0
    // }

    return el2 - el1

})
console.log(ages)





let citizens = [
    {
        "name": "Neve Madden",
        "age": 89,
        "city": "Sellano"
    },
    {
        "name": "Yoshio Orr",
        "age": 25,
        "city": "San Pietro al Tanagro"
    },
    {
        "name": "Aaron Morrow",
        "age": 7,
        "city": "Appels"
    },
    {
        "name": "Jaden Bolton",
        "age": 35,
        "city": "Itter"
    },
    {
        "name": "Galena Jackson",
        "age": 24,
        "city": "Penrith"
    },
    {
        "name": "Lila Cabrera",
        "age": 13,
        "city": "Deline"
    },
    {
        "name": "Herman Berry",
        "age": 35,
        "city": "Schönebeck"
    },
    {
        "name": "Duncan Levine",
        "age": 52,
        "city": "Mülheim"
    },
    {
        "name": "Theodore Vinson",
        "age": 15,
        "city": "Saguenay"
    },
    {
        "name": "Griffith Norton",
        "age": 28,
        "city": "Glimes"
    },
    {
        "name": "Cody York",
        "age": 21,
        "city": "Memphis"
    },
    {
        "name": "Clare Silva",
        "age": 39,
        "city": "Ophain-Bois-Seigneur-Isaac"
    },
    {
        "name": "Matthew Berry",
        "age": 44,
        "city": "San Francisco"
    },
    {
        "name": "Freya England",
        "age": 6,
        "city": "Thorembais-les-BŽguines"
    },
    {
        "name": "Jelani Sherman",
        "age": 24,
        "city": "Chanco"
    },
    {
        "name": "Larissa Sharp",
        "age": 45,
        "city": "Lodelinsart"
    },
    {
        "name": "Savannah Coleman",
        "age": 59,
        "city": "Villa Alegre"
    },
    {
        "name": "Kenneth Osborne",
        "age": 94,
        "city": "Ribeirão Preto"
    },
    {
        "name": "Eagan Lancaster",
        "age": 81,
        "city": "Donk"
    },
    {
        "name": "Beverly Brown",
        "age": 5,
        "city": "Romano d'Ezzelino"
    },
    {
        "name": "Sloane Maxwell",
        "age": 88,
        "city": "Montacuto"
    },
    {
        "name": "Maisie Velez",
        "age": 24,
        "city": "Pieve di Cadore"
    },
    {
        "name": "Vladimir Herrera",
        "age": 70,
        "city": "Retford"
    },
    {
        "name": "Ursula Wade",
        "age": 80,
        "city": "Oberpullendorf"
    },
    {
        "name": "Odette Mcdowell",
        "age": 75,
        "city": "Villers-la-Tour"
    },
    {
        "name": "Winifred Mcleod",
        "age": 27,
        "city": "Denderwindeke"
    },
    {
        "name": "Bree Kim",
        "age": 30,
        "city": "Stroud"
    },
    {
        "name": "Maggie Day",
        "age": 38,
        "city": "Vrasene"
    },
    {
        "name": "Holly Franks",
        "age": 54,
        "city": "Airdrie"
    },
    {
        "name": "Sean Newton",
        "age": 19,
        "city": "Columbia"
    },
    {
        "name": "Kasper Jordan",
        "age": 39,
        "city": "Sellia Marina"
    },
    {
        "name": "Chadwick Carson",
        "age": 36,
        "city": "Petit-Thier"
    },
    {
        "name": "Jacqueline Jones",
        "age": 22,
        "city": "Town of Yarmouth"
    },
    {
        "name": "Iola Moreno",
        "age": 56,
        "city": "Gagliato"
    },
    {
        "name": "Molly Rodgers",
        "age": 70,
        "city": "Boorsem"
    },
    {
        "name": "Emily Merritt",
        "age": 11,
        "city": "Orsogna"
    },
    {
        "name": "Perry Roman",
        "age": 37,
        "city": "Springfield"
    },
    {
        "name": "Courtney Gomez",
        "age": 51,
        "city": "Pocatello"
    },
    {
        "name": "Wang Booth",
        "age": 85,
        "city": "Le Petit-Quevilly"
    },
    {
        "name": "Alice Munoz",
        "age": 48,
        "city": "Tolentino"
    },
    {
        "name": "Colt Moses",
        "age": 31,
        "city": "Pike Creek"
    },
    {
        "name": "Vance Hale",
        "age": 34,
        "city": "Kanchrapara"
    },
    {
        "name": "Fulton Jordan",
        "age": 74,
        "city": "Chastre"
    },
    {
        "name": "Brielle Wells",
        "age": 59,
        "city": "Deutschkreutz"
    },
    {
        "name": "Kirby Fuentes",
        "age": 58,
        "city": "María Elena"
    },
    {
        "name": "Addison Guy",
        "age": 99,
        "city": "Chimbarongo"
    },
    {
        "name": "Gray Ellis",
        "age": 80,
        "city": "Icheon"
    },
    {
        "name": "Gabriel Cox",
        "age": 83,
        "city": "Nowshera"
    },
    {
        "name": "Trevor Franklin",
        "age": 40,
        "city": "Te Awamutu"
    },
    {
        "name": "Nadine Burris",
        "age": 53,
        "city": "Cornwall"
    },
    {
        "name": "Abdul Monroe",
        "age": 89,
        "city": "Ramillies"
    },
    {
        "name": "Josephine Gutierrez",
        "age": 27,
        "city": "Rionegro"
    },
    {
        "name": "Meredith Bryant",
        "age": 33,
        "city": "Mignanego"
    },
    {
        "name": "Marshall Irwin",
        "age": 22,
        "city": "Lutsel K'e"
    },
    {
        "name": "Gareth Short",
        "age": 46,
        "city": "Pyeongtaek"
    },
    {
        "name": "Haley Garza",
        "age": 25,
        "city": "Mönchengladbach"
    },
    {
        "name": "Reagan Holman",
        "age": 16,
        "city": "Pagazzano"
    },
    {
        "name": "Damon Logan",
        "age": 32,
        "city": "Fredericton"
    },
    {
        "name": "Callum Roth",
        "age": 38,
        "city": "Vanier"
    },
    {
        "name": "Sean Buck",
        "age": 65,
        "city": "Pedro Aguirre Cerda"
    },
    {
        "name": "Martin Frost",
        "age": 91,
        "city": "Harderwijk"
    },
    {
        "name": "Maggie Randall",
        "age": 8,
        "city": "Montpelier"
    },
    {
        "name": "Timon Mullins",
        "age": 99,
        "city": "Clearwater Municipal District"
    },
    {
        "name": "Hoyt Hoffman",
        "age": 7,
        "city": "Gondiya"
    },
    {
        "name": "Benedict Stanley",
        "age": 6,
        "city": "Bouge"
    },
    {
        "name": "Alfonso Macias",
        "age": 41,
        "city": "Torrevieja"
    },
    {
        "name": "Ariel James",
        "age": 68,
        "city": "Barcelona"
    },
    {
        "name": "Celeste Mccullough",
        "age": 55,
        "city": "Zamość"
    },
    {
        "name": "Neil Conrad",
        "age": 94,
        "city": "Lambusart"
    },
    {
        "name": "Sarah Bonner",
        "age": 90,
        "city": "Tiruvannamalai"
    },
    {
        "name": "Evangeline Beasley",
        "age": 26,
        "city": "Valkenburg aan de Geul"
    },
    {
        "name": "Quinlan Wood",
        "age": 26,
        "city": "Baie-Saint-Paul"
    },
    {
        "name": "Lareina Owens",
        "age": 43,
        "city": "Zoerle-Parwijs"
    },
    {
        "name": "Rina Gregory",
        "age": 30,
        "city": "Cisterna di Latina"
    },
    {
        "name": "Chaney Sanford",
        "age": 56,
        "city": "Brighton"
    },
    {
        "name": "Rinah Bird",
        "age": 59,
        "city": "Siracusa"
    },
    {
        "name": "Micah Church",
        "age": 85,
        "city": "Carleton"
    },
    {
        "name": "Melinda Noel",
        "age": 20,
        "city": "Merdorp"
    },
    {
        "name": "Tana Newman",
        "age": 39,
        "city": "Kelowna"
    },
    {
        "name": "Audrey Moreno",
        "age": 65,
        "city": "Durness"
    },
    {
        "name": "Reece Harrison",
        "age": 44,
        "city": "Pachuca"
    },
    {
        "name": "Brendan Avila",
        "age": 12,
        "city": "Wolfurt"
    },
    {
        "name": "Craig Fernandez",
        "age": 45,
        "city": "Ife"
    },
    {
        "name": "Blake Burns",
        "age": 88,
        "city": "North Vancouver"
    },
    {
        "name": "Wesley Daniels",
        "age": 25,
        "city": "Puqueldón"
    },
    {
        "name": "Ira Sears",
        "age": 93,
        "city": "Laives/Leifers"
    },
    {
        "name": "Alika Sellers",
        "age": 35,
        "city": "Modena"
    },
    {
        "name": "Belle Wright",
        "age": 61,
        "city": "Landshut"
    },
    {
        "name": "Plato Sexton",
        "age": 78,
        "city": "Valtournenche"
    },
    {
        "name": "Rhona Galloway",
        "age": 6,
        "city": "Shimoga"
    },
    {
        "name": "Clarke Perez",
        "age": 59,
        "city": "São Gonçalo"
    },
    {
        "name": "Armand Kirk",
        "age": 50,
        "city": "Rotello"
    },
    {
        "name": "Miranda Alexander",
        "age": 91,
        "city": "Chillán Viejo"
    },
    {
        "name": "Melissa Blevins",
        "age": 49,
        "city": "Shaftesbury"
    },
    {
        "name": "Athena Weiss",
        "age": 93,
        "city": "Palmariggi"
    },
    {
        "name": "Amity Hale",
        "age": 48,
        "city": "Groenlo"
    },
    {
        "name": "September Powers",
        "age": 22,
        "city": "Macon"
    },
    {
        "name": "Nadine Cook",
        "age": 43,
        "city": "Oxford County"
    },
    {
        "name": "Ebony Peters",
        "age": 25,
        "city": "Ansfelden"
    },
    {
        "name": "Jared Mcdowell",
        "age": 22,
        "city": "Chekhov"
    },
    {
        "name": "Suki Allen",
        "age": 26,
        "city": "Groß-Gerau"
    },
    {
        "name": "Darryl Jimenez",
        "age": 85,
        "city": "Masullas"
    },
    {
        "name": "Victor Estes",
        "age": 77,
        "city": "Betim"
    },
    {
        "name": "Gretchen Ward",
        "age": 20,
        "city": "Newport"
    },
    {
        "name": "Graham Griffin",
        "age": 58,
        "city": "Ruoti"
    },
    {
        "name": "Hadassah Lewis",
        "age": 53,
        "city": "Sivry-Rance"
    },
    {
        "name": "Geoffrey Luna",
        "age": 54,
        "city": "Bharatpur"
    },
    {
        "name": "Vladimir Owen",
        "age": 10,
        "city": "Gaithersburg"
    },
    {
        "name": "Leandra Horn",
        "age": 45,
        "city": "Bala"
    },
    {
        "name": "Cairo Garrison",
        "age": 12,
        "city": "Nanton"
    },
    {
        "name": "Ross Curtis",
        "age": 41,
        "city": "Sant'Agata sul Santerno"
    },
    {
        "name": "Anthony Hardin",
        "age": 77,
        "city": "Calle Blancos"
    },
    {
        "name": "Chancellor Holman",
        "age": 91,
        "city": "Otricoli"
    },
    {
        "name": "Roth Rice",
        "age": 22,
        "city": "Anderlues"
    },
    {
        "name": "Stella Hopkins",
        "age": 66,
        "city": "Valdivia"
    },
    {
        "name": "Clementine Steele",
        "age": 13,
        "city": "Cereté"
    },
    {
        "name": "Robin Baldwin",
        "age": 97,
        "city": "Poppel"
    },
    {
        "name": "Ross Pierce",
        "age": 72,
        "city": "Märsta"
    },
    {
        "name": "Chava Valentine",
        "age": 87,
        "city": "Kirriemuir"
    },
    {
        "name": "Lacota Ratliff",
        "age": 7,
        "city": "Krasnozavodsk"
    },
    {
        "name": "Destiny Matthews",
        "age": 29,
        "city": "Orito"
    },
    {
        "name": "Chava Hopkins",
        "age": 76,
        "city": "Salcito"
    },
    {
        "name": "Victor Campos",
        "age": 48,
        "city": "Zolder"
    },
    {
        "name": "Selma Stevens",
        "age": 13,
        "city": "Leduc"
    },
    {
        "name": "Axel Winters",
        "age": 13,
        "city": "Annapolis"
    },
    {
        "name": "Jelani Walls",
        "age": 14,
        "city": "Poggiorsini"
    },
    {
        "name": "Seth Curtis",
        "age": 31,
        "city": "White Rock"
    },
    {
        "name": "Lucas Yates",
        "age": 92,
        "city": "Neeroeteren"
    },
    {
        "name": "Avram Bauer",
        "age": 48,
        "city": "Sohbatpur"
    },
    {
        "name": "Grant Carter",
        "age": 46,
        "city": "Richmond Hill"
    },
    {
        "name": "Naomi Tran",
        "age": 92,
        "city": "Erli"
    },
    {
        "name": "Marshall Reeves",
        "age": 40,
        "city": "Naro"
    },
    {
        "name": "Colorado Sharp",
        "age": 84,
        "city": "Loughborough"
    },
    {
        "name": "Harlan Newton",
        "age": 58,
        "city": "Fort Smith"
    },
    {
        "name": "Kadeem Sargent",
        "age": 29,
        "city": "Calle Larga"
    },
    {
        "name": "Kieran Farmer",
        "age": 9,
        "city": "Lehri"
    },
    {
        "name": "Walter Hogan",
        "age": 99,
        "city": "Mjölby"
    },
    {
        "name": "Margaret Whitehead",
        "age": 12,
        "city": "Aisemont"
    },
    {
        "name": "Camden Farrell",
        "age": 59,
        "city": "Mglin"
    },
    {
        "name": "Scott Huff",
        "age": 28,
        "city": "Ferrazzano"
    },
    {
        "name": "Hu Potter",
        "age": 30,
        "city": "Villamassargia"
    },
    {
        "name": "Sierra Chaney",
        "age": 45,
        "city": "Burlington"
    },
    {
        "name": "Ila Porter",
        "age": 98,
        "city": "Neufeld an der Leitha"
    },
    {
        "name": "Tanisha Lynn",
        "age": 21,
        "city": "Jaén"
    },
    {
        "name": "Carol Ware",
        "age": 60,
        "city": "Warspite"
    },
    {
        "name": "Adena Pearson",
        "age": 39,
        "city": "Boignee"
    },
    {
        "name": "Warren Knapp",
        "age": 80,
        "city": "Cambridge"
    },
    {
        "name": "Rosalyn Valenzuela",
        "age": 24,
        "city": "Amritsar"
    },
    {
        "name": "Felix Steele",
        "age": 19,
        "city": "Madrid"
    },
    {
        "name": "Herman Hickman",
        "age": 54,
        "city": "Oklahoma City"
    },
    {
        "name": "Hadley Whitney",
        "age": 7,
        "city": "Bonvicino"
    },
    {
        "name": "Todd Irwin",
        "age": 13,
        "city": "Lauterach"
    },
    {
        "name": "Mallory Nixon",
        "age": 66,
        "city": "Jasper"
    },
    {
        "name": "Susan Richardson",
        "age": 90,
        "city": "WagnelŽe"
    },
    {
        "name": "Dustin Hoffman",
        "age": 86,
        "city": "Oderzo"
    },
    {
        "name": "Hollee Collier",
        "age": 61,
        "city": "Rahimyar Khan"
    },
    {
        "name": "Silas White",
        "age": 89,
        "city": "Juazeiro"
    },
    {
        "name": "Zelda Carver",
        "age": 59,
        "city": "Fontanellato"
    },
    {
        "name": "Inez Hendricks",
        "age": 18,
        "city": "Olmen"
    },
    {
        "name": "Fatima Montgomery",
        "age": 92,
        "city": "Flushing"
    },
    {
        "name": "Arthur Mccarthy",
        "age": 41,
        "city": "Bagh"
    },
    {
        "name": "Ann Conrad",
        "age": 88,
        "city": "Maglie"
    },
    {
        "name": "Demetrius Holt",
        "age": 95,
        "city": "Paulatuk"
    },
    {
        "name": "Heidi Aguirre",
        "age": 20,
        "city": "Newport"
    },
    {
        "name": "Emily Bender",
        "age": 59,
        "city": "Montignoso"
    },
    {
        "name": "Dorothy Watson",
        "age": 68,
        "city": "Pointe-aux-Trembles"
    },
    {
        "name": "Kai Hansen",
        "age": 45,
        "city": "Collipulli"
    },
    {
        "name": "MacKensie Baird",
        "age": 44,
        "city": "Gongju"
    },
    {
        "name": "Elmo Stokes",
        "age": 23,
        "city": "Adrano"
    },
    {
        "name": "Wade Saunders",
        "age": 87,
        "city": "Fontenoille"
    },
    {
        "name": "Hilary Schmidt",
        "age": 62,
        "city": "Minatitlán"
    },
    {
        "name": "Kelly Salazar",
        "age": 81,
        "city": "Coldstream"
    },
    {
        "name": "Eugenia Duffy",
        "age": 77,
        "city": "Musakhel"
    },
    {
        "name": "William Ramos",
        "age": 94,
        "city": "Ichalkaranji"
    },
    {
        "name": "Thaddeus Dotson",
        "age": 27,
        "city": "Koningshooikt"
    },
    {
        "name": "Melinda Cole",
        "age": 48,
        "city": "Baulers"
    },
    {
        "name": "Joy Yang",
        "age": 62,
        "city": "Sint-Pieters-Kapelle"
    },
    {
        "name": "Shannon Patton",
        "age": 44,
        "city": "Stirling"
    },
    {
        "name": "Dominic Gordon",
        "age": 55,
        "city": "Soverzene"
    },
    {
        "name": "Clinton Wong",
        "age": 95,
        "city": "Santo Stefano del Sole"
    },
    {
        "name": "Malachi Christian",
        "age": 36,
        "city": "Norfolk County"
    },
    {
        "name": "Ulysses Hyde",
        "age": 14,
        "city": "Sepino"
    },
    {
        "name": "Octavia Jensen",
        "age": 45,
        "city": "Reading"
    },
    {
        "name": "Nasim Vazquez",
        "age": 28,
        "city": "Aieta"
    },
    {
        "name": "Tanner Trevino",
        "age": 26,
        "city": "North Bay"
    },
    {
        "name": "Guinevere Hammond",
        "age": 13,
        "city": "Pamplona"
    },
    {
        "name": "Rafael Knapp",
        "age": 84,
        "city": "Karimnagar"
    },
    {
        "name": "Zorita Hoover",
        "age": 13,
        "city": "Morinville"
    },
    {
        "name": "Hammett Reilly",
        "age": 98,
        "city": "Tuglie"
    },
    {
        "name": "Meghan Elliott",
        "age": 17,
        "city": "Rhayader"
    },
    {
        "name": "Jermaine Hebert",
        "age": 16,
        "city": "Göksun"
    },
    {
        "name": "Xavier Hicks",
        "age": 84,
        "city": "Gressan"
    },
    {
        "name": "Leigh Rosario",
        "age": 72,
        "city": "Centa San Nicolò"
    },
    {
        "name": "Paki Vaughn",
        "age": 47,
        "city": "Rycroft"
    },
    {
        "name": "Quinn Baldwin",
        "age": 23,
        "city": "Vänersborg"
    },
    {
        "name": "Aurelia Wilson",
        "age": 26,
        "city": "Falkensee"
    },
    {
        "name": "Melanie Mosley",
        "age": 52,
        "city": "Avernas-le-Bauduin"
    },
    {
        "name": "Zephr Drake",
        "age": 48,
        "city": "Bernau"
    },
    {
        "name": "Kato Pennington",
        "age": 96,
        "city": "Jeju"
    },
    {
        "name": "Wylie Bush",
        "age": 75,
        "city": "Hwaseong"
    }
]



let voterList = citizens.filter(person => person.age >= 18)
console.log(voterList.length)

let searchQuery = "Lucas Yates"

let personDetails = voterList.find(person => person.name == searchQuery)
voterList.filter(per => per.name == searchQuery)
//voterList = voterList.filter(person => person.name != "Lucas Yates")
//console.log(voterList.length)

console.log(personDetails)



// making an array using any iterables

let agesCopy = Array.from(ages)
console.log(agesCopy)


//making copy of any array
let agesCopy1 = Array.from(ages)
let agesCopy3 = ages.slice()
let agesCopy2 = [...ages]

//String methods
//ES6 -> asyncronous javascript

