process.env.foo = null
console.log(process.env.foo)
console.log(typeof process.env.foo)
process.argv.forEach(v=>console.log(v))

