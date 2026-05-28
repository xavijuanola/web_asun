export default function DesignSwitcher() {
  const variants = [
    { name: 'Original', url: '/web_asun/' },
    { name: 'Thrive', url: '/web_asun/thrive/' },
    { name: 'Glossier', url: '/web_asun/glossier/' },
    { name: 'Dior', url: '/web_asun/dior/' },
  ];

  // Determine current variant from pathname
  const pathname = window.location.pathname;
  const currentVariant = variants.find(
    (v) => pathname.startsWith(v.url)
  )?.name || 'Original';

  return (
    <div className="flex items-center gap-2">
      {variants.map((variant) => (
        <a
          key={variant.name}
          href={variant.url}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
            currentVariant === variant.name
              ? 'bg-dark text-cream'
              : 'bg-gray-200 text-dark hover:bg-gray-300'
          }`}
        >
          {variant.name}
        </a>
      ))}
    </div>
  );
}
