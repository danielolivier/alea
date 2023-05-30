import { render, screen } from "@testing-library/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

describe("table", () => {
  test("renders table with caption", () => {
    render(
      <Table>
        <TableCaption>Caption</TableCaption>
      </Table>
    );

    const tableElement = screen.getByRole("table");
    const captionElement = screen.getByText("Caption");

    expect(tableElement).toBeInTheDocument();
    expect(captionElement).toBeInTheDocument();
  });

  test("renders table with header", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    const tableElement = screen.getByRole("table");
    const tableHeaderElement = screen.getByRole("rowgroup");
    const tableRowElement = screen.getByRole("row");
    const tableHeadElements = screen.getAllByRole("columnheader");

    expect(tableElement).toBeInTheDocument();
    expect(tableHeaderElement).toBeInTheDocument();
    expect(tableRowElement).toBeInTheDocument();
    expect(tableHeadElements).toHaveLength(2);
    expect(tableHeadElements[0]).toHaveTextContent("Header 1");
    expect(tableHeadElements[1]).toHaveTextContent("Header 2");
  });

  test("renders table with body", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const tableElement = screen.getByRole("table");
    const tableBodyElement = screen.getByRole("rowgroup");
    const tableRowElement = screen.getByRole("row");
    const tableCellElements = screen.getAllByRole("cell");

    expect(tableElement).toBeInTheDocument();
    expect(tableBodyElement).toBeInTheDocument();
    expect(tableRowElement).toBeInTheDocument();
    expect(tableCellElements).toHaveLength(2);
    expect(tableCellElements[0]).toHaveTextContent("Cell 1");
    expect(tableCellElements[1]).toHaveTextContent("Cell 2");
  });

  test("renders table with footer", () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    const tableElement = screen.getByRole("table");
    const tableFooterElement = screen.getByRole("rowgroup");
    const tableRowElement = screen.getByRole("row");
    const tableCellElements = screen.getAllByRole("cell");

    expect(tableElement).toBeInTheDocument();
    expect(tableFooterElement).toBeInTheDocument();
    expect(tableRowElement).toBeInTheDocument();
    expect(tableCellElements).toHaveLength(2);
    expect(tableCellElements[0]).toHaveTextContent("Footer 1");
    expect(tableCellElements[1]).toHaveTextContent("Footer 2");
  });

  test("renders table with multiple rows in body", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 3</TableCell>
            <TableCell>Cell 4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const tableRowElements = screen.getAllByRole("row");
    const tableCellElements = screen.getAllByRole("cell");

    expect(tableRowElements).toHaveLength(2);
    expect(tableCellElements).toHaveLength(4);
    expect(tableCellElements[0]).toHaveTextContent("Cell 1");
    expect(tableCellElements[1]).toHaveTextContent("Cell 2");
    expect(tableCellElements[2]).toHaveTextContent("Cell 3");
    expect(tableCellElements[3]).toHaveTextContent("Cell 4");
  });
});
