import * as React from 'react';
import { Button } from 'antd';
import { RateList, GameList } from './components';
import { entityAPI } from './api';

export interface IServerRateData {
  success?: any;
  data: IRateData;
}

export interface IServerGameData {
  success?: any;
  data: IGameData;
}

export interface IRateRecord {
  name: string;
  'buy-rate': string;
  'sell-rate': string;
}

export interface IRateData {
  output: {
    lines: IRateRecord[];
  };
}

export interface IGameRecord {
  torrent: {
    name: string;
  }[];
}

export interface IGameData {
  list: IGameRecord[];
}

interface IState {
  rateList: IRateData;
  gameList: IGameData;
  loadingRateStatus: boolean;
  loadingGameStatus: boolean;
  statusMessage: string;
}

export class Scrape extends React.Component<{}, IState> {
  public initialState = {
    rateList: {
      output: {
        lines: []
      }
    },
    gameList: {
      list: []
    }
  };

  public state: Readonly<IState> = {
    rateList: this.initialState.rateList,
    gameList: this.initialState.gameList,
    loadingRateStatus: false,
    loadingGameStatus: false,
    statusMessage: ''
  };

  public render() {
    return (
      <>
        <div>Scrape test</div>
        <div>{this.state.statusMessage}</div>
        <Button onClick={this.handleLoadRatesButton} loading={this.state.loadingRateStatus}>
          Load rates
        </Button>
        <Button onClick={this.handleLoadGamesButton} loading={this.state.loadingGameStatus}>
          Load games
        </Button>
        <RateList output={this.state.rateList.output} />
        <GameList list={this.state.gameList.list} />
      </>
    );
  }

  private getRatesData = () => {
    entityAPI
      .fetchRateData()
      .then(data => {
        this.setState({ rateList: data, loadingRateStatus: false });
      })
      .catch(e => this.setState({ statusMessage: `Ошибка: ${e.message}`, loadingRateStatus: false }));
  };

  private getGamesData = () => {
    entityAPI
      .fetchGameData()
      .then(data => {
        this.setState({ gameList: data, loadingGameStatus: false });
      })
      .catch(e => this.setState({ statusMessage: `Ошибка: ${e.message}`, loadingGameStatus: false }));
  };

  private handleLoadGamesButton = () => {
    this.setState(
      { gameList: this.initialState.gameList, loadingGameStatus: true, statusMessage: '' },
      this.getGamesData
    );
  };

  private handleLoadRatesButton = () => {
    this.setState(
      { rateList: this.initialState.rateList, loadingRateStatus: true, statusMessage: '' },
      this.getRatesData
    );
  };
}
