import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  dashboard: {
    id: 'header.menu.dashboard.label',
    defaultMessage: 'แดชบอร์ด',
    description: 'The text for the user menu Dashboard navigation link.',
  },
  help: {
    id: 'header.help.label',
    defaultMessage: 'ช่วยเหลือ',
    description: 'The text for the link to the Help Center',
  },
  profile: {
    id: 'header.menu.profile.label',
    defaultMessage: 'โปรไฟล์',
    description: 'The text for the user menu Profile navigation link.',
  },
  account: {
    id: 'header.menu.account.label',
    defaultMessage: 'บัญชี',
    description: 'The text for the user menu Account navigation link.',
  },
  orderHistory: {
    id: 'header.menu.orderHistory.label',
    defaultMessage: 'ประวัติคำสั่งซื้อ',
    description: 'The text for the user menu Order History navigation link.',
  },
  skipNavLink: {
    id: 'header.navigation.skipNavLink',
    defaultMessage: 'ข้ามไปที่เนื้อหาหลัก',
    description: 'A link used by screen readers to allow users to skip to the main content of the page.',
  },
  signOut: {
    id: 'header.menu.signOut.label',
    defaultMessage: 'ลงชื่อออก',
    description: 'The label for the user menu Sign Out action.',
  },
});

export default messages;
