'use client';
import Pagination from '@/app/components/Pagination';
import colors from '@/app/styles/colors';
import { WorkOrder } from '@prisma/client';
import { Box, Table, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React, { use, useState } from 'react';

interface Props {
  workOrders: WorkOrder[];
}

const WorkOrdersTable = ({ workOrders }: Props) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <Box className="mb-5 pl-2">
        <Text className="text-xl">Ordenes de trabajo</Text>
      </Box>
      <Table.Root variant="surface" className="shadow-md">
        <Table.Header style={{ backgroundColor: colors.tableHead }}>
          <Table.Row className="text-white">
            <Table.ColumnHeaderCell>N° O.T</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Cliente
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Text className="hidden md:block">Componente</Text>
              <Text className="block md:hidden">Descripción</Text>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Fecha inicio
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Fecha estimada
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workOrders
            .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
            .map((wo, index) => {
              return (
                <Table.Row
                  key={wo.id}
                  className={
                    index % 2 === 0 ? colors.tableNthChild : 'bg-white'
                  }
                >
                  <Table.Cell className="font-bold">
                    <Link href={`/ot/${wo.id}`}> #{wo.number}</Link>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {wo.client}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="block md:hidden text-slate-500 italic ">
                      Componente
                    </div>
                    <div>{wo.componentName}</div>
                    <div className="block md:hidden text-slate-500 italic ">
                      Cliente
                    </div>
                    <div className="block md:hidden">{wo.client}</div>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {new Date(wo.startDate).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {new Date(wo.estimatedDate).toLocaleDateString()}
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table.Root>
      <Pagination
        itemCount={workOrders.length}
        currentPage={currentPage}
        setPage={setCurrentPage}
        pageSize={pageSize}
      />
    </>
  );
};

export default WorkOrdersTable;
