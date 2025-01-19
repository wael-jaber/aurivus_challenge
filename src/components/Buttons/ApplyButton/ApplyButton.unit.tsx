import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ApplyButton, ApplyButtonProps } from './ApplyButton';

describe('ApplyButton', () => {
  const renderApplyButton = (props: ApplyButtonProps) =>
    render(<ApplyButton {...props} />);

  it('renders the button with the correct text', () => {
    renderApplyButton({ isDisabled: false });
    const button = screen.getByTestId('apply-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Apply');
  });

  it('applies the correct styles when enabled', () => {
    renderApplyButton({ isDisabled: false });
    const button = screen.getByTestId('apply-button');
    expect(button).not.toHaveClass('opacity-50 cursor-not-allowed');
    expect(button).toHaveClass('hover:bg-blue-600');
    expect(button).toBeEnabled();
  });

  it('applies the correct styles when disabled', () => {
    renderApplyButton({ isDisabled: true });
    const button = screen.getByTestId('apply-button');
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
    expect(button).not.toHaveClass('hover:bg-blue-600');
    expect(button).toBeDisabled();
  });

  it('does not trigger the submit action when disabled', async () => {
    const onSubmitMock = vi.fn();
    render(
      <form onSubmit={onSubmitMock}>
        <ApplyButton isDisabled={true} />
      </form>
    );

    const button = screen.getByTestId('apply-button');
    await userEvent.click(button);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('triggers the submit action when enabled', async () => {
    const onSubmitMock = vi.fn((e) => e.preventDefault());
    render(
      <form onSubmit={onSubmitMock}>
        <ApplyButton isDisabled={false} />
      </form>
    );

    const button = screen.getByTestId('apply-button');
    await userEvent.click(button);
    expect(onSubmitMock).toHaveBeenCalledOnce();
  });
});
