import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery('en-US', { newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 });

  console.log(cryptoNews);

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      News
    </div>
  );
}

export default News;
