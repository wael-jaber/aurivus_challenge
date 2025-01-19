import { render, screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ImageUploader } from './ImageUploader';

describe('ImageUploader', () => {
  const renderImageUploader = (
    props: Partial<{
      onImageUpload: (
        file: File,
        dimensions: { width: number; height: number }
      ) => void;
    }> = {}
  ) => {
    const defaultProps = {
      onImageUpload: vi.fn(),
    };
    return render(<ImageUploader {...defaultProps} {...props} />);
  };

  beforeEach(() => vi.clearAllMocks());
  afterEach(() => cleanup());

  it('renders the file input', () => {
    renderImageUploader();
    expect(screen.getByTestId('image-input')).toBeInTheDocument();
    expect(screen.getByTestId('image-input-label')).toBeInTheDocument();
  });

  it('displays an error message if no file is selected', async () => {
    renderImageUploader();
    const fileInput = screen.getByTestId('image-input');

    await act(async () => {
      await userEvent.upload(fileInput, []);
    });

    expect(screen.getByTestId('image-error')).toBeInTheDocument();
    expect(screen.getByTestId('image-error')).toHaveTextContent(
      /no file selected/i
    );
  });

  it('calls onImageUpload with correct file and dimensions', async () => {
    const onImageUpload = vi.fn();
    renderImageUploader({ onImageUpload });

    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    });

    const fileInput = screen.getByTestId('image-input');

    // Mock image loading
    const mockImage = {
      width: 1920,
      height: 1080,
      onload: vi.fn(),
      onerror: vi.fn(),
      src: '',
    };
    vi.spyOn(window, 'Image').mockImplementation(
      () => mockImage as unknown as HTMLImageElement
    );

    await act(async () => {
      await userEvent.upload(fileInput, file);
      mockImage.onload(); // Simulate image load
    });

    expect(onImageUpload).toHaveBeenCalledTimes(1);
    expect(onImageUpload).toHaveBeenCalledWith(file, {
      width: 1920,
      height: 1080,
    });
  });

  it('displays an error when the file fails to load', async () => {
    renderImageUploader();
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    });
    const fileInput = screen.getByTestId('image-input');

    // Mock image failure
    const mockImage = {
      width: 0,
      height: 0,
      onload: vi.fn(),
      onerror: vi.fn(),
      src: '',
    };
    vi.spyOn(window, 'Image').mockImplementation(
      () => mockImage as unknown as HTMLImageElement
    );

    await act(async () => {
      await userEvent.upload(fileInput, file);
      mockImage.onerror(); // Simulate image load failure
    });

    expect(screen.getByTestId('image-error')).toBeInTheDocument();
    expect(screen.getByTestId('image-error')).toHaveTextContent(
      /failed to load image/i
    );
  });
});
