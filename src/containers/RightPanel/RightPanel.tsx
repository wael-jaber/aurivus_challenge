import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Cell, CellRaster } from '../../components';

export const RightPanel: React.FC = () => {
  const {
    appliedCols: cols,
    appliedRows: rows,
    image,
    cells,
  } = useSelector((state: RootState) => state.main);

  const panelRef = useRef<HTMLDivElement>(null); // Ref to measure the panel dimensions
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    const resizeHandler = () => {
      if (panelRef.current) {
        const { clientWidth, clientHeight } = panelRef.current;

        // Calculate 90% of the container's width and height
        setContainerSize({
          width: clientWidth * 0.9,
          height: clientHeight * 0.9,
        });
      }
    };

    resizeHandler(); // Initial calculation
    window.addEventListener('resize', resizeHandler); // Recalculate on window resize
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    // Load the image to calculate its aspect ratio
    const img = new Image();
    img.src = image ?? '';
    img.onload = () => {
      setImageAspectRatio(img.width / img.height);
    };
  }, [image]);

  // Determine the scaling factor based on the container size and image aspect ratio
  const scale = Math.min(
    containerSize.width / imageAspectRatio, // Scale based on width
    containerSize.height * imageAspectRatio // Scale based on height
  );

  return (
    <div
      ref={panelRef} // Attach ref to measure this container
      className="flex items-center justify-center w-full h-full"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          width: `${scale}px`,
          height: `${scale / imageAspectRatio}px`, // Maintain the image's aspect ratio
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CellRaster
          cols={cols}
          rows={rows}
          image={image}
          cells={Array.from(cells.values())}
          cellComponent={(props) => (
            <Cell {...props} hideLabel={cells.size > 30} />
          )}
        />
      </div>
    </div>
  );
};

export default RightPanel;
