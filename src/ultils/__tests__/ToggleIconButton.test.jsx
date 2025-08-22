import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleIconButton from "../../views/components/button/ToggleIconButton";
import { vi } from "vitest";

// Mock icon component (vì bạn import từ icon riêng)
const MockIcon = ({ size, fill }) => (
    <svg data-testid="mock-icon" data-size={size} data-fill={fill}></svg>
);

describe("ToggleIconButton", () => {
    test("renders IconInitial when isToggle=false", () => {
        render(<ToggleIconButton IconInitial={MockIcon} IconAfter={MockIcon} />);
        const icon = screen.getByTestId("mock-icon");
        expect(icon).toBeInTheDocument();
        expect(icon.getAttribute("data-fill")).toBe("#3D55CC"); // màu mainColor mặc định
    });

    test("renders IconAfter when isToggle=true", () => {
        render(
            <ToggleIconButton
                isToggle={true}
                IconInitial={MockIcon}
                IconAfter={MockIcon}
            />
        );
        const icon = screen.getByTestId("mock-icon");
        expect(icon).toBeInTheDocument();
        expect(icon.getAttribute("data-fill")).toBe("#F5F6FA"); // màu khi toggle
    });

    test("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        render(
            <ToggleIconButton
                onClick={handleClick}
                IconInitial={MockIcon}
                IconAfter={MockIcon}
            />
        );
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("changes background color on hover when not toggled", () => {
        render(<ToggleIconButton IconInitial={MockIcon} IconAfter={MockIcon} />);
        const button = screen.getByRole("button");
        const bgBefore = button.style.backgroundColor;

        fireEvent.mouseEnter(button);
        const bgAfter = button.style.backgroundColor;

        expect(bgBefore).not.toEqual(bgAfter);
    });
});
