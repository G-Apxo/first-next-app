import Link from "next/link";
import React from "react";

const dummyBlog = [
  {
    id: 1,
    title: "My First Blog",
    content: "This is my first blog post.",
  },
  {
    id: 2,
    title: "My Second Blog",
    content: "This is my second blog post.",
  },
  {
    id: 3,
    title: "My Third Blog",
    content: "This is my third blog post.",
  },
];

const page = () => {
  return (
    <>
      {dummyBlog.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default page;
