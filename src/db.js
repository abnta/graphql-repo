//demo user data
let users = [
    {
        id:"1",
        name:"56tyui",
        email:"567@t5.com",
        age:72
    },
    {
        id:"2",
        name:"56tyufghji",
        email:"567@t6.com",
        age:66
    },
    {
        id:"3",
        name:"56tyhj7i",
        email:"567@t7.com",
        age:null
    }
]

let posts = [
    {
        id:"1",
        title:"rtyufg67",
        body:"4567tyuvb",
        published:true,
        author:"1"
    },
    {
        id:"2",
        title:"rtfghyufg67",
        body:"45fuuh67tyuvb",
        published:false,
        author:"1"
    },
    {
        id:"3",
        title:"rtgvbnyufg67",
        body:"4566tgm7tyuvb",
        published:true,
        author:"2"
    }
]

let comments = [
    {
        id:"1",
        text:"dfghj",
        author:"1",
        post:"1"
    },
    {
        id:"2",
        text:"gbhnjklj",
        author:"1",
        post:"1"
    },
    {
        id:"3",
        text:"vbnjko",
        author:"2",
        post:"2"
    },
    {
        id:"4",
        text:"vbnhjkirg",
        author:"3",
        post:"2"
    }
]

const db = {
    users,
    posts,
    comments
}

export {db as defalult}