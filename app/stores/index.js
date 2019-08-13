import MarketStore from './market.store';

class Stores {
  constructor() {
    this.marketStore = new MarketStore();
  }
}

const stores = new Stores();

export default stores;
