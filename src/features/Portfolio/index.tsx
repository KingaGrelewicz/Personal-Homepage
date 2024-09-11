import {
  PortfolioHeader,
  PortfolioIcon,
  PortfolioSubheader,
} from "./styled";
import { useEffect } from "react";
import { selectErrorState, selectLoadingState, setRepos } from "./reposSlice";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import PortfolioTiles from "./PortfolioTiles";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Portfolio = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoadingState);
  const error = useAppSelector(selectErrorState);

  useEffect(() => {
    dispatch(setRepos());
  }, [dispatch]);

  return (
    <>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {loading && <Loading />}

      {error && <ErrorComponent />}

      {!loading && !error && (
        <PortfolioTiles />
      )}
    </>
  );
};