var o = {
    a: {
        b: [],
    },
};
var proxied = new Proxy(o, {
    get: function (key) {
        console.log("key", key);
        return key;
    },
});
proxied.a.b;
