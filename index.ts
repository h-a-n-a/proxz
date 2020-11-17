const o = {
  a: {
    b: [],
  },
}

const proxied = new Proxy([], {
  get(key) {
    console.log("key")
    return key
  },
})

console.log(proxied.push)
