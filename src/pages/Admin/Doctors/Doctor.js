import React, { useState, useEffect } from 'react';
import { Pagination, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { getAllUsers } from '../../../common/services/users';
import Card from '../../../common/components/Card/Card';
import { WrapperContent, Content, TitleSection } from './styles';

const pageLimit = 15;
const Doctors = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [infiniteScroll, setInfiniteScroll] = useState(true);
  useEffect(() => {
    setLoading(true);
    pageLimit > 10 ? setInfiniteScroll(true) : setInfiniteScroll(false);
    getAllUsers(page, pageLimit)
      .then(setUsers)
      .finally(() => setLoading(false));
  }, [page]);

  const onPageChange = (page) => setPage(page);

  return (
    <>
      <WrapperContent>
        <TitleSection>
          <h2>Doctores</h2>
        </TitleSection>
        {loading && <Spin />}
        <Content>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={infiniteScroll}
            useWindow={false}
          >
            {users && users.rows.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                name={user.name}
                speciality={user.description}
              />
            ))}
            <Pagination
              current={page}
              pageSize={pageLimit}
              total={users?.count}
              onChange={onPageChange}
              showSizeChanger={false}
            />
          </InfiniteScroll>
        </Content>
      </WrapperContent>

    </>
  );
};

export default Doctors;
