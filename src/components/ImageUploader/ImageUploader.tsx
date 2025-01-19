import React, { useState } from 'react';

export interface ImageUploaderProps {
  /** Image upload event callback */
  onImageUpload: (
    file: File,
    dimensions: { width: number; height: number }
  ) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [error, setError] = useState<string | null>(
    'No file selected. Please upload an image.'
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      setError('No file selected. Please upload an image.');
      return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setError(null); // Clear previous errors
        onImageUpload(file, { width: img.width, height: img.height });
      };
      img.onerror = () => setError('Failed to load image.');
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };

    reader.onerror = () => setError('Failed to read the file.');
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="imageInput"
        className="text-xs text-gray-600 mb-1"
        data-testid="image-input-label"
      >
        Upload Image
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="border border-gray-300 text-black rounded px-2 py-1 text-sm w-full"
        onChange={handleImageChange}
        data-testid="image-input"
      />
      {error && (
        <span className="text-red-500 text-xs mt-1" data-testid="image-error">
          {error}
        </span>
      )}
    </div>
  );
}
