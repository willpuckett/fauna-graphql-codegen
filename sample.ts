const a: IUser = { email: 'somecat@wklj.com', id: "7", name: "Wanda" }

const profile: IPost = {
  author: a,
  coverImage: '/zippy.jpg',
  id: "45",
  title: "Generative Art with Rust",
  description: "If you don't notice it, is it still?"
}

console.log(profile)
