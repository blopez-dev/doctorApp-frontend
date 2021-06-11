const columns = [
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
    align: 'right',
    render: (text, record) => (
      <div>
        <button onClick={() => console.log(record.id)}>
          Editar
        </button>
        <button onClick={() => console.log(record.id)}>
          Borrar
        </button>
      </div>
    )
  }

];
export default columns;
