import { observable, action } from 'mobx';

export default class MarketStore {
  constructor () {

  }

  @observable marketPosts = [];
  @observable messages = [];

}
