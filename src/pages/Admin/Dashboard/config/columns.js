import React from 'react';
import { DeletePatient, EditPatient } from '../styles';

export const columns = () => [
  {
    title: 'Id',
    dataIndex: 'id'
  },
  {
    title: 'Nombre',
    dataIndex: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone'
  },
  {
    title: 'Dirección',
    dataIndex: 'address'
  },
  {
    title: 'Patologías',
    dataIndex: 'pathologies'
  }

];
