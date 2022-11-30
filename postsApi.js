import { RESTDataSource }  from '@apollo/datasource-rest';
import DataLoader from 'dataloader';

class PlaceholderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  getPosts() {
    return this.get(`posts`);
  }

  dataLoader = new DataLoader(async(postIds)=>{
    return postIds.map((postId)=>{
      console.log(`Getting Comments for postId: ${JSON.stringify(postId)}`);
      return this.get(`comments/?postId=`+ encodeURIComponent(postId));
    })
  })

  getComments(postId) {
    return this.dataLoader.load(postId);
  }

}

export default PlaceholderAPI