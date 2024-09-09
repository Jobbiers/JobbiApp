import axios from "../utils/axios";


const path = '/user';

interface UserRegisterInterface {
  email: string;
  name: string;
  lastName: string;
  password: string;
}

interface UserLogInInterface {
  user?: string;
  phone?: number;
  password: string;
}

class UserApi {
    async createUser(data: UserRegisterInterface) {
    try {
      const response = await axios.post(`${path}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }

    async logIn(user: UserLogInInterface) {
    try {
      console.log(axios.defaults.baseURL)
      const response = await axios.post(`${path}/login`, user).catch()
      return response.data;
    } catch (error) {
      console.error('Error al loguear: ', error);
      throw error;
    }
  }
    async updateUser(id: number, data: UserRegisterInterface) {
    try {
      const response = await axios.put(`${path}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw error;
    }
  }

    async deleteUser(id: number) {
    try {
      const response = await axios.delete(`${path}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  }
}

export default UserApi;
