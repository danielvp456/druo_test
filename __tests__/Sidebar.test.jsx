import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from '@/components/Sidebar';

describe("Sidebar", () => {
  it("renders the sidebar items correctly", () => {
    render(<Sidebar />);

    // Verifica que los items de la barra lateral estén presentes
    const sidebarItems = screen.getAllByRole("link");
    expect(sidebarItems).toHaveLength(2);

    // Verifica los nombres de los items
    expect(sidebarItems[0]).toHaveTextContent("Negocios");
    expect(sidebarItems[1]).toHaveTextContent("Crear negocios");
  });
});