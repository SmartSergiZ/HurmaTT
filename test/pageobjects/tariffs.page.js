import { $ } from '@wdio/globals'
import Page from './page.js';

class TariffsPage extends Page {

  get tariffsTitle () {
    return $('h1[class="main-title"]')
  }

  get chooseSixMonth () {
    return $('div=6 months')
  }

  get checkPercentage () {
    return $('div[class="percentage"]')
  }

  get changeCurency () {
    return $('div[class="currency-select"]')
  }

  get chooseUahCurency () {
    return $('option[value="uah"]')
  }

  get tariffsPrice () {
    return $('span[class="price-value"]')
  }

  get employeesNumber () {
    return $('div[class="custom-select"]')
  }

  get employeesValue () {
    return $('option[value="1"]')
  }

  get recruitersValue () {
    return $('input[type="tel"]');
  }

  get clickRedirectBtn () {
    return $('button[class="button"]');
  }

    open () {
        return super.open('tariffs');
    }
}

export default new TariffsPage();
