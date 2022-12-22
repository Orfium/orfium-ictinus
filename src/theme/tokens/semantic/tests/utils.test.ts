import colors from '../../../globals/colors';
import opacity from '../../../globals/opacity';
import { getTokensValue } from '../../utils';
import { tokensObject, token } from './constants';

describe('GetTokensValue functionality', () => {
  test('that parseToken returns color if format is {colors.<palette>.<shade>}', () => {
    expect(getTokensValue(tokensObject)('colorToken')).toEqual(colors.flat.blue[500]);
  });

  test('that parseToken returns color if hex or rgba', () => {
    expect(getTokensValue(tokensObject)('hexToken')).toEqual('#123123');
    expect(getTokensValue(tokensObject)('rgbaToken')).toEqual('rgba(0,0,0,0)');
  });

  test('that parseToken returns css value if format is {<globals>.<value>}', () => {
    expect(getTokensValue(tokensObject)('opacityToken')).toEqual(opacity.get('4'));
  });

  test('that parseToken returns token value if object has only one value-type pair', () => {
    expect(getTokensValue(token)('any_path_here')).toEqual(opacity.get('4'));
  });

  test('that parseToken returns empty string if path not found', () => {
    expect(getTokensValue(tokensObject)('path_that_doesnt_exists')).toEqual('');
  });
});
