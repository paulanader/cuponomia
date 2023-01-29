import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { useRandomuser } from "../hook/RandomuserProvider";
import { Wrapper } from "../components/Wrapper";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Update } from "../components/Update";
import { RandomuserType } from "../@type/RandomuserType";

export const Home = () => {
  const { randomusers, isLoading, getRandomusers } = useRandomuser();
  const [data, setData] = useState<RandomuserType[] | []>([]);

  useEffect(() => {
    getRandomusers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(randomusers);
  }, [randomusers]);

  console.log({ data });

  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="row row-cols-1 row-cols-md-2 mb-3 mt-3">
          <div className="col col-md-2">
            <Update />
          </div>
          <div className="col col-md-2">
            <Search
              onSearch={() => console.log("search")}
              getRandomuser={setData}
              randomusers={data}
            />
          </div>
        </div>
        <Table
          randomusers={data}
          isLoading={isLoading}
          setRansomusers={setData}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};
