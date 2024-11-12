interface Props {
  src: string;
  alt: string;
  caption: string;
  n: number;
}

const Figure = ({ src, alt, caption, n = 0 }: Props) => {
  return (
    <figure className="mt-5 mb-5 text-center">
      <img src={src} alt={alt} className="mx-auto block" />
      <figcaption className="underline">
        figure {n}: {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
