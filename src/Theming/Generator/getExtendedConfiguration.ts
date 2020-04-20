import { Theme } from '../..';
import { Configuration } from '../Configuration';
import { getDefaultTheme, getCustomPropertyVariableName } from './utils';
import set from 'lodash/set';

export function getExtendedConfiguration(themes: Theme[], config: Configuration) {
  const extendConfiguration: any = {};
  const properties = getDefaultTheme(themes)
    .getCustomProperties()
    .filter((prop) => prop.extends());

  properties.forEach((property) => {
    set(extendConfiguration, property.getPath(), `var(${getCustomPropertyVariableName(property)})`);
  });

  return extendConfiguration;
}
