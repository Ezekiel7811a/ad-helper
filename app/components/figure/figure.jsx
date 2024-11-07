const Figure = ({ src, alt, caption, n = 0 }) => {
    return (<figure className="mt-5 mb-5">
      <img src={src} alt={alt}/>
      <figcaption className="underline">
        figure {n}: {caption}
      </figcaption>
    </figure>);
};
export default Figure;
