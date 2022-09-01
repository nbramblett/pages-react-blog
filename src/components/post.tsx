import * as React from "react";
import Markdown from 'markdown-to-jsx';

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
        <Markdown>{body}</Markdown>
      </div>
    </>
  );
};

export default Post;