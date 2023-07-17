import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sandbox from "./Sandbox";

describe("Quote calculation", () => {
    it("should display a proper quote once the form is filled and submited", async () => {
        render(<Sandbox />);
        await userEvent.type(screen.getByLabelText("Length"), "10");
        await userEvent.type(screen.getByLabelText("Width"), "10");
        await userEvent.type(screen.getByLabelText("Depth"), "10");
        expect(screen.getByRole("form")).toHaveFormValues({
            length: 10,
            width: 10,
            depth: 10,
        });

        await userEvent.click(screen.getByRole("button"));
        expect(
            screen.getByText(
                "Get your personnal Pétanque field for only 0,20 €"
            )
        ).toBeVisible();
    });

    it("should hide the quote when the user change form values", async () => {
        render(<Sandbox />);
        await userEvent.type(screen.getByLabelText("Length"), "10");
        await userEvent.type(screen.getByLabelText("Width"), "10");
        await userEvent.type(screen.getByLabelText("Depth"), "10");
        expect(screen.getByRole("form")).toHaveFormValues({
            length: 10,
            width: 10,
            depth: 10,
        });

        await userEvent.click(screen.getByRole("button"));
        expect(
            screen.getByText(
                "Get your personnal Pétanque field for only 0,20 €"
            )
        ).toBeVisible();
        await userEvent.type(screen.getByLabelText("Length"), "100");
        expect(
            screen.queryByText(
                "Get your personnal Pétanque field for only 0,20 €"
            )
        ).not.toBeInTheDocument();
    });
});
