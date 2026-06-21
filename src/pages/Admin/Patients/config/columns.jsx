import React from 'react';
import { DeletePatient, EditPatient } from '../styles';

export const columns = (onEdit, onDelete) => [
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
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (text, record) => (
      <div>
        <EditPatient onClick={() => onEdit(record.id)}>
          Editar
        </EditPatient>
        <DeletePatient onClick={() => onDelete(record.id)}>
          Borrar
        </DeletePatient>
      </div>
    )
  }

];
