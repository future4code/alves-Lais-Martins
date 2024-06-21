import {countries} from './countries.js'

// console.table(countries)

const value = process.argv[2]

const result = countries.filter((pais) => {
    return pais.name.toLocaleLowerCase().includes(value)
} )

console.table(result)
