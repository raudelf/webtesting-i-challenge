module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const {name, enhancement} = item;

  if (enhancement == 20) {
    return (
      `${name} is already at max enhancement!`, {...item}
      )
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}

function fail(item) {
  const {enhancement, durability} = item;

  if (enhancement < 15) {
    return {...item, durability: durability - 5}
  } else if (enhancement > 14) {
    return {...item, durability: durability - 10}
  } else if (enhancement > 16) {
    return {...item, enhancement: enhancement - 1}
  };
  
};

function repair(item) {
  const {enhancement, durability} = item;

  if (enhancement > 20 || enhancement < 0 || durability > 100 || durability < 0) {
    return 'Item enhancement or durability is not within range!'
  } else {
    return { ...item, durability: 100 };
  }
}

function get(item) {
  return { ...item };
}
