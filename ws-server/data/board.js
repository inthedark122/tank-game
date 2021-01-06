const gridSize = 20

export const tanks = {}
export const bullets = []

function random() {
  return Math.floor(Math.random() * gridSize)
}

function getNextPosition(tank) {
  const { x, y } = tank

  switch (tank.position) {
    case 'top':
      return { x, y: y - 1 }
    case 'right':
      return { x: x + 1, y }
    case 'bottom':
      return { x, y: y + 1 }
    case 'left':
      return { x: x - 1, y }
  }
}

function canMove(tank, position) {
  switch (position) {
    case 'top':
      return tank.y > 0
    case 'right':
      return tank.x < gridSize - 1
    case 'bottom':
      return tank.y < gridSize - 1
    case 'left':
      return tank.x > 0
  }
}

export function addTank(tankId) {
  tanks[tankId] = { tankId, x: random(), y: random(), position: 'right' }
}

export function addBullet(tankId) {
  const tank = tanks[tankId]

  bullets.push({ tankId, ...getNextPosition(tank), position: tank.position })
}

export function removeTank(tankId) {
  delete tanks[tankId]
}

export function moveTank(tankId, position) {
  const tank = tanks[tankId];

  if (canMove(tank, position)) {
    tank.position = position;
    Object.assign(tank, getNextPosition(tank));
  }
}
