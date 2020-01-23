const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    case "REMOVE_FEATURE":
      const feat = state.car.features.find(ft => ft === action.payload);
      const idx = state.car.features.indexOf(feat);
      const nxt = [
        ...state.car.features.slice(0, idx),
        ...state.car.features.slice(idx + 1)
      ];
      return {
        ...state,
        car: {
          ...state.car,
          features: nxt
        }
      };
    default:
      console.log("default");
      return state;
  }
};
