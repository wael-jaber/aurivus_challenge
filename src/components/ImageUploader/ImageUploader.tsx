import React, { useState } from 'react';

export interface ImageUploaderProps {
  /** Image upload event callback */
  onImageUpload: (
    file: File,
    dimensions: { width: number; height: number }
  ) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          onImageUpload(file, { width: img.width, height: img.height });
        };
        if (e.target?.result) {
          img.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    } else {
      setError('Failed to load image.');
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="imageInput" className="text-xs text-gray-600 mb-1">
        Upload Image
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="border border-gray-300 text-black rounded px-2 py-1 text-sm w-full"
        onChange={handleImageChange}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}
