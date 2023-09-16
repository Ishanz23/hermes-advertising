export default function ImageList({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-4">
      {images.map((image) => (
        <img
          src={image}
          key={image}
          className="rounded-md w-[230px] h-[230px]"
        ></img>
      ))}
    </div>
  );
}
