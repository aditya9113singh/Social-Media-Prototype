import { useContext } from "react";
import { PostList } from "../store/post-list-store";



const Post = ({ post}) => {
  const { deletePost } = useContext(PostList);

  return (<div className="card post-card" style={{ width: "30rem" ,margin:"50px 400px 50px 400px"} }>
    <div className="card-body" style={{ backgroundColor:"rgb(129, 133, 133, 0.277)" }}>
      <h5 className="card-title">
      {post.title}
      
        <span class="btn position-absolute top-0 start-100 translate-middle badge text-bg-danger" onClick={() => deletePost(post.id)}>Close
        </span>

      </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag1) => (
        <span key={tag1} className="badge text-bg-primary hashtag">
          {tag1}
        </span>
      ))}
      <br/><br/>
      <div className="likes">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Post is liked by </span><span class="badge text-bg-warning">{post.reactions+" "}</span><span> people</span>
      </div>
    </div>
  </div>
  );
};

export default Post;