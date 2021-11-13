import Image from "next/image"

export default function NextImage({ img, caption }) {
  const { src, alt, srcSet, height, width } = img.props
  const { children } = caption.props
  return (
    <figure>
      <Image src={src} height={100} width={100} alt={alt} />
      <figurecaption>{children}</figurecaption>
    </figure>
  )
}
