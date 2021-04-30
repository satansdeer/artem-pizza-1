import PizzaConfigurator from "./PizzaConfigurator";
import { render, fireEvent } from "@testing-library/react";

describe("Configurator", () => {
  describe("on pizza size change", () => {
    it("updates pizza size radio buttons state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);
      expect(getByTestId("size-30")).toBeChecked();

      fireEvent.click(getByTestId("size-35"));

      expect(getByTestId("size-30")).not.toBeChecked();
      expect(getByTestId("size-35")).toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConfigurator />);

      fireEvent.click(getByTestId("size-35"));

      expect(container).toContainHTML("Make order 250");
    });
  });

  describe("on pizza dough change", () => {
    it("updates dough radio buttons state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);
      expect(getByTestId("crust-thin-crust")).toBeChecked();

      fireEvent.click(getByTestId("crust-thick-crust"));

      expect(getByTestId("crust-thin-crust")).not.toBeChecked();
      expect(getByTestId("crust-thick-crust")).toBeChecked();
    });
  });

  describe("on sauce change", () => {
    it("updates sauce radio buttons state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);

      expect(getByTestId("sauce-tomato-sauce")).toBeChecked();
      expect(getByTestId("sauce-white-sauce")).not.toBeChecked();
      expect(getByTestId("sauce-hot-sauce")).not.toBeChecked();

      fireEvent.click(getByTestId("sauce-white-sauce"));
      expect(getByTestId("sauce-white-sauce")).toBeChecked();
      expect(getByTestId("sauce-tomato-sauce")).not.toBeChecked();
    });
  });

  describe("on cheese change", () => {
    it("updates cheese checkboxes state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);

      expect(getByTestId("cheese-mozzarella")).toBeChecked();
      expect(getByTestId("cheese-cheddar")).not.toBeChecked();
      expect(getByTestId("cheese-dorblu")).not.toBeChecked();

      fireEvent.click(getByTestId("cheese-mozzarella"));
      fireEvent.click(getByTestId("cheese-cheddar"));

      expect(getByTestId("cheese-mozzarella")).not.toBeChecked();
      expect(getByTestId("cheese-cheddar")).toBeChecked();
      expect(getByTestId("cheese-dorblu")).not.toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConfigurator />);

      fireEvent.click(getByTestId("cheese-mozzarella"));
      fireEvent.click(getByTestId("cheese-cheddar"));

      expect(container).toContainHTML("Make order 200")
    });
  });

  describe("on veges change", () => {
    it("updates veges checkboxes state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);

      expect(getByTestId("veges-tomatoes")).not.toBeChecked();
      expect(getByTestId("veges-mushrooms")).not.toBeChecked();
      expect(getByTestId("veges-cupsicum")).not.toBeChecked();

      fireEvent.click(getByTestId("veges-cupsicum"));
      fireEvent.click(getByTestId("veges-mushrooms"));

      expect(getByTestId("veges-tomatoes")).not.toBeChecked();
      expect(getByTestId("veges-mushrooms")).toBeChecked();
      expect(getByTestId("veges-cupsicum")).toBeChecked();
    });

    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConfigurator />);

      fireEvent.click(getByTestId("veges-cupsicum"));
      fireEvent.click(getByTestId("veges-mushrooms"));

      expect(container).toContainHTML("Make order 258");
    });
  });

  describe("on meat change", () => {
    it("updates meat checkboxes state", () => {
      const { getByTestId } = render(<PizzaConfigurator />);

      expect(getByTestId("meat-bacon")).not.toBeChecked();
      expect(getByTestId("meat-pepperoni")).not.toBeChecked();
      expect(getByTestId("meat-ham")).not.toBeChecked();

      fireEvent.click(getByTestId("meat-bacon"));
      fireEvent.click(getByTestId("meat-pepperoni"));

      expect(getByTestId("meat-bacon")).toBeChecked();
      expect(getByTestId("meat-pepperoni")).toBeChecked();
      expect(getByTestId("meat-ham")).not.toBeChecked();
    });
    it("updates price correctly", () => {
      const { container, getByTestId } = render(<PizzaConfigurator />);

      fireEvent.click(getByTestId("meat-bacon"));
      fireEvent.click(getByTestId("meat-pepperoni"));

      expect(container).toContainHTML("Make order 258");
    });
  });

  describe("on submit", () => {
    it("renders the selected ingredients list", () => {
      const { container, getByTestId, getByRole } = render(
        <PizzaConfigurator />
      );

      fireEvent.click(getByTestId("meat-bacon"));
      // fireEvent.click(getByTestId("meat-pepperoni"));

      fireEvent.click(getByRole("button"));

      expect(container).toContainHTML("Total order: bacon");
    });
  });
});
