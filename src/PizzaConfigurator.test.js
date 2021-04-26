import PizzaConfigurator from "./PizzaConfigurator";
import { render, fireEvent } from "@testing-library/react";

describe("Configurator", () => {
    it("renders correctly", () => {
      const { container } = render(<PizzaConfigurator />);
      expect(container).toContainHTML("35 cm");
      expect(container).toContainHTML("30 cm");
      expect(container).toContainHTML("Thin");
      expect(container).toContainHTML("Thick");
      expect(container).toContainHTML("Tomato");
      expect(container).toContainHTML("White");
      expect(container).toContainHTML("Hot");
      expect(container).toContainHTML("Mozzarella");
      expect(container).toContainHTML("Cheddar");
      expect(container).toContainHTML("Dorblue");
      expect(container).toContainHTML("Tomatoes");
      expect(container).toContainHTML("Mushrooms");
      expect(container).toContainHTML("Cupsicum");
      expect(container).toContainHTML("Bacon");
      expect(container).toContainHTML("Pepperoni");
      expect(container).toContainHTML("Ham");
      expect(container).toContainHTML("Total Price: 200");
    });

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
    
          expect(container).toContainHTML("Total Price: 250");
        });
      });

      describe("on pizza dough change", () => {
        it("updates dough radio buttons state", () => {
          const { getByTestId } = render(<PizzaConfigurator />);
          expect(getByTestId("thin-crust")).toBeChecked();
    
          fireEvent.click(getByTestId("thick-crust"));
    
          expect(getByTestId("thin-crust")).not.toBeChecked();
          expect(getByTestId("thick-crust")).toBeChecked();
        });
      });

      describe("on sauce change", () => {
        it("updates sauce radio buttons state", () => {
          const { getByTestId } = render(<PizzaConfigurator/>);
    
          expect(getByTestId("tomato-sauce")).toBeChecked();
          expect(getByTestId("white-sauce")).not.toBeChecked();
          expect(getByTestId("hot-sauce")).not.toBeChecked();
    
          fireEvent.click(getByTestId("white-sauce"));
          expect(getByTestId("white-sauce")).toBeChecked();
          expect(getByTestId("tomato-sauce")).not.toBeChecked();
        });
      });

      describe("on cheese change", () => {
        it("updates cheese checkboxes state", () => {
          const { getByTestId } = render(<PizzaConfigurator />);
    
          expect(getByTestId("mozzarella-cheese")).not.toBeChecked();
          expect(getByTestId("cheddar-cheese")).not.toBeChecked();
          expect(getByTestId("dorblu-cheese")).not.toBeChecked();
    
          fireEvent.click(getByTestId("mozzarella-cheese"));
          fireEvent.click(getByTestId("cheddar-cheese"));
    
          expect(getByTestId("mozzarella-cheese")).toBeChecked();
          expect(getByTestId("cheddar-cheese")).toBeChecked();
          expect(getByTestId("dorblu-cheese")).not.toBeChecked();
        });
    
        it("updates price correctly", () => {
          const { container, getByTestId } = render(<PizzaConfigurator />);
    
          fireEvent.click(getByTestId("mozzarella-cheese"));
          fireEvent.click(getByTestId("cheddar-cheese"));
    
          expect(container).toContainHTML("Total Price: 258");
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
    
          expect(container).toContainHTML("Total Price: 258");
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
    
          expect(container).toContainHTML("Total Price: 258");
        });
      });

      describe("on submit", () => {
        it("renders the selected ingredients list", () => {
          const { container, getByTestId, getByRole } = render(<PizzaConfigurator />);
    
          fireEvent.click(getByTestId("meat-bacon"));
          fireEvent.click(getByTestId("meat-pepperoni"));
    
          fireEvent.click(getByRole("button"));
    
          expect(container).toContainHTML("Ingredients: bacon, pepperoni");
        });
      });
    });