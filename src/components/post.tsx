import * as React from "react";
import ReactMarkdown from "react-markdown";

type PostProps = {
  body: string;
  title: string;
  c_topic: string;
};

const Post = ({body, title, c_topic}: PostProps) => {

  return (
    <>
      <div className="centered-container">
        <h1 className="font-bold text-2xl mb-5">{c_topic}</h1>
        <h3 className="font-extrabold text-5xl mb-5">{title}</h3>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </>
  );
};

export default Post;