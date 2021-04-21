/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { fetchData } from '../../actions/appActions';
import LoadingIndicator from '../../components/LoadingIndicator';
import Analytics from '../../components/Chart/Analytics';
import DataFilters from '../../components/Filters/DataFilters';
import ResultContainer from '../../components/Results/ResultContainer';

export default function HomePage() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.apps);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <article>
      <Helmet>
        <title>iTunes Top Paid Applications</title>
        <meta
          name="description"
          content="This page is related to iTunes Top Paid Applications"
        />
      </Helmet>
      <div>
        <Container maxWidth="lg">
          <Analytics />
          <DataFilters />
          <ResultContainer />
        </Container>
      </div>
    </article>
  );
}

HomePage.propTypes = {};
