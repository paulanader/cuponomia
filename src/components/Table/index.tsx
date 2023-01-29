// @ts-ignore
import { useState } from "react";
import { RandomuserType } from "../../@type/RandomuserType";
import { Loading } from "../Loading";
import { Button } from "./styles";

interface ITableProps {
  randomusers: RandomuserType[];
  isLoading: boolean;
  setRansomusers: (randomusers: RandomuserType[]) => void;
}

export const Table: React.FC<ITableProps> = ({
  randomusers,
  isLoading,
  setRansomusers,
}) => {
  const [order, setOrder] = useState("ASC");

  const sortBy = (
    randomusersType: keyof RandomuserType,
    nameType?: keyof RandomuserType["name"]
  ) => {
    if (!nameType) {
      if (order === "ASC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType] > b[randomusersType] ? 1 : -1
        );
        setRansomusers(newData);
        setOrder("DSC");
      }

      if (order === "DSC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType] < b[randomusersType] ? 1 : -1
        );
        setRansomusers(newData);
        setOrder("ASC");
      }
    }

    if (nameType) {
      if (order === "ASC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][nameType] > b[randomusersType][nameType] ? 1 : -1
        );
        setRansomusers(newData);
        setOrder("DSC");
      }

      if (order === "DSC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][nameType] < b[randomusersType][nameType] ? 1 : -1
        );
        setRansomusers(newData);
        setOrder("ASC");
      }
    }
  };

  const sortByLocation = (
    randomusersType: keyof RandomuserType,
    locationType: keyof RandomuserType["location"],
    streetType?: keyof RandomuserType["location"]["street"]
  ) => {
    if (!streetType) {
      if (order === "ASC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][locationType] > b[randomusersType][locationType]
            ? 1
            : -1
        );
        setRansomusers(newData);
        setOrder("DSC");
      }

      if (order === "DSC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][locationType] < b[randomusersType][locationType]
            ? 1
            : -1
        );
        setRansomusers(newData);
        setOrder("ASC");
      }
    } else {
      if (order === "ASC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][locationType][streetType] >
          b[randomusersType][locationType][streetType]
            ? 1
            : -1
        );
        setRansomusers(newData);
        setOrder("DSC");
      }

      if (order === "DSC") {
        const newData = [...randomusers].sort((a, b) =>
          a[randomusersType][locationType][streetType] <
          b[randomusersType][locationType][streetType]
            ? 1
            : -1
        );
        setRansomusers(newData);
        setOrder("ASC");
      }
    }
  };

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">
            <Button onClick={() => sortBy("name", "title")}>Title</Button>
          </th>
          <th scope="col" onClick={() => sortBy("name", "first")}>
            <Button>First name</Button>
          </th>
          <th scope="col" onClick={() => sortBy("name", "last")}>
            <Button>Last name</Button>
          </th>
          <th scope="col" onClick={() => sortBy("gender")}>
            <Button>Gender</Button>
          </th>
          <th scope="col">
            <Button
              onClick={() => sortByLocation("location", "street", "name")}
            >
              Street
            </Button>
          </th>
          <th
            scope="col"
            onClick={() => sortByLocation("location", "street", "number")}
          >
            <Button>Number</Button>
          </th>
          <th scope="col">
            <Button onClick={() => sortByLocation("location", "city")}>
              City
            </Button>
          </th>
          <th scope="col" onClick={() => sortByLocation("location", "state")}>
            <Button>State</Button>
          </th>
          <th scope="col" onClick={() => sortByLocation("location", "country")}>
            <Button>Country</Button>
          </th>
          <th scope="col">
            <Button onClick={() => sortBy("phone")}>Phone</Button>
          </th>
          <th scope="col">
            <Button onClick={() => sortBy("cell")}>Cell</Button>
          </th>
          <th scope="col">
            <Button onClick={() => sortBy("email")}>E-mail</Button>
          </th>
        </tr>
      </thead>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center w-100">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <tbody>
          {randomusers.map((data) => (
            <tr>
              <th>{data.name.title}</th>
              <th>{data.name.first}</th>
              <th>{data.name.last}</th>
              <th>{data.gender}</th>
              <th>{data.location.street.name}</th>
              <th>{data.location.street.number}</th>
              <th>{data.location.city}</th>
              <th>{data.location.state}</th>
              <th>{data.location.country}</th>
              <th>{data.phone}</th>
              <th>{data.cell}</th>
              <th>{data.email}</th>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};
