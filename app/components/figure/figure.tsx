interface Props {
  src: string;
  alt: string;
  caption: string;
  n: number;
}

const Figure = ({ src, alt, caption, n = 0 }: Props) => {
  return (
    <figure className="mt-5 mb-5">
      <img src={src} alt={alt} />
      <figcaption className="underline">
        figure {n}: {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
