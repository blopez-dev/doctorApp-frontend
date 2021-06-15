import { getAllUsers, createUser, getUser, deleteUser, updateById } from './users';

jest.setTimeout(6000);
describe('Test para hacer petición de todos los usuarios a la papi', () => {
  const results = [];
  const createUserWihtMockData = async (name) => {
    const user = {
      avatar: 'http://placeimg.com/640/480/nature',
      description: 'voluptate maiores ut',
      email: `Dean.Botsford${Math.random()}@yahoo.com`,
      name: name || 'Alejandro Donnelly',
      phone: '667.416.5255 x9073',
      rating: 0,
      specialty: ''
    };
    try {
      const response = await createUser(user);
      results.push(response);
      return {
        response,
        user
      };
    } catch (error) {
      throw new Error(error);
    }
  };
  it('la función debe recibir un listado de usuarios filtrados por búsqueda', async () => {
    // arrange
    const page = 10;
    const limit = 20;
    const search = 'Abril';
    // act
    try {
      await createUserWihtMockData(search);
      const users = await getAllUsers(page, limit, search);
      expect(users.count).toBeTruthy();
      expect(users.count).toEqual(1);
    } catch (error) {
      throw new Error(error);
    }
  });
  it('la función debe recibir un listado de usuarios paginados', async () => {
    // arrange
    const page = 10;
    const limit = 20;
    const search = '';
    // act
    try {
      const users = await getAllUsers(page, limit, search);

      expect(users.count).toBeTruthy();
      expect(users.rows.length).toBeLessThanOrEqual(limit);
    } catch (error) {
      throw new Error(error);
    }
  });
  it('Test to create user', async () => {
    try {
      const { user, response } = await createUserWihtMockData();

      expect(user.email).toBe(response.data.email);
    } catch (error) {
      throw new Error(error);
    }
  });
  it('Test to getUser', async () => {
    try {
      const { response } = await createUserWihtMockData();
      const user = await getUser(response.data.id);
      expect(user).toBeTruthy();
      expect(response.data.id).toEqual(user.id);
    } catch (error) {
      throw new Error(error);
    }
  });
  it('Test to delete user', async () => {
    try {
      const { response } = await createUserWihtMockData();
      const deleteResponse = await deleteUser(response.data.id);
      const user = await getUser(response.data.id);
      expect(deleteResponse).toBe('User deleted correctly');
      expect(user).toBeNull();
    } catch (error) {
      throw new Error(error);
    }
  });
  it('Test to upadte user', async () => {
    try {
      const { response } = await createUserWihtMockData();
      const updateByIdResponse = await updateById(response.data.id, { name: 'Pedro Ramirez' });
      expect(updateByIdResponse[1].name).toEqual('Pedro Ramirez');
    } catch (error) {
      throw new Error(error);
    }
  });
  afterAll(async () => {
    for await (const user of results) {
      await deleteUser(user.data.id);
    }
  });
});
