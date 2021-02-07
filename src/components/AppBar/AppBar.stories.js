import AppBar from './AppBar';
import { navItems } from '../Navigation/Navigation.stories';

const Stories = {
  title: 'AppBar',
  component: AppBar,
};
export default Stories;

const Template = args => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImg: 'https://www.flaticon.com/premium-icon/icons/svg/3006/3006876.svg',
  navItems,
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  isOpen: true,
};
