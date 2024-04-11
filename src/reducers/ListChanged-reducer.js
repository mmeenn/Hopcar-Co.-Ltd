export function reducer(carList, action) {
  switch (action.type) {
    case "add_Car":
      return [action.newCar, ...carList];
    case "delete_Car":
      return carList.filter((e) => e.id !== action.deleteId);
    case "edit_Car":
      const newCarList = [...carList];
      const idx = carList.findIndex((e) => e.id === action.editId);
      newCarList[idx] = { ...action.car };
      return newCarList;
  }
}
