const parent = React.createElement("div", { id: "parent" },
    [React.createElement(
        "div", { id: "child1" },
        [React.createElement("h1", {}, "i am from h1 tag"), React.createElement("h2", {}, "i am from h2 tag")],
    ),
    React.createElement(
        "div", { id: "child2" },
        [React.createElement("h1", {}, "i am from h1 tag"), React.createElement("h2", {}, "i am from h2 tag")],
    )
    ]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


//one more div

const parent1 = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "i am from h1 tag"),
        React.createElement("h2", {}, "i am from h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "i am from h1 tag"),
        React.createElement("h2", {}, "i am from h2 tag")
    ])
])

console.log(parent1);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent1);