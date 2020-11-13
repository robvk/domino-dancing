import { Utility } from './domino-utility.js';
/**
 * Collection of static methods drawing tiles HTML representations
 */
export class DominoIcon {
  /**
   * Returnes HTML entity representing a tile with corresponding ID
   * @param id tile id (i.e. '06' or '15')
   */
  static from(id: string): string {
    return DominoIcon.tileIcon[id];
  }

  /**
   * Removes HTML representation of a tile from it's parent HTML element
   */
  static remove({ stock, id }: { stock: HTMLElement; id: string }): void {
    const tileIcon = Utility.getElement(id);
    try {
      stock.removeChild(tileIcon);
    } catch (error) {
      throw new Error(`Can not remove tile icon. ${error}`);
    }
  }

  /**
   * Creates HTML element repesenting tile with ID='id' and appends it
   * to HTML element 'stock'
   */
  static create({
    stock,
    id,
  }: {
    stock: HTMLElement;
    id: string;
  }): HTMLElement {
    const iconSpan: HTMLElement = document.createElement('span');
    iconSpan.classList.add('tile');
    iconSpan.innerHTML = DominoIcon.from(id);
    iconSpan.id = id;
    stock.appendChild(iconSpan);
    return iconSpan;
  }

  /**
   * The rule of converting tile ID to HTML entity
   */
  static tileIcon: { [key: string]: string } = {
    '00': '&#127025;',
    '01': '&#127026;',
    '02': '&#127027;',
    '03': '&#127028;',
    '04': '&#127029;',
    '05': '&#127030;',
    '06': '&#127031;',
    10: '&#127032;',
    11: '&#127033;',
    12: '&#127034;',
    13: '&#127035;',
    14: '&#127036;',
    15: '&#127037;',
    16: '&#127038;',
    20: '&#127039;',
    21: '&#127040;',
    22: '&#127041;',
    23: '&#127042;',
    24: '&#127043;',
    25: '&#127044;',
    26: '&#127045;',
    30: '&#127046;',
    31: '&#127047;',
    32: '&#127048;',
    33: '&#127049;',
    34: '&#127050;',
    35: '&#127051;',
    36: '&#127052;',
    40: '&#127053;',
    41: '&#127054;',
    42: '&#127055;',
    43: '&#127056;',
    44: '&#127057;',
    45: '&#127058;',
    46: '&#127059;',
    50: '&#127060;',
    51: '&#127061;',
    52: '&#127062;',
    53: '&#127063;',
    54: '&#127064;',
    55: '&#127065;',
    56: '&#127066;',
    60: '&#127067;',
    61: '&#127068;',
    62: '&#127069;',
    63: '&#127070;',
    64: '&#127071;',
    65: '&#127072;',
    66: '&#127073;',
  };
}

export default DominoIcon;