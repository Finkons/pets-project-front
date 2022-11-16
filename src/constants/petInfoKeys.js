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
    key: "place",
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
    key: "place",
  },
  {
    label: "Age:",
    key: "age",
  },
  {
    label: "Price:",
    key: "price",
    category: "sell",
  },
];

export const NOTICE_CATEGORY_LABELS = {
  sell: "Sell",
  "lost-found": "Lost/found",
  "for-free": "In good hands",
};
