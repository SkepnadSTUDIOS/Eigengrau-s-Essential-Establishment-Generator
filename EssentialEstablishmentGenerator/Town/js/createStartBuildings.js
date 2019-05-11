/* global setup */
setup.createStartBuildings = function (town) {
  var buildingType = ['townSquare', 'tavern', 'alchemist', 'GeneralStore', 'smithy', 'market', 'temple', 'docks']

  if (town.hasBrothel) {
    buildingType.push('brothel')
  }

  buildingType.forEach(function (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    var building = setup['create' + type.toUpperFirst()](town)
    town.buildings[type][building.key] = building
  })

  var bakery = setup.goodsAndServices.bakery.create(town)
  town.buildings.bakery[bakery.key] = bakery

  var florist = setup.goodsAndServices.florist.create(town)
  town.buildings.florist[florist.key] = florist
  return town
}
