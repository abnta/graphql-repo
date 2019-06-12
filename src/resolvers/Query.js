
const Query = {
    users(parent,args,{db},info){
        if(!args.query){
             return db.users
        }
        return db.users.filter((user)=>{
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent,args,{db},info){
        if(!args.query){
         return db.posts
        }

       return db.posts.filter((post)=>{
            if(post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())){
                return true
            }
        })
     
    },
    comments(parent,arg,{db},info){
     return db.comments
    },
    me(){
        return {
            id:"erty2345",
            name:"ertyui",
            email:"rtyu@er.com",
            age:26
        }

    },
    post(){
     return {
         id:"3456ftyu",
         title:"rtyufg67",
         body:"4567tyuvb",
         published:true
     }
    } 
 }

 export {Query as default}