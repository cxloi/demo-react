import { mock } from 'jest-mock-extended';
import { Theme as CustomTheme } from 'demo-sb-react-components';

jest.mock('@material-ui/core/styles', () => ({
  ...jest.requireActual('@material-ui/core/styles'),
  Theme: mock<CustomTheme>(),
}));
