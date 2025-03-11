type AllowedTags = "p" | "span" | "div" | "li";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedTags;
}

export const Text = ({ as: Tag = "p" }: TextProps) => {
  return <Tag>Text</Tag>;
};
