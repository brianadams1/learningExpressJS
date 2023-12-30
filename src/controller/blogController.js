import { Prisma } from "../app/prisma.js";

const blogsMessage ={message: "OK from Blogs Page", status: 200} ;

/*
ive tried so hard and got so fast but in the end it doesnt even matter

*/ 

// GET METHOD BLOGS
const get = async (req, res) => {
  const blog = await Prisma.blog.findMany()
  res.status(200).json({
    message: blogsMessage,
    blog: blog
  });
};

// POST METHOD BLOGS
const post = (req, res) => {
  res.status(200).json(blogsMessage);
};

// PUT METHOD BLOGS
const put = (req, res) => {
  res.status(200).json(blogsMessage);
};

// PATCH METHOD BLOGS
const patch = (req, res) => {
  res.status(200).json(blogsMessage);
};

// DELETE METHOD BLOGS
const remove = (req, res) => {
  res.status(200).json(blogsMessage);
};

export default {
  get,
  post,
  put,
  patch,
  remove,
};
