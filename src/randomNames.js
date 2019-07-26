const randomNames = [
  'Velimir Wulfric',
  'Nirmal Vera',
  'Aksel Gennadios',
  'Shinta Diocles',
  'Ambrosia Hanna',
  'Tomaas Theophilus',
  'Melissa Diederik',
  'Piran Nisha',
  'Biagino Rakhi',
  'Nerthus Ruben',
  'Brayan Parris',
  'Osbeorn Aristophanes',
  'Montgomery Jovanka',
  'Deziree Maxen'
];

export const randomizeNames = () => {
  let num = Math.floor(Math.random() * 14);
  return randomNames[num];
};
