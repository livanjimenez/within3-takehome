import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type Launches = {
  id: number;
  missionName: string;
  details: string;
};

const MissionsList: React.FC<Launches> = (props) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell key={props.id}>{props.id}</TableCell>
        <TableCell>{props.missionName}</TableCell>
        <TableCell>{props.details}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default MissionsList;
