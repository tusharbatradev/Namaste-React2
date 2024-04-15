// const heading = React.createElement("h1", { className: "heading" }, "Hello From React");
const parent = React.createElement("div", {
    id: "parent"
}, // Array of Parent Element
[
    React.createElement("div", {
        id: "child"
    }, // Array of Chidrens
    [
        React.createElement("h1", {}, "Hello I am h1 Tag"),
        React.createElement("h2", {}, "Hello I am h2 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, // Array of Chidrens
    [
        React.createElement("h1", {}, "Hello I am h1 Tag"),
        React.createElement("h2", {}, "Hello I am h2 Tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
