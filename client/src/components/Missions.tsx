import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_LAUNCHES } from "../graphql/queries.graphql";
import {
  GetLaunches,
  GetLaunchesVariables,
} from "../graphql/__generated__/GetLaunches";
import MissionsList from "./MissionsList";

const Missions = () => {
  // filtering option: change limit of missions available in the list
  const [changeLimit, setChangeLimit] = useState("");

  const { data } = useQuery<GetLaunches, GetLaunchesVariables>(GET_LAUNCHES, {
    variables: { limit: Number(changeLimit) },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>SpaceX Missions!</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="# of missions"
          onChange={(e) => setChangeLimit(e.target.value)}
        />
      </form>
      {data?.launches?.map((launch) => {
        return (
          <MissionsList
            key={launch?.id}
            id={Number(launch?.id)}
            missionName={launch?.mission_name!}
            details={launch?.details!}
          />
        );
      })}
    </div>
  );
};

export default Missions;
