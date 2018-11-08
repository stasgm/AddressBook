import * as React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import { IRateData, IRateRecord } from '../scrape';

const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Покупка',
    dataIndex: 'buy-rate',
    key: 'buy-rate'
  },
  {
    title: 'Продажа',
    dataIndex: 'sell-rate',
    key: 'sell-rate'
  }
];

const getDataSource = lines => {
  return lines.forEach((i: IRateRecord, idx) => {
    if (isAN(i['buy-rate'])) {
      return {
        // tslint:disable-next-line:object-literal-key-quotes
        key: idx,
        // tslint:disable-next-line:object-literal-key-quotes
        name: i.name,
        'buy-rate': i['buy-rate'],
        'sell-rate': i['sell-rate']
      };
    }
  });
};

export const RateList: React.SFC<IRateData> = props => {
  return <Table columns={columns} dataSource={getDataSource(props.output.lines)} />;
  /*     <ul>
      {props.output.lines.map((i: IRateRecord, idx) => {
        if (isAN(i['buy-rate'])) {
          return (
            <li key={idx}>
              {i.name}: {i['buy-rate']} - {i['sell-rate']}
            </li>
          );
        }
      })}
    </ul>
  ); */
};

function isAN(value) {
  if (!value) {
    return false;
  }
  value = value.replace(',', '.');
  return Number.isFinite(parseFloat(value));
}
