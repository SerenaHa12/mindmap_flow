"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
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
import { getApiMap, postApiMap } from "@/service/mindmapApi";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const MindMap = () => {
  const [listMap, setListMap] = useState([]);

  const getMap = async () => {
    let res = await getApiMap();
    setListMap(res.data);
    // console.log("res", res.data);
  };

  useEffect(() => {
    getMap();
  }, []);

  const newMap = {
    createdAt: "2023-12-20T23:56:55+07:00",
    id: uuidv4(),
    name: "Mind Map",
    description: "abc",
    nodes: [
      {
        id: "0",
        type: "input",
        data: { label: "Node" },
        position: { x: 0, y: 50 },
      },
    ],
    edges: [],
  };

  const handleAdd = async () => {
    let res = await postApiMap(newMap);
    setListMap((item) => {
      return [...item, newMap];
    });
  };

  return (
    <div className="my-4">
      <Button variant="secondary" onClick={handleAdd} className="mb-4">
        ADD
      </Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Create At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listMap &&
            listMap.length > 0 &&
            listMap.map((item, index) => (
              <>
                <TableRow key={index}>
                  <TableCell>
                    <Link href={`/mindmap/${item.id}`}>{item.name}</Link>
                  </TableCell>

                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-x-4">
                      <Button>View</Button>
                      <Button>Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MindMap;
