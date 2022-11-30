export const resolvers = {
  Query: {
    posts: async (_, __, {dataSources}) => {
      return dataSources.placeholderAPI.getPosts();
    }
  },
  Post: {
    comments: (parent, _, {dataSources}) => {
      return dataSources.placeholderAPI.getComments(parent.userId);
    }
  }
}


