import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_LAUNCHES } from "../graphql/queries.graphql";
import MissionsList from "./MissionsList";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import {
  GetLaunches,
  GetLaunchesVariables,
} from "../graphql/__generated__/GetLaunches";
import "./Missions.css";

type Order = "asc" | "desc";

type Launches = {
  id: number;
  missionName?: string;
  details?: string;
};

const Missions = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Launches>("id");
  const [changeLimit, setChangeLimit] = useState("");

  const { data } = useQuery<GetLaunches, GetLaunchesVariables>(GET_LAUNCHES, {
    variables: { limit: Number(changeLimit) },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleRequestSort = (property: keyof Launches) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const compare = (a: any, b: any) => {
    if (order == "asc") {
      return a.id - b.id;
    } else if (order == "desc") {
      return b.id - a.id;
    }
  };

  return (
    <div>
      <div className="Form">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Edit amount of missions to render"
            value={changeLimit}
            onChange={(e) => setChangeLimit(e.target.value)}
          />
        </form>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  direction={order === "desc" ? order : "asc"}
                  onClick={() => handleRequestSort("id")}
                  active={true}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>Mission Name</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          {data?.launches
            ?.slice()
            .sort((a: any, b: any) => compare(a, b)!)
            .map((launch) => {
              return (
                <MissionsList
                  key={launch?.id}
                  id={Number(launch?.id)}
                  missionName={launch?.mission_name!}
                  details={launch?.details!}
                />
              );
            })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Missions;
