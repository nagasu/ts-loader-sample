interface person {
  name: string
}

function f(p: person) {
  console.log(p)
}

f({
  name: 'nagasu'
})
