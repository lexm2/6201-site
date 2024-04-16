import React, { useState, useEffect } from "react";
import { useAsyncList } from "@react-stately/data";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
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

const fetchDataFromAPI = async () => {
  try {
    const eventResponse = await fetch("/api/TBA/Events", {});
    if (eventResponse.ok) {
      if (eventResponse) {
        const eventData = await eventResponse.json();

        const data = {};

        const fetchPromises = eventData.map(async (item) => {
          try {
            const anotherResponse = await fetch(
              `/api/TBA/PerformanceAt/${item.key}`,
              {}
            );
            if (anotherResponse.ok) {
              const anotherData = await anotherResponse.json();

              // Combine the data into the combinedData object
              data[item.key] = {
                eventData: anotherData,
                city: item.city,
                year: item.year,
              };
            } else {
              console.error(
                `Failed to fetch data for event code ${item.event_code}`
              );
            }
          } catch (error) {
            console.error(
              `Error fetching data for event code ${item.event_code}:`,
              error
            );
          }
        });

        await Promise.all(fetchPromises);

        return data;
      }
    } else {
      console.error("Failed to fetch event data");
    }
  } catch (err) {
    console.error(err);
  }
};

const extractData = (combinedData) => {
  const extractedData = [];
  let i = 0;
  // Iterate through each event in combinedData
  for (const eventCode in combinedData) {
    const eventData = combinedData[eventCode];

    // Extract data from the sub-objects

    // Extract required fields and construct the o bject
    if (
      eventData.eventData != null &&
      eventData.eventData.qual != null &&
      eventData.eventData.qual.status != "not_started"
    ) {
      const obj = {
        key: eventData.year + "" + i,
        year: eventData.year,
        name: eventData.city,
        wins:
          eventData.eventData.qual.ranking.record.wins &&
          eventData.eventData.playoff
            ? eventData.eventData.qual.ranking.record.wins +
              eventData.eventData.playoff.record.wins
            : eventData.eventData.qual.ranking.record.wins,
        losses:
          eventData.eventData.qual.ranking.record.losses &&
          eventData.eventData.playoff
            ? eventData.eventData.qual.ranking.record.losses +
              eventData.eventData.playoff.record.losses
            : eventData.eventData.qual.ranking.record.losses,
        rank: eventData.eventData.qual.ranking.rank,
      };
      i++;
      // Add the constructed object to the array
      extractedData.push(obj);
    } else {
      continue;
    }
  }

  return extractedData;
};

export default function DataTable() {
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load() {
      const fetchedData = await fetchDataFromAPI();
      const extractedData = extractData(fetchedData);
      setIsLoading(false);
      return extractedData ? { items: extractedData } : { items: [] };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label=""
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} allowsSorting>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={list.items}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
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
