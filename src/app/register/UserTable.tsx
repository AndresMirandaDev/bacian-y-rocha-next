'use client';
import { User } from '@prisma/client';
import { Box, Table, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Pagination from '../components/Pagination';

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setPage] = useState(0);
  return (
    <>
      <Box className="mb-5 pl-2">
        <Text className="text-xl">Registro de usuarios</Text>
      </Box>
      <Table.Root variant="surface">
        <Table.Header className="bg-blue-300">
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Número telefónico</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users
            .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
            .map((u) => {
              return (
                <Table.Row key={u.id}>
                  <Table.Cell>
                    <Box className="text-xl text-slate-300">
                      <FaUserCircle />
                    </Box>
                  </Table.Cell>
                  <Table.Cell>{u.name}</Table.Cell>
                  <Table.Cell>{u.email}</Table.Cell>
                  <Table.Cell>{u.phone}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table.Root>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        setPage={setPage}
        itemCount={users.length}
      />
    </>
  );
};

export default UserTable;
