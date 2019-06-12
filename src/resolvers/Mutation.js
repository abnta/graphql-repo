import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent,args,{db},info){
        console.log(args)
        const emailTaken = db.users.some((user)=>{
            return user.email == args.data.email
        })

        if(emailTaken){
            throw new Error('Email Taken')
        }
        const user = {
            id:uuidv4(),
            ...args.data
        }
        db.users.push(user)
        return user
    },
    deleteUser(parent,args,ctx,info){
        const userIndex = db.users.findIndex((user)=>{
            return user.id === args.id
        })

        if(userIndex === -1){
            throw new Error('User not found')
        }

        const deletedUsers = db.users.splice(userIndex,1);

        db.posts = db.posts.filter((post)=>{
            const match = post.author === args.id

            if(match){
                db.comments = db.comments.filter((comment)=>{
                    return comment.post !== post.id
                })
            }
            return !match
        })

        db.comments = db.comments.filter((comment)=>{
            comment.author !== args.id
        })

        return deletedUsers[0]
        
    },
    createPost(parent,args,ctx,info){
        const userExists = db.users.some((user)=>{
            return user.id == args.data.author
        })

        if(!userExists){
            throw new Error('User not find')
        }

        const post = {
            id:uuidv4(),
            ...args.data
        }

        db.posts.push(post)
        return post
    },
    deletePost(parent,args,{db},info){
        const checkPost = db.posts.findIndex((post)=>{
          return  post.id === args.id
        })
        if(checkPost === -1){
            throw new Error('Post does not exist')
        }

        const deletedPost =db.posts.splice(checkPost,1);

        db.comments = comments.filter((comment)=>{
            return comment.post !== args.id
        })

        return deletedPost[0]
    },
    createComment(parent,args,{db},info){
        const checkPost = posts.some((post)=>{
           return (post.id === args.data.post) && post.published
        })

        const checkUser = users.some((user)=>{
           return user.id === args.data.author
        })

        if(!(checkPost && checkUser)){
            throw new Error('PostId or UserId does not exist');
        }

        const comment = {
            id : uuidv4(),
            ...args.data
        }

        db.comments.push(comment)

        return comment
    },
    deleteComment(parent,args,{db},info){
        const checkComment = db.comments.findIndex((comment)=>{
            return comment.id === args.id
        })

        if(checkComment === -1){
            throw new Error('Comment does not exist')
        }

        const deletedComment = db.comments.splice(checkComment,1)

        return deletedComment[0]
    }
}

export {Mutation as default}