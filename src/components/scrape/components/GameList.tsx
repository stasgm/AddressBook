import * as React from 'react';
import { IGameData, IGameRecord } from '../scrape';

export const GameList: React.SFC<IGameData> = props => {
  return (
    <ul>
      {props.list.map((i: IGameRecord, idx) => (
        <li key={idx}>{i.torrent[0].name}</li>
      ))}
    </ul>
  );
};
