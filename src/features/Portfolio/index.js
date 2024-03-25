import { useDispatch, useSelector } from "react-redux";
import {
  PortfolioHeader,
  PortfolioIcon,
  PortfolioSubheader,
} from "./styled";
import { useEffect } from "react";
import { setRepos } from "./reposSlice";
import Loading from "../Loading";
import Error from "../Error";
import Tile from "./Tile";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.repos.loading);
  const error = useSelector(state => state.repos.error);

  useEffect(() => {
    dispatch(setRepos());
  }, [dispatch]);

  return (
    <>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {loading && <Loading />}

      {error && <Error />}

      {!loading && !error && (
        <Tile />
      )}
    </>
  );
};