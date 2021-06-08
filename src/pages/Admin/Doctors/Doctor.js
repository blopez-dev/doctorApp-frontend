import React, { useState, useEffect } from 'react';
import { Pagination, Spin } from 'antd';
import { getAllUsers } from '../../../common/services/users';
import Card from '../../../common/components/Card/Card';
import { WrapperContent, Content, TitleSection } from './styles';

const pageLimit = 15;
const Doctors = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
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
        </Content>
      </WrapperContent>

    </>
  );
};

export default Doctors;
