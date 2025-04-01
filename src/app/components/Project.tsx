export default function Project({ title, description, imageUrl, imageAlt }) {
  return (
    <div className="flex items-start mb-10 w-full">
      {" "}
      {/* Make project take full width of parent */}
      <div className="flex-shrink-0 w-2/3 pr-8">
        {" "}
        {/* Fixed width for text */}
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
      <div className="flex-shrink-0 w-1/2">
        {" "}
        {/* Fixed width for image */}
        <img src={imageUrl} alt={imageAlt} className="w-full block" />
      </div>
    </div>
  );
}
