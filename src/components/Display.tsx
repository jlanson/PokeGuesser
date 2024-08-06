interface DisplayProps {
  img: {
    url: string;
    alt: string;
  };
}

export default function Display({img}: DisplayProps) {
  return(
    <div>
      <img src={img.url} alt={img.alt} />
    </div>
  );
}