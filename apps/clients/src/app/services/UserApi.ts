import { CreateUserDTO, LoginUserDTO, UserDTO } from '../store/interfaces';
import axios from '../utils/axios';

const path = '/user';

class UserApi {
  async createUser(data: CreateUserDTO): Promise<{data: UserDTO, status: number}> {
    try {
      const response = await axios.post(`${path}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }

  async logIn(user: LoginUserDTO): Promise<{data: UserDTO, status: number}> {
    try {
      const response = await axios.post(`${path}/login`, user);
      return response.data;
    } catch (error) {
      console.error('Error al loguear: ', error);
      throw error;
    }
  }
  async updateUser(id: number, data: CreateUserDTO) {
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
