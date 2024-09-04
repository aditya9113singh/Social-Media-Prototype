import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action)=>{
  let newPostList=currPostList
  if(action.type==='DELETE_POST'){
    newPostList=currPostList.filter((post)=> post.id!==action.payload.postId
  );

  }

else if(action.type==='ADD_POST'){
    newPostList=[action.payload,...currPostList];
}

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultList
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

 

  const deletePost = (postId) => {
    console.log(postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
    console.log(1);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost}}>
      {children}
    </PostList.Provider>
  );
};


const defaultList=[
{
body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
id: 1,
reactions: 6,
tags: ['history', 'american', 'crime'],
title: "His mother had always taught him",
userId: 121
},
{
  id: 1,
  body: "Exploring the depths of JSON structures for better data management.",
  tags: ["json", "data", "management"],
  reactions: 15,
  userId: 201,
  title: "Understanding JSON"
},
{
  id: 2,
  body: "How to efficiently parse and manipulate JSON data in various programming languages.",
  tags: ["programming", "json", "parsing"],
  reactions: 22,
  userId: 202,
  title: "JSON Parsing Techniques"
},
{
  id: 3,
  body: "The benefits of using structured data formats like JSON for APIs.",
  tags: ["api", "json", "data"],
  reactions: 30,
  userId: 203,
  title: "Structured Data in APIs"
},
{
  id: 4,
  body: "Best practices for validating JSON data to ensure consistency.",
  tags: ["validation", "json", "best practices"],
  reactions: 18,
  userId: 204,
  title: "Validating JSON Data"
},
{
  id: 5,
  body: "Common errors when working with JSON and how to avoid them.",
  tags: ["errors", "json", "troubleshooting"],
  reactions: 25,
  userId: 205,
  title: "Avoiding JSON Errors"
},
{
  id: 6,
  body: "How JSON is used in modern web development and its advantages.",
  tags: ["web development", "json", "advantages"],
  reactions: 27,
  userId: 206,
  title: "JSON in Web Development"
},
{
  id: 7,
  body: "A deep dive into JSON schema and its role in data validation.",
  tags: ["json schema", "validation", "data"],
  reactions: 34,
  userId: 207,
  title: "JSON Schema Overview"
},
{
  id: 8,
  body: "Integrating JSON with databases for efficient data storage.",
  tags: ["database", "json", "integration"],
  reactions: 21,
  userId: 208,
  title: "JSON and Databases"
},
{
  id: 9,
  body: "How to handle large JSON files and optimize performance.",
  tags: ["performance", "json", "optimization"],
  reactions: 19,
  userId: 209,
  title: "Handling Large JSON Files"
},
{
  id: 10,
  body: "JSON vs XML: A comparison of data interchange formats.",
  tags: ["json", "xml", "comparison"],
  reactions: 44,
  userId: 210,
  title: "JSON vs XML"
},
{
  id: 11,
  body: "The role of JSON in RESTful APIs and web services.",
  tags: ["api", "json", "restful"],
  reactions: 32,
  userId: 211,
  title: "JSON in RESTful APIs"
},
{
  id: 12,
  body: "Creating and using JSON Web Tokens (JWT) for authentication.",
  tags: ["jwt", "authentication", "json"],
  reactions: 20,
  userId: 212,
  title: "JSON Web Tokens (JWT)"
},
{
  id: 13,
  body: "Common libraries and tools for working with JSON in different languages.",
  tags: ["libraries", "tools", "json"],
  reactions: 28,
  userId: 213,
  title: "JSON Libraries and Tools"
},
{
  id: 14,
  body: "Understanding the JSON format and its data types.",
  tags: ["json", "format", "data types"],
  reactions: 26,
  userId: 214,
  title: "JSON Format Basics"
},
{
  id: 15,
  body: "Debugging JSON data and troubleshooting common issues.",
  tags: ["debugging", "json", "troubleshooting"],
  reactions: 23,
  userId: 215,
  title: "Debugging JSON Data"
},
{
  id: 16,
  body: "JSON data manipulation techniques for web applications.",
  tags: ["web applications", "json", "manipulation"],
  reactions: 31,
  userId: 216,
  title: "Manipulating JSON Data"
},
{
  id: 17,
  body: "How to use JSON with front-end frameworks like React and Angular.",
  tags: ["react", "angular", "json"],
  reactions: 29,
  userId: 217,
  title: "JSON with Front-End Frameworks"
},
{
  id: 18,
  body: "The impact of JSON on mobile app development and APIs.",
  tags: ["mobile", "app development", "json"],
  reactions: 17,
  userId: 218,
  title: "JSON in Mobile Development"
},
{
  id: 19,
  body: "Optimizing JSON data for faster loading and processing.",
  tags: ["optimization", "json", "performance"],
  reactions: 35,
  userId: 219,
  title: "Optimizing JSON Data"
},
{
  id: 20,
  body: "Exploring the security aspects of using JSON for data interchange.",
  tags: ["security", "json", "data interchange"],
  reactions: 16,
  userId: 220,
  title: "JSON Security Aspects"
},
{
  id: 21,
  body: "JSON data binding techniques for server-side applications.",
  tags: ["server-side", "json", "data binding"],
  reactions: 24,
  userId: 221,
  title: "Data Binding with JSON"
},
{
  id: 22,
  body: "Working with JSON in serverless architecture and microservices.",
  tags: ["serverless", "json", "microservices"],
  reactions: 33,
  userId: 222,
  title: "JSON in Serverless Architectures"
},
{
  id: 23,
  body: "Advanced JSON features like JSON Path and JSON Pointer.",
  tags: ["json path", "json pointer", "advanced"],
  reactions: 28,
  userId: 223,
  title: "Advanced JSON Features"
},
{
  id: 24,
  body: "Using JSON for configuration files in various applications.",
  tags: ["configuration", "json", "applications"],
  reactions: 19,
  userId: 224,
  title: "JSON for Configuration"
},
{
  id: 25,
  body: "Exploring JSON data serialization and deserialization techniques.",
  tags: ["serialization", "deserialization", "json"],
  reactions: 22,
  userId: 225,
  title: "JSON Serialization Techniques"
},
{
  id: 26,
  body: "Handling JSON data in asynchronous operations and promises.",
  tags: ["asynchronous", "json", "promises"],
  reactions: 26,
  userId: 226,
  title: "JSON and Asynchronous Operations"
},
{
  id: 27,
  body: "Integrating JSON with legacy systems and applications.",
  tags: ["legacy systems", "json", "integration"],
  reactions: 21,
  userId: 227,
  title: "JSON with Legacy Systems"
},
{
  id: 28,
  body: "Using JSON for data interchange between different platforms and services.",
  tags: ["data interchange", "json", "platforms"],
  reactions: 30,
  userId: 228,
  title: "JSON Across Platforms"
},
{
  id: 29,
  body: "The role of JSON in big data and analytics applications.",
  tags: ["big data", "json", "analytics"],
  reactions: 20,
  userId: 229,
  title: "JSON in Big Data"
},
{
  id: 30,
  body: "Comparing JSON with other lightweight data interchange formats.",
  tags: ["data formats", "json", "comparison"],
  reactions: 18,
  userId: 230,
  title: "JSON and Lightweight Formats"
}
]


export default PostListProvider;