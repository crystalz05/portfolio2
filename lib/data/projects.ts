export interface Project {
  id: string | number;
  badge: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  github?: string;
  githubContract?: string;
  demo?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'takturns',
    badge: 'Web3 & Mobile',
    title: 'TakTurns',
    description: 'A Web3-powered decentralized rotational savings (ROSCA) app. Users can securely pool collateral and contribute to cycles using USDC/ERC20 tokens via trustless smart contracts.',
    features: ['WalletConnect', 'Smart Contracts', 'DeFi Savings', 'ERC20 Transfers'],
    tags: ['Flutter', 'Solidity', 'Web3', 'WalletConnect'],
    github: 'https://github.com/crystalz05/takturns-flutter-app.git',
    githubContract: 'https://github.com/crystalz05/takturns-contract.git',
    images: [
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/wallet_connection.jpg',
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/home_dashboard.jpg',
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/group_details.jpg',
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/wallect_selection.jpg',
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/create_group.jpg',
      'https://raw.githubusercontent.com/crystalz05/takturns-flutter-app/main/assets/screenshots/join_group.jpg'
    ],
  },
  {
    id: 1,
    title: 'Expense Tracker App',
    badge: 'Personal Finance',
    description:
      'A comprehensive expense management application with offline-first architecture, real-time sync, and detailed analytics.',
    tags: ['Flutter', 'Supabase', 'Dart', 'Analytics'],
    features: ['Offline/Online Sync', 'Clean UI', 'Expense Analytics'],
    github: 'https://github.com/crystalz05/expense_tracker_flutter_app',
    demo: '#',
    images: [
      '/project_images/expense_tracker/Screenshot_20260512-192829.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192833.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192839.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192842.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192846.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192858.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192907.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192925.jpg',
    ],
  },
  {
    id: 2,
    title: 'CampusPay',
    badge: 'Fintech',
    description:
      'A comprehensive Flutter application for campus financial management, wallet funding, P2P transfers, utility payments, and fee processing.',
    tags: ['Flutter', 'Supabase', 'Clean Architecture', 'Dart'],
    features: ['Wallet System', 'P2P Transfers', 'Utility Payments'],
    github: 'https://github.com/crystalz05/campuspay',
    demo: '#',
    images: [
      '/project_images/campuspay/login.png',
      '/project_images/campuspay/signup.png',
      '/project_images/campuspay/home.png',
      '/project_images/campuspay/fund_wallet.png',
      '/project_images/campuspay/pay.png',
      '/project_images/campuspay/buy_data.png',
      '/project_images/campuspay/transfer.png',
      '/project_images/campuspay/notifications.png',
      '/project_images/campuspay/profile.png',
      '/project_images/campuspay/tx_history.png',
      '/project_images/campuspay/tx_detail.png',
    ],
  },
  {
    id: 3,
    title: 'SabiStyle',
    badge: 'eCommerce',
    description:
      'A premium eCommerce app built with Flutter, seamless shopping experience, elegant UI, smart search, and robust order management.',
    tags: ['Flutter', 'Supabase', 'Dart', 'eCommerce'],
    features: ['Smart Search', 'Shopping Cart', 'Real-time Notifications'],
    github: 'https://github.com/crystalz05/sabistyle',
    demo: '#',
    images: [
      '/project_images/sabistyle/Screenshot_20260512-190555.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191344.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191346.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191356.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191359.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191406.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191409.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191414.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191422.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191431.jpg',
    ],
  },
  {
    id: 4,
    title: 'Tyro Focus Timer',
    badge: 'Productivity',
    description:
      'A clean, production-grade productivity timer built with Flutter. Automatic Pomodoro cycling, persistent session history, and weekly stats.',
    tags: ['Flutter', 'SQLite', 'Clean Architecture', 'Dart'],
    features: ['Pomodoro Cycle', 'Persistent History', 'Weekly Stats'],
    github: 'https://github.com/crystalz05/tyro-focus-timer',
    demo: '#',
    images: [
      '/project_images/focus_timer/timer_light.png',
      '/project_images/focus_timer/timer_dark.png',
      '/project_images/focus_timer/stats_light.png',
      '/project_images/focus_timer/stats_dark.png',
      '/project_images/focus_timer/settings_light.png',
      '/project_images/focus_timer/settings_dark.png',
    ],
  },
];
