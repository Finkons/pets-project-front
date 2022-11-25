// keys may change depending on api response schema

export const PET_MODAL_KEYS = [
  {
    label: "Name:",
    key: "name",
  },
  {
    label: "Birthday:",
    key: "birthday",
  },
  {
    label: "Breed:",
    key: "breed",
  },
  {
    label: "Loсation:",
    key: "location",
  },
  {
    label: "The sex:",
    key: "sex",
  },
  {
    key: "owner",
    nested: true,
    values: [
      {
        label: "Email:",
        field: "email",
      },
      {
        label: "Phone:",
        field: "phone",
      },
    ],
  },
  {
    label: "Sell:",
    key: "price",
    category: "sell",
  },
];

export const NOTICE_ITEM_KEYS = [
  {
    label: "Breed:",
    key: "breed",
  },
  {
    label: "Place:",
    key: "location",
  },
  {
    label: "Age:",
    key: "birthday",
  },
  {
    label: "Price:",
    key: "price",
    category: "sell",
  },
];

export const NOTICE_CATEGORIES = {
  sell: {
    key: "sell",
    label: "Sell",
  },
  lostFound: {
    key: "lost-found",
    label: "Lost/found",
  },
  forFree: {
    key: "for-free",
    label: "In good hands",
  },
};

export const NOTICE_CATEGORY_LABELS = {
  [NOTICE_CATEGORIES.sell.key]: NOTICE_CATEGORIES.sell.label,
  [NOTICE_CATEGORIES.lostFound.key]: NOTICE_CATEGORIES.lostFound.label,
  [NOTICE_CATEGORIES.forFree.key]: NOTICE_CATEGORIES.forFree.label,
};


export const SUPPORTED_FORMATS =[
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];