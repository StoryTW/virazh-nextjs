type IAnimateVariants = keyof typeof animateObject;

const animateObject = {
  // modal: {
  //   open: {
  //     opacity: 1,
  //     scale: 1,
  //   },
  //   close: {
  //     opacity: 0,
  //     scale: 0.92,
  //   },
  // },

  // combobox: {
  //   open: {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   close: {
  //     y: -10,
  //     opacity: 0,
  //   },
  // },

  // animateTooltip: {
  //   show: {
  //     opacity: 1,
  //     scale: 1,
  //   },
  //   hide: {
  //     opacity: 0,
  //     scale: 0.7,
  //   },
  // },

  searchBlock: {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  },

  navbar: {
    hide: {
      x: -445,
    },
    show: {
      x: 0,
    },
  },

  navbarOverlay: {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  },

  heightWithOpacity: {
    hide: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: 'auto',
    },
  },

  navDropdown: {
    hide: {
      y: -10,
      opacity: 0,
      height: 0,
      overflow: 'hidden',
    },
    show: {
      y: -10,
      opacity: 1,
      height: 'auto',
    },
  },

  faqDropdown: {
    hide: {
      height: 0,
      overflow: 'hidden',
      opacity: 0,
    },
    show: { height: 'auto', opacity: 1 },
  },
};

export const animateHelper = (variant: IAnimateVariants) => animateObject[variant];
