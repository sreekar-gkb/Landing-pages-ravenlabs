/* eslint-disable @next/next/no-img-element */
// Plain <img> for bundled campaigns (images are served statically by ../img/[file]/route.ts).
export default function Img({ src, alt, width, height, className, fill, priority, sizes, ...rest }: any) {
  const cls = fill ? `absolute inset-0 h-full w-full ${className ?? ''}` : className;
  return <img src={src} alt={alt} width={fill ? undefined : width} height={fill ? undefined : height} className={cls}
    loading={priority ? 'eager' : 'lazy'} decoding="async" {...rest} />;
}
