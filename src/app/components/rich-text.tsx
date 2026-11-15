import { Fragment } from "react";

interface IRichTextProps {
  text: string;
}

/** Renders a data string, turning the **double asterisk** parts into bold. */
const RichText = (props: IRichTextProps) => {
  const { text } = props;
  const parts = text.split("**");

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index}>{part}</strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
};

export default RichText;
