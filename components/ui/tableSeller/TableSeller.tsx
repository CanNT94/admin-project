import React from 'react';
import { ITableSeller } from '../../../model/seller';
import { Panigation } from "../panigation";

type ITableSellerProps = {
    dataSource: ITableSeller[];
    columns: ITableSeller[];
};

const TableSeller = ({ dataSource, columns }: ITableSellerProps) => {

    return (
        <div className="in-table">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column.id}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map(data => (
                        <tr role="row" key={data.id}>
                            <td className="text-muted w-6/12">{data.name}</td>
                            <td className="text-muted w-3/12">{data.sales}</td>
                            <td className="text-muted w-3/12">{data.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Panigation total={15} current_page={1} per_page={6} />
        </div>
    );
};

export default TableSeller;
