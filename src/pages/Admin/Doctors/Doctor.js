import React, { useState, useEffect } from 'react';
import { Pagination, Input, Spin, Row, Col } from 'antd';
import { getAllUsers } from 'common/services/users';
import useBreakpoints from 'common/hooks/use-breakpoints';
import breakpoint from 'common/enums/breakpoint';
import Card from './components/Card/Card';
import NewDoctor from './components/NewDoctor/NewDoctor';
import { WrapperContent, Content, TitleSection, Actions, AddNew } from './styles';

const pageLimit = 10;
const Doctors = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const { current } = useBreakpoints();
  const [createDoctorVisible, setCreateDoctorVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const cardsCount = {
    [breakpoint.DESKTOP]: 6,
    [breakpoint.TABLET]: 12,
    [breakpoint.MIDDLE_TABLET]: 12,
    [breakpoint.MOBILE]: 24
  };

  const cardColSpan = cardsCount[current];

  const getUsers = (search) => {
    setLoading(true);
    getAllUsers(page, pageLimit, search)
      .then((setUsers))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const { Search } = Input;
  const onPageChange = (page) => setPage(page);
  const onSearch = (search) => {
    getUsers(search);
  };

  const onCreateDoctor = () => setCreateDoctorVisible(true);
  const onDoctorsChange = () => {
    setCreateDoctorVisible(false);
    getUsers();
  };
  const hiddenCreation = () => {
    setCreateDoctorVisible(false);
  };
  return (
    <>
      <WrapperContent>
        <TitleSection>
          <h2>Doctores</h2>
        </TitleSection>
        <Actions>
          <Search placeholder="Doctores..." onSearch={onSearch} className="input input--search" />
          <AddNew onClick={onCreateDoctor}>Nuevo Doctor</AddNew>
        </Actions>
        {loading && <Spin />}
        <Content>
          <Row>
            {users && users.rows.map((user) => (
              <Col span={cardColSpan}>
                <Card
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  description={user.description}
                  onUpdate={onDoctorsChange}
                />
              </Col>

            ))}
          </Row>
        </Content>
        <Pagination
          current={page}
          pageSize={pageLimit}
          total={users?.count}
          onChange={onPageChange}
          showSizeChanger={false}
        />
        <NewDoctor
          visible={createDoctorVisible}
          onFinish={onDoctorsChange}
          onClose={hiddenCreation}
        />
      </WrapperContent>
    </>
  );
};

export default Doctors;
