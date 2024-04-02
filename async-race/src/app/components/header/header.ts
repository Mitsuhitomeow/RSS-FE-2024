import Component from '../create-components';
import Link from '../link-view/link';

export default function Header() {
  return new Component(
    {
      tag: 'header',
      className: 'header',
    },
    new Link({
      href: '#',
      text: 'garage',
      className: 'garage',
    }),
    new Link({
      href: '#',
      text: 'winners',
      className: 'winners',
    }),
  );
}
