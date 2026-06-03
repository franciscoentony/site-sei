export default function Destaques({ link, image }) {
  return (
    <a
      href={link}
      className="relative group min-w-85 h-120 flex rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Imagem/banner */}
      <img
        src={image}
        alt="banner"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </a>
  );
}
