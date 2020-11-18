postsByUser : async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('posts');

     res.send(user.posts);
 }

