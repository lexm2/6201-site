import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    key: "name",
    label: "CITY",
  },
  {
    key: "wins",
    label: "WINS",
  },
  {
    key: "losses",
    label: "LOSSES",
  },
  {
    key: "rank",
    label: "RANK",
  },
  {
    key: "year",
    label: "YEAR",
  },
];

export default function DataTable({ extractedDataGlobal }) {
  if (!extractedDataGlobal) {
    return <div>Loading...</div>; // Render loading indicator or placeholder
  }
  return (
    <Table aria-label="">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={extractedDataGlobal}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
