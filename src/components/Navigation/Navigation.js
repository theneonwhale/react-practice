import NavigationItem from '../NavigationItem/NavigationItem';

export default function Navigation({ items }) {
  return items
    ? items.map(item => <NavigationItem key={item.text} {...item} />)
    : null;
}
