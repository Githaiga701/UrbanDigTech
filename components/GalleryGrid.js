import { useState } from 'react'

export default function GalleryGrid({ images, columns = 'columns-2 sm:columns-3 lg:columns-4' }) {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <div className={`${columns} gap-4`}>
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image)}
            className="mb-4 block w-full overflow-hidden rounded-lg border border-slate-700/60 bg-slate-950/30 transition hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-950/20"
          >
            <img src={image.src} alt={image.alt} className="w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60"
          >
            Close
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
